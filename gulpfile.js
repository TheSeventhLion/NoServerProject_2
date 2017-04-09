const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');


var paths = {
  jsSource: ['./js/**/*.js'],
  scssSource: ['./css/**/*.scss']
}

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(sourcemap.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(sourcemap.write('./'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('scss-bundle', () => {
  gulp.src(paths.scssSource)
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.scssSource, ['scss-bundle']);
})


//this makes it so you dont have to type all of the task names after "gulp"
gulp.task('default', ['watch', 'js', 'scss-bundle'])
