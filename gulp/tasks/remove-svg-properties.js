'use strict';

module.exports = function() {
  $.gulp.task('remove-svg-properties', function () {
      return $.gulp.src('./source/images/*.svg')
        .pipe($.rsp.remove({
            stylesheets: true
        }))
        .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};