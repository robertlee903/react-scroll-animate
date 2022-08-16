var { src, dest, series } = require('gulp');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');

function build() {
  return src("src/ScrollAnimate.js")
    .pipe(concat("ScrollAnimate.min.js"))
    .pipe(babel({
      plugins: ['transform-react-jsx']
    }))
    .pipe(uglify())
    .pipe(dest("dist"));
}

exports.build = build;
exports.default = series(build);