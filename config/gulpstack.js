var path = require('path')

module.exports.gulpstack = {
  externals: {
    coffee: [],
    css: [
      path.join(process.cwd(),'bower_components','materialize','dist','css','**','*.css'),
    ],
    font: [
      path.join(process.cwd(),'bower_components','materialize','dist','font','**','*.{ttf,woff,woff2,svg,eot}'),
    ],
    images: [],
    jade: [],
    js: [
      path.join(process.cwd(),'bower_components','jquery','dist','**','*.js'),
      path.join(process.cwd(),'bower_components','materialize','dist','js','**','*.js'),
    ],
    markdown: [],
    sass: [],
    stylus: [],
  }
}

