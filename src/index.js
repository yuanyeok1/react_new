import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'swiper/swiper-bundle.css';
import App from './App';
import './i18n';

window.addEventListener('error', (error) => {
  console.log('window.addEventListener捕获到异常：', error);
  console.log('error.target = ', error.target);
  console.log('error.target.nodeName = ', error.target.nodeName);
  console.log('error.target.outerHTML = ', error.target.outerHTML);

  if (error.target.nodeName === 'SCRIPT' && error.target.outerHTML.indexOf('.chunk.js') !== -1) {
    console.log('远端有更新，本地自动刷新...');
    window.location.reload();
  }
}, true);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept();
}