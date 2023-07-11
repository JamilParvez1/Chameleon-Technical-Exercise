const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
    },
  },
  // other webpack configuration options...
};
