var gulp = require("gulp");
var ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
var tsProject = ts.createProject("tsconfig.json");
var uglify = require("gulp-uglify");
var merge = require('merge-stream');


gulp.task('default', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src(['src/**/*.ts'])
      .pipe(sourcemaps.init())
      .pipe(tsProject());
    return merge(tsResult, tsResult.js)
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/src'));
  });