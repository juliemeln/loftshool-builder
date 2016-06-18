'use strict';


module.exports = function() {
  gulp.task('remove-svg-properties', function () {
    gulp.src('./src/*.svg')
        .pipe(rsp.remove({
          properties: [rsp.PROPS_FILL]
        }))
        .pipe(gulp.dest('./dest'));
  });

  gulp.task('default', 'remove-svg-properties');
};