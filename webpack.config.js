const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js'

    //dist라는 폴더에 main.js 라는 이름으로 번들이 이루어지는데,
    //entry 옵션에서 지정된 js파일의 모든 내용을 번들로 만들어 내어주게 되는 것이다.
    clean: true 
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    //생성자 함수가 실행되면서 이 자리에 어떠한 결과가 반환될 것이다. 
    //그 반환된 결과가 plugins의 첫 번째 배열의 아이템으로 사용이 된다.
    new HtmlPlugin({
      template: './index.html'
      //output으로 번들을 완성해 내기 전에 plugin의 내용을 활용하는데, 
      //template이라는 옵션으로 index.html파일과 entry에 지정된 파일의 
      //병합본을 dist 폴더에 만들어낼 수 있게된다. 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}