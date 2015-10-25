'use strict';

let Metalsmith = require('metalsmith');
let assets = require('metalsmith-assets');
let markdown = require('metalsmith-markdownit');
let layouts = require('metalsmith-layouts');
let path = require('path');
let moveUp = require('metalsmith-move-up');


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
    .use(markdown({
        typographer: true,
        html: true,
        linkify: true
    }))
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
