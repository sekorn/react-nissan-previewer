var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    'script!foundation-sites/dist/plugins/foundation.core.js',
    'script!foundation-sites/dist/plugins/foundation.util.mediaQuery.js',
    'script!foundation-sites/dist/plugins/foundation.accordionMenu.js',
    'script!foundation-sites/dist/plugins/foundation.tabs.js',
    'script!foundation-sites/dist/plugins/foundation.util.keyboard.js',
    'script!foundation-sites/dist/plugins/foundation.util.motion.js',
    'script!foundation-sites/dist/plugins/foundation.util.nest.js',
    'script!foundation-sites/dist/plugins/foundation.util.timerAndImageLoader.js',
    './app/app.jsx'
  ],
  node: {
    fs: "empty"
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['app/components/', 'app/components/data', 'node_modules', 'app/api/'],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      GizmoAPI: 'app/api/GizmoAPI.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map'
};
