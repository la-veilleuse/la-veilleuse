'use strict';

const Handlebars = require('handlebars');
const fs = require('fs');
const Metalsmith = require('metalsmith');
const assets = require('metalsmith-assets');
const markdown = require('metalsmith-markdownit');
const layouts = require('metalsmith-layouts');
const hljs = require('highlight.js');
const collections = require('metalsmith-collections');
const excerpts = require('metalsmith-excerpts');
const pagination = require('metalsmith-pagination');
const permalinks = require('metalsmith-permalinks');
const more = require('metalsmith-more');
const each = require('metalsmith-each');
const fileMetadata = require('metalsmith-filemetadata');
const drafts = require('metalsmith-drafts');
const ignore = require('metalsmith-ignore');
const autoprefixer = require('metalsmith-autoprefixer');

const htmlMinifier = require('metalsmith-html-minifier');
const cleanCss = require('metalsmith-clean-css');

const moment = require('moment');
const baseUrl = 'http://poneycase.github.io/poney-case/';


// Handlebars configuration
Handlebars.registerPartial({
  'header': fs.readFileSync('./layouts/partials/header.hbt').toString(),
  'footer': fs.readFileSync('./layouts/partials/footer.hbt').toString()
});
Handlebars.registerHelper('baseUrl', () => baseUrl);
Handlebars.registerHelper('dateFormat', context => moment(context).format('LL'));
Handlebars.registerHelper('activeIfCurrent', (current, page) => current === page ? 'active' : '');


let md = markdown({
    typographer: true,
    html: true,
    linkify: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (__) {}

        return ''; // use external default escaping
    }
});

md.parser
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
//    .use(require('markdown-it-footnote')) TODO reactiver les plugins quand ils marcherons, ouvrir une PR ?
//    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-abbr'))
/*    .use(require('markdown-it-container'), 'warrning', {
    validate: function(params) {
        return params.trim().match(/warning/);
    },

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/warning/);

        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<p class="warning">\n';

        } else {
            // closing tag
            return '</p>\n';
        }
    }
})*/;

// Use excerpt if there is no <!-- more --> tag
const excerptIfNotMore = each((file, filename) => {
    if(filename.endsWith('.html')) {
        file.less = file.less || file.excerpt;
    }
});


// Articles
const metalsmithPipeline = Metalsmith(__dirname)
    .use(fileMetadata([{
        pattern: 'articles/*.md',
        metadata: {
            layout: 'article.hbt'
        }
    }]))
    .use(drafts())
    .use(collections({
        articles: {
            pattern: 'articles/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(md)
    .use(permalinks({
        pattern: 'articles/:title',
        relative: false
    }))
    .use(pagination({
        'collections.articles': {
            perPage: 9,
            layout: 'paginated-index.hbt',
            first: 'index.html',
            path: 'index-:num.html'
        }
    }))
    .use(ignore(['index-1.html']))
    .use(excerpts())
    .use(more())
    .use(excerptIfNotMore)
    .use(layouts('handlebars'));

// CSS
metalsmithPipeline
    .use(autoprefixer())
    .use(assets({
        source: 'node_modules/highlight.js/styles',
        destination: 'styles'
    }));

// Minify in production
metalsmithPipeline
    .use(cleanCss())
    .use(htmlMinifier());

// Build
metalsmithPipeline
    .destination('./build')
    .build(err => {
        if(err) {
            throw err;
        }
    });
