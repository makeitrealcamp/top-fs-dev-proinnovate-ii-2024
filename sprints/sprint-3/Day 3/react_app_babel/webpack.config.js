module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
