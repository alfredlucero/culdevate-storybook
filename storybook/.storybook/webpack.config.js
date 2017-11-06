const path = require('path');
const storybookBaseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  config = storybookBaseConfig(config, env);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: 'awesome-typescript-loader',
  });

  config.module.rules.push({
    test: /\.css$/,
    loader: 'css-loader',
  });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.css');

  return config;
};