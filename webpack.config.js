// //引用path模組
// const path = require('path');
// module.exports = {
//     //這個webpack打包的對象，這裡面加上剛剛建立的index.js
//     entry: {
//         index: './index.js'
//     },
//     output: {
//         //這裡是打包後的檔案名稱
//         filename: 'bundle.js',
//         //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
//         path: path.resolve('./'),
//     }
// };


const path = require('path');
module.exports = {
    //如果有一個以上的檔案需要打包，可以傳陣列給entry
    entry: ['./index.js', './app.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    }
    //增加一個給devserver的設定
   };