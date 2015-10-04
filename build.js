var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets'),
    markdown = require('metalsmith-markdownit');

Metalsmith(__dirname)
    .use(assets({
        source: './assets',
        destination: './assets'
    }))
    .use(markdown({
        typographer: true,
        html: true
    }))
    .build(function(err) {
        if (err) throw err;
    });
