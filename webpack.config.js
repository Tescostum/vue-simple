var path = require('path');

module.exports = {
  //エントリポイント
  entry: './src/app/main.js',
  output: {
    //処理後のjsファイルの置き場所
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/docs', 'dist')
  },
  resolve: {
    //importとかの解決用？
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //使用するvue.jsの種別
    }
  },
  module: {
    rules: [
      //abcd-loader は abcd に省略可能 /
      {
        //vueファイルはvue-loaderで変換
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: { 
            //ここが良く分かってない。vue-loaderで吐き出したjsファイルをbabel-loaderでさらに変換？
            js: 'babel-loader'
          }
        }
      },
      {
        //jsファイルはbabel-loaderで変換
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};