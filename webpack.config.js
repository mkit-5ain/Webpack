// webpack.config.js
// webpack 명령은 기본적으로 이 설정으로 시작

const path = require('path');

module.exports = {
     entry: './src/js/index.js',
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')
     },
     mode : 'development'
};
