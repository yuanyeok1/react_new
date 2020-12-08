const fs = require('fs-extra');
const chalk = require('chalk');
const gulp = require('gulp');
const glob = require('glob');
const mixer = require('./gulp-svg-mixer');
const { Sprite } = require('svg-mixer');
const svgmin = require('gulp-svgmin');
const merge = require('merge-stream');
const srcPath = 'src/assets/svg';
const destPath = 'src/assets/svgsprite';

class SpriteSrOnly extends Sprite {
    generate() {
        // Call parent `generate` method and then transform the tree
        return super.generate().then(svg => {
            svg.each(
                node =>
                    node.tag.toLowerCase() === 'svg' &&
                    (node.attrs.class = 'sr-only')
            );
            return svg;
        });
    }
}
// svg 文件命名 - 连接,各文件夹内文件无重复
['', 'home', 'lottery', 'bank', 'userCenter', 'helper', 'slot', 'register'].forEach(path => {
    const currentPath = `${srcPath}/${path}${path === '' ? '' : '/'}`;

    // const filename = path === '' ? 'index' : path;
    let filename = '';
    if (path === '') {
        filename = 'index';
    } else if (path.indexOf('/') > 0) {
        filename = path.split('/')[1];
    } else {
        filename = path;
    }
    const sprite = gulp.src(`${currentPath}*.svg`).pipe(
        svgmin({
            plugins: [{ removeAttrs: { attrs: '(stroke|fill|class)' } }]
        })
    );
    console.log(currentPath);
    console.log(filename);
    const sprite_with_fill = gulp
        .src(`${currentPath}/with_fill/*.svg`)
        .pipe(svgmin());

    merge(sprite, sprite_with_fill)
        .pipe(
            mixer({
                prettify: false,
                spriteClass: SpriteSrOnly
            })
        )
        // .pipe(gulp.dest(destPath));
        .on('data', stream => {
            fs.outputFile(
                `${destPath}/${filename}.js`,
                //gulp use vinyl,stream._contents,node_modules/vinyl/index.js
                `window.appendSvgSprite('${stream._contents.toString(
                    'utf8'
                )}')`,
                err => {
                    if (err) throw err;
                    console.log(
                        chalk.green(`${filename}.js has been created!`)
                    );
                }
            );
        });
});

gulp.src(`${srcPath}/**/*.svg`)
    .pipe(
        mixer({
            sprite: {
                filename: 'svgsprite_preiview.svg'
            }
        })
    )
    .pipe(gulp.dest(destPath));

glob(`${srcPath}/**/*.svg`, {}, function(err, files) {
    if (err) throw err;
    fs.outputJson(
        `${destPath}/svgsprite.json`,
        files.map(path =>
            path
                .split('/')
                .slice(-1)[0]
                .replace('.svg', '')
        ),
        err => {
            if (err) throw err;
        }
    );
});
