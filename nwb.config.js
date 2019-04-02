const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  babel:{
    plugins:[
      [
        "prismjs", {
          "languages": ["javascript", "css", "jsx"],
          "plugins": ["line-numbers"],
          "theme": "default",
          "css": true
        }
      ]
    ],
  },
  webpack: {
    
    aliases: {
      "@test": path.resolve("test_component"),
      "@src": path.resolve("src"),
      "@lib": path.resolve("lib"),
      "@es": path.resolve("es"),
      "@esMedia": path.resolve("es/static/medias"),
      "@demoComponents": path.resolve("demo/src/components"),
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
