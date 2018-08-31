var gulp = require("gulp");
var browserify = require("gulp-browserify");
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");

gulp.task("default", ["compile"]);

gulp.task("clean", function() {
  return gulp.src(["./tmp/", "./dist/"], { read: false }).pipe(clean());
});

gulp.task("transpile-ts", ["clean"], function() {
  var tsproject = ts.createProject("./tsconfig.json");
  return tsproject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsproject())
    .js.pipe(sourcemaps.write("./sourcemaps"))
    .pipe(gulp.dest("./tmp"));
});

gulp.task("browserify-js", ["transpile-ts"], function() {
  return (
    gulp
      .src("./tmp/index.js")
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(browserify())
      // .pipe(uglify())
      .pipe(concat("ts-commons.js"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./dist"))
  );
});

gulp.task("min-js", ["browserify-js"], function() {
  return gulp
    .src("./tmp/index.js")
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(concat("ts-commons.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});

gulp.task("compile", ["min-js"], function() {
  var tsProjectDts = ts.createProject("tsconfig.json");
  var tsResult = gulp.src("src/**/*.ts").pipe(tsProjectDts());
  tsResult.dts.pipe(concat("ts-commons.d.ts")).pipe(gulp.dest("dist"));
});
