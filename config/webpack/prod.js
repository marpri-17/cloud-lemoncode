// Usamos webpack merge para partir de la base del archivo base.js

const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: './js/[name].[chunkhash].js',
    // ultima version de webpack 5
    assetModuleFilename: './images/[hash][ext][query]',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    }
  },
  plugins: [
    new Dotenv({
      path: 'prod.env',
    })
  ]
})
// Las dependencias deben subir también al servidor, generandonse como parte del bundle.
// Para reducir el tamaño de la aplicación, se utiliza el fichero vendor.js que se configura en el apartado optimization
