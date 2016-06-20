'use strict';
var SRC_DIR='./source/'
var DIST_DIR='.build/assets/'
var path = {
    sprite:{
        src: SRC_DIR + 'img/svg/*svg',
        distImg: DIST_DIR + 'img',
        imgLocation: '../img/sprite.svg',
        distFile: SRC_DIR + 'styles/sprite'
    }
}
gulp.task('sprite', function () {
    var spriteData = gulp.src(path.sprite.src).pipe(spritesmith({
        imgName: 'sprite.svg',
        cssName: 'sprite.css',
        cssFormat:'css',
        imgPath: path.sprite.imgLocation,
        padding: 70
    }));
    spriteData.img.pipe(gulp.dest(path.sprite.distImg));
    spriteData.css.pipe(gulp.dest(path.sprite.distFile));
});
;