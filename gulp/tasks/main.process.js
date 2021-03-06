'use strict';

module.exports = function() {
  $.gulp.task('main.process', function() {
    return $.gulp.src('./source/js/main.js')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('main.js'))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};