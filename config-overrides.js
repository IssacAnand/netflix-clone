const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    new webpack.EnvironmentPlugin(process.env),
    new Dotenv({
      systemvars: true
    })
  ]);
  return config;
};