const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/app.js',

  // Output configuration for Webpack
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex to match JavaScript and JSX files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
        },
      },
    ],
  },

  // Resolve configurations for importing files
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these file extensions
  },

  // ... other configurations ...
};
