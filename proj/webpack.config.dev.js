const path = require('path');

module.exports = {
    entry: './src/index.tsx',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};