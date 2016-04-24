'use strict';

const PROD = 'production';

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
const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');

const moment = require('moment');
moment.locale('fr');

const buildTarget = './build';
const env = process.env.NODE_ENV;
const args = process.argv.slice(2);
const isWatch = args.some(arg => arg.includes('watch'));
const isServe = args.some(arg => arg.includes('serve'));

const baseUrl = env === PROD
    ? 'http://la-veilleuse.github.io/la-veilleuse/'
    : 'http://localhost:8080/';


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

// Handlebars configuration
const configureHandlebars = () => {
    Handlebars.registerPartial({
      'header': fs.readFileSync('./layouts/partials/header.hbs').toString(),
      'footer': fs.readFileSync('./layouts/partials/footer.hbs').toString()
    });
    Handlebars.registerHelper('baseUrl', () => baseUrl);
    Handlebars.registerHelper('isWatch', function(options) {
        return options[isWatch ? 'fn' : 'inverse'](this);
    });
    Handlebars.registerHelper('dateFormat', context => moment(context).format('LL'));
    Handlebars.registerHelper('classIfEquals', (className, first, second) => first === second ? className : '');
};

// Use excerpt if there is no <!-- more --> tag
const excerptIfNotMore = each((file, filename) => {
    if(filename.endsWith('.html')) {
        file.less = file.less || file.excerpt;
    }
});


const metalsmithPipeline = Metalsmith(__dirname)
    .use(configureHandlebars);

// Articles
metalsmithPipeline
    .use(fileMetadata([{
        pattern: 'articles/*.md',
        metadata: {
            layout: 'article.hbs'
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
            layout: 'paginated-index.hbs',
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
        source: 'node_modules/highlightjs/',
        destination: 'lib/highlightjs'
    }))
    .use(assets({
        source: 'node_modules/highlight.js/styles',
        destination: 'styles'
    }));

// Favicon & manifest
metalsmithPipeline
    .use(assets({
        source: 'src/favicon',
        destination: ''
    }));

// Minify in production
if(env === PROD) {
    metalsmithPipeline
        .use(cleanCss())
        .use(htmlMinifier());
}

// Watch mode
if(isWatch) {
    metalsmithPipeline
        .use(watch({
            paths: {
                'src/**/*': true,
                'layouts/**/*': true,
            },
            livereload: true,
        }));
}

// Serve mode
if(isServe) {
    metalsmithPipeline
        .use(serve({
            port: 8080,
            verbose: true,
        }));
}

// Build
metalsmithPipeline
    .destination(buildTarget)
    .build(err => {
        if(err) {
            throw err;
        }
    });
