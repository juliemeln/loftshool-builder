'use strict';

module.exports = function() {
  $.gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
      .pipe($.gulp.dest($.config.root + '/assets/css'))

  })


};

