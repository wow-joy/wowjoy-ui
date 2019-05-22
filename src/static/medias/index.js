const fs = require("fs");
const path = require("path");

fs.readdir(path.resolve(__dirname + "/svg"), (err, list) => {
  fs.writeFile(
    path.resolve(__dirname + "/list.js"),
    list.map(ele => `"${ele.replace(/\.svg/, "")}"`),
    "utf-8"
  );
});
