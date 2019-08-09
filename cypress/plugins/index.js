const webpack = require("@cypress/webpack-preprocessor");
const { generateCucumberJson } = require("cypress-cucumber-preprocessor").generateCucumberJson; // eslint-disable-line

module.exports = on => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", webpack(options));
  on("task", {
    cukejson: generateCucumberJson
  });
};
