'use strict';

module.exports = function() {
  $.gulp.task('menu.process', function() {
    return $.gulp.src('./source/js/menu.js')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('menu.js'))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};