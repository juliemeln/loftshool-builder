'use strict';

module.exports = function() {
  $.gulp.task('map.process', function() {
    return $.gulp.src('./source/js/map.js')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('map.js'))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};