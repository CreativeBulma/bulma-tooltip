const gulp = require('gulp');
const internalIp = require('internal-ip');
const package = require('./package.json');
const path = require('path');
const shell = require('gulp-shell');

/**
 * Template for banner to add to file headers
 */
var banner = {
	main:
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.homepage %>' +
		' */\n'
};

/**
 * ----------------------------------------
 *  STYLESHEETS TASKS
 * ----------------------------------------
 */
gulp.task('styles:build', function() {
    const autoprefixer = require('autoprefixer');
    const cleanDir = require('gulp-clean-dir');
    const concat = require('gulp-concat');
    const fs = require('fs');
    const header = require('gulp-header');
    const nop = require('gulp-nop');
    const parsePath = require('parse-filepath');
    const postcss = require('gulp-postcss');
    const rename = require("gulp-rename");
    const sass = require('gulp-sass');

    distPath = parsePath(package.style);

    if (fs.existsSync(path.resolve(__dirname, 'src/sass/index.sass'))) {
        return gulp.src(['node_modules/bulma/sass/utilities/_all.sass', 'src/sass/index.sass'])
            .pipe(concat('app.sass'))
            .pipe(sass({
                loadPath: [path.resolve(__dirname, 'src/sass')],
                includePaths: ['node_modules', 'node_modules/bulma/sass/utilities/'],
                outputStyle: "expanded",
                sourceComments: true
            }).on('error', sass.logError))
            .pipe(postcss([
                autoprefixer({
                    cascade: true,
                    remove: true
                })
            ]))
            .pipe(header(banner.main, {package: package}))
            .pipe(rename(distPath.basename.replace('.min', '')))
            .pipe(cleanDir(path.resolve(__dirname, distPath.dirname)))
            .pipe(gulp.dest(path.resolve(__dirname, distPath.dirname)));
        } else {
            return gulp.src('.').pipe(nop());
        }
});

gulp.task('styles:minify', function() {
    const cleancss = require('gulp-cleancss');
    const cssnano = require('cssnano');
    const header = require('gulp-header');
    const parsePath = require('parse-filepath');
    const postcss = require('gulp-postcss');
    const rename = require("gulp-rename");

    distPath = parsePath(package.style);

    return gulp.src([path.resolve(__dirname, distPath.dirname + '/*.css'), '!' + path.resolve(__dirname, distPath.dirname + '/*.min.css')])
        .pipe(cleancss())
        .pipe(postcss([
            cssnano({
				discardComments: {
					removeAll: true
				}
			})
        ]))
        .pipe(header(banner.main, {package: package}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.resolve(__dirname, distPath.dirname)));
});

gulp.task('styles:copy', gulp.series('styles:minify', function() {
    const parsePath = require('parse-filepath');

    distPath = parsePath(package.style);

    return gulp.src(path.resolve(__dirname, distPath.dirname + '/*.css'))
        .pipe(gulp.dest(path.resolve(__dirname, 'src/docs/static/css')));
}));

/**
 * ----------------------------------------
 *  ASSETS TASKS
 * ----------------------------------------
 */
gulp.task('images:svg:minify', function() {
	const svgmin = require('gulp-svgmin');

	return gulp.src(path.resolve(__dirname, 'dist/images/**/*.svg'))
        .pipe(svgmin())
		.pipe(gulp.dest(path.resolve(__dirname, 'dist/images')));
});

/**
 * ----------------------------------------
 *  BUILD TASKS
 * ----------------------------------------
 */
gulp.task('build:styles', gulp.series('styles:build', 'styles:minify', 'styles:copy'), done => {
	done();
});

gulp.task('build', gulp.series('build:styles'), done => {
	done();
});

gulp.task('optimize', gulp.series('styles:minify', 'images:svg:minify'), done => {
	done();
});

gulp.task('default', gulp.series('build', 'optimize'), done => {
	done();
});

/**
 * ----------------------------------------
 *  DOC TASKS
 * ----------------------------------------
 */
gulp.task('doc:build', gulp.series(shell.task(['node_modules/.bin/hugo --source src/docs --destination ../../docs --cleanDestinationDir'])), done => {
    done();
});

gulp.task('doc:serve', gulp.parallel(shell.task([`node_modules/.bin/hugo server -D --bind ${internalIp.v4.sync()} --baseURL ${internalIp.v4.sync()} --source src/docs --watch`]), function() {
    gulp.watch(path.resolve(__dirname, 'src/sass/**/*.sass'), gulp.series('build:styles'));
}), done => {
    done();
});

gulp.task('doc', gulp.series(shell.task(['node_modules/.bin/hugo server --source src/docs'])), done => {
    done();
});