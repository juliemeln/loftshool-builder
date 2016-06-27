'use strict';

module.exports = function() {
    $.gulp.task('gulp-svg-inline-css', function () {
        return $.gulp.src('./source/images/*.svg')
            .pipe($.svg({
                style: {
                    fill: '#fff'
                }
            }))
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};