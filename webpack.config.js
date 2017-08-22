const path = require('path');

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  watch: false,
  module: {
    rules: [
      // Pull in our css so I don't forget to run make css again...
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      // Compile everything with babel.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
    ], // rules:
  }, // module:
};

// Export the completed config.
// https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
module.exports = function() {
  return baseConfig;
};
