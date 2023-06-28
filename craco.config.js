const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, "src/Api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@style": path.resolve(__dirname, "src/style"),
      "@util": path.resolve(__dirname, "src/utils"),
      "@modal": path.resolve(__dirname, "src/components/Modal"),
    },
  },
};
