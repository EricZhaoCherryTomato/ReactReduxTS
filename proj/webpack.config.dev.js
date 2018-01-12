const path = require('path');

module.exports = {
    entry: './src/index',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']  
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]  
    },
  output: {
      path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
      publicPath: '/',
      filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  }
};