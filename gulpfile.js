var browserify = require('gulp-browserify');
var stringify = require("stringify");
var serve = require('gulp-serve');
var rimraf = require('gulp-rimraf');
var minifyHTML = require('gulp-minify-html');
var open = require("gulp-open");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var gulp = require('gulp');

gulp.task('scripts', function() {
    gulp.src('./src/js/app.js')
        .pipe(browserify({
		  transform: [stringify([".html"])]
		}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  gulp.src('./src/css/**')
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch('src/**', ['dist']);
});

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task("url", function(){
  var options = {
    url: "http://localhost:3000"
  };
  gulp.src("./dist/index.html")
  .pipe(open("", options));
});

gulp.task('serve', serve('dist'));

gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};

  gulp.src('./src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['clean', 'scripts', 'css','minify-html']);
gulp.task('default', ['build', 'watch', 'serve', 'url']);
