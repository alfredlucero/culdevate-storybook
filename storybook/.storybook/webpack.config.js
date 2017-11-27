const path = require('path');
const storybookBaseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  config = storybookBaseConfig(config, env);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/, /types/],
    loader: 'awesome-typescript-loader'
  });


  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');

  return config;
};