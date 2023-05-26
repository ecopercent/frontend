const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, "src/Api"),
      "@components": path.resolve(__dirname, "src/Components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/Layouts"),
      "@pages": path.resolve(__dirname, "src/Pages"),
      "@style": path.resolve(__dirname, "src/style"),
      "@util": path.resolve(__dirname, "src/Utils"),
      "@modal": path.resolve(__dirname, "src/Components/Modal"),
    },
  },
};
