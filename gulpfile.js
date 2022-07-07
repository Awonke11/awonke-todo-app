const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const buildStyles = () => {
    return src("./src/styles/*.scss")
        .pipe(sass())
        .pipe(dest("./src/styles/css"))
}

const watchSass = () => {
    watch(["./src/styles/*.scss"], buildStyles)
}

exports.default = series(buildStyles, watchSass)