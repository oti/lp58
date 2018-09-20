/* ========================================
//
//   gulp-config.js
//    - gulpfile.jsで使用する設定
//
// ======================================== */

const SRC_ROOT  = './src';
const DEST_ROOT = './docs';

const src = exports.src = {
  root       : SRC_ROOT,
  htmlFiles  : `${SRC_ROOT}/html/**/*.pug`,
  cssDir     : `${SRC_ROOT}/style`,
  cssFiles   : `${SRC_ROOT}/style/**/*.scss`,
  jsDir      : `${SRC_ROOT}/script`,
  jsFiles    : `${SRC_ROOT}/script/**/*.js`,
  imageDIr   : `${SRC_ROOT}/image`,
  imageFiles : `${SRC_ROOT}/image/**/*.{png,jpeg,gif,jpg,svg}`
};

const dest = exports.dest = {
  root        : DEST_ROOT,
  htmlFiles   : `${DEST_ROOT}/**/*.html`,
  cssDir      : `${DEST_ROOT}/assets/style`,
  cssFiles    : `${DEST_ROOT}/assets/style/**/*.css`,
  jsDir       : `${DEST_ROOT}/assets/script`,
  jsFiles     : `${DEST_ROOT}/assets/script/**/*.js`,
  imageDir    : `${DEST_ROOT}/assets/image`,
  imageFiles  : `${DEST_ROOT}/assets/image/**/*.{png,jpeg,gif,jpg,svg}`
};
