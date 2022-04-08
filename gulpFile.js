const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss')//RECONOCER EL ARCHIVO
        .pipe( plumber() ) 
        .pipe( sass() )     //COMPILAR EL ARCHIVO
        .pipe( dest('build/css')) // ALMACENAR DDDD
    done();
}

function dev (done){
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;

exports.dev = dev;