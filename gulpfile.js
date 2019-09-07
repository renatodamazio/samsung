const { series, parallel, watch } = require('gulp')
const gulp = require('gulp');
const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();
function sassTask(cb) {
  return gulp.src("./assets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/public/static/css"))
        .pipe(browserSync.stream());
  cb()
}

function build(cb) {
  cb()
}

function defaultTask(cb) {
  cb()
};

watch(['./assets/scss/*.scss'], function(cb) {
  sassTask()
  cb();

})

function browser(cb) {
    browserSync.init({
      server: {
          baseDir: "./app"
      }
    });

    sassTask();
    cb()
}
exports.build = browser
exports.default = parallel(browser)
