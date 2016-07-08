'use strict';

module.exports = function() {
  $.gulp.task('parallax.process', function() {
    return $.gulp.src('./source/js/parallax.min.js')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('parallax.min.js'))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};