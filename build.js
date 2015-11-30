'use strict';

let Metalsmith = require('metalsmith');
let assets = require('metalsmith-assets');
let markdown = require('metalsmith-markdownit');
let layouts = require('metalsmith-layouts');
let path = require('path');
let moveUp = require('metalsmith-move-up');
let hljs = require('highlight.js');

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

Metalsmith(__dirname)
    .source(path.join(__dirname, 'src'))
    .ignore('src/layouts/**/*')
    .use(assets({
        source: 'src/styles',
        destination: 'styles'
    }))
    .use(assets({
        source: 'src/assets',
        destination: 'assets'
    }))
    .use(assets({
        source: 'node_modules/highlight.js/styles',
        destination: 'styles'
    }))
    .use(md)
    .use(layouts({
        'engine': 'handlebars',
        'directory': 'src',
        'default': 'layouts/article-layout.html.hbs',
        'pattern': 'articles/**/*'
    }))
    .use(layouts({
        'engine': 'handlebars',
        'directory': 'src',
        'default': 'layouts/page-layout.html.hbs',
        'pattern': 'pages/**/*'
    }))
    .use(moveUp('pages/**/*'))
    .build(function(err) {
        if (err) throw err;
    });
