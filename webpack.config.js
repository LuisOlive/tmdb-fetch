const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.ts',
  devtool: 'source-map',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'tmdb',
      type: 'umd',
      export: 'default'
    }
  },

  module: {
    rules: [{ test: /\.ts$/i, use: ['ts-loader'], exclude: /(node_modules|recicle)/ }]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = [
  config,
  {
    ...config,
    devtool: false,
    output: {
      filename: 'tmdb-fetch.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'tmdb',
        type: 'window',
        export: 'default'
      }
    }
    // plugins: [new HtmlPlugin({ template: './src/index.html' })]
  }
]
