const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    aliases: {
      "@src": path.resolve("src"),
      "@lib": path.resolve("lib"),
      "@es": path.resolve("es"),
      "@static": path.resolve("src/static"),
      "@svg": path.resolve("src/static/medias/svg"),
    },
    rules: {
      svg: {
        // use: ["@svgr/webpack"],
        use: ["@svgr/webpack", "url-loader"]
      }
    },
  }
};
