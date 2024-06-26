const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, "src/assets"),
      '@components': path.resolve(__dirname, "src/components"),
      '@services': path.resolve(__dirname, "src/services"),
      '@utils': path.resolve(__dirname, "src/utils"),
      '@views': path.resolve(__dirname, "src/views"),
      '@widgets': path.resolve(__dirname, "src/widgets"),
    },
  },
};