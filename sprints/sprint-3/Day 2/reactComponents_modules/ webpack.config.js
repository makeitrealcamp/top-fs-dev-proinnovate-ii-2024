const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs|jsx)$/, // Ensure .jsx is included
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       ['@babel/preset-env', { targets: 'defaults' }],
        //       '@babel/preset-react', // Transpiles JSX
        //     ],
        //   },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .jsx extensions are resolved
  },
};
