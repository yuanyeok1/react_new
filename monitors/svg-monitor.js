/*
    svg图片生成
*/

const process = require('child_process');
const chokidar = require('chokidar');
const log = console.log.bind(console);

// 监控文件夹
let imgDir = 'src/assets/svg/';

var watcher = chokidar.watch(imgDir, {
    persistent: true, // 保持监听状态
    ignoreInitial: true
});

function mixSvg(path, action) {
    process.exec('node monitors/buildsvg/svg-mixer', err => {
        if (err !== null) {
            log(`${path}: ${action}失败: `);
            log(err);
        } else {
            log(`${path}: ${action}成功!`);
        }
    });
}

// 监听增加，修改，删除文件的事件
watcher.on('all', (event, path) => {
    switch (event) {
        case 'add':
        case 'change':
            mixSvg(path, '添加');
            break;
        case 'unlink':
            mixSvg(path, '删除');
            break;
        default:
            break;
    }
});

log('******************************SVG Monitor已启动*****************************');