'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process', 'main.process', 'menu.process', 'map.process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.jade', $.gulp.series('jade'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy.fonts'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('remove-svg-properties'));
  });
};
