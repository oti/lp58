/* ========================================
//
//   gulpfile.babel.js
//    - build system の設定
//
// ======================================== */

// load modules
import run          from 'run-sequence';
import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import pluginLoader from 'gulp-load-plugins';

// load configuration
import config       from './gulp-config';

const $        = pluginLoader();
const src      = config.src;
const dest     = config.dest;
const settings = config.settings;

// define tasks
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['sass', 'jscopy', 'webpack', 'imagemin', 'html']);

/**
 * watch task
 */
gulp.task('watch', () => {
  $.watch(src.htmlFiles , () => run('html'));
  $.watch(src.cssFiles  , () => run('sass'));
  $.watch(src.jsFiles   , () => run('webpack'));
  $.watch(src.imageFiles, () => run('imagemin'));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: dest.root
    },
    startPath: ''
  });
});

/**
 * html task
 */
gulp.task('html', () => {
  return gulp.src(src.htmlFiles)
    .pipe($.plumber())
    .pipe($.filter((file) => !/\/_/.test(file.path)))
    .pipe($.pug({
      pretty: !process.env.NODE_ENV
    }))
    .pipe(gulp.dest(dest.root))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * JSをdestにコピーするだけのタスク
 */
gulp.task('js:copy', () => {
  return gulp.src(src.jsDir + '/others/**/*.js')
    .pipe(gulp.dest(dest.jsDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * webpack task
 */
gulp.task('webpack', () => {
  return gulp.src(src.jsDir)
    .pipe($.webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(dest.jsDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * JSをdestにコピーするだけのタスク
 */
gulp.task('jscopy', () => {
  gulp.src(src.jsDir + '/others/**/*.js')
    .pipe(gulp.dest(dest.jsDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * js:linter task
 */
// gulp.task('js:linter', () => {
//   return gulp.src(src.jsFiles)
//     .pipe($.plumber())
//     .pipe(gulp.dest(dest.jsDir))
//     .pipe($.filter((file) => !/lib/.test(file.path)))
//     .pipe($.jshint())
//     .pipe($.jshint.reporter(stylish));
// });


/**
 * sass task
 */
gulp.task('sass', () => {
  return gulp.src(src.cssFiles)
    .pipe($.plumber())
    .pipe($.filter(file => !/\/_/.test(file.path)))
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.combineMq({
        beautify: true
    }))
    .pipe(gulp.dest(dest.cssDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * imagemin task
 */
gulp.task('imagemin', () => {
  return gulp.src(src.imageFiles)
    .pipe($.plumber())
    .pipe($.changed( dest.imageDir ))
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive      : true,
      interlaced       : true
    }))
    .pipe(gulp.dest(dest.imageDir));
});
