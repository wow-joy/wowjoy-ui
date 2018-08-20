const fs = require("fs");
const path = require("path");
let componentName = process.argv
  .splice(2)[0]
  .replace(/(.)(.*)$/, (match, $1, $2) => `${$1.toUpperCase()}${$2}`);

const targetPath = path.resolve(__dirname, "../src/components/", componentName);

// 前置判断组件是否存在 防止覆写
fs.access(targetPath, fs.constants.F_OK, err => {
  if (err) {
    console.log(`开始生成组件 ${componentName}`);
    init();
  } else {
    console.error(`组件已存在 ==> ${path.resolve(targetPath)}`);
  }
});

const soursePath = path.resolve(__dirname, "template");

const read = (src, callback) => {
  fs.readdir(src, function(err, paths) {
    if (err) throw err;
    paths.forEach(function(path) {
      const _src = src + "/" + path;
      fs.stat(_src, function(err, st) {
        if (err) {
          throw err;
        }
        if (st.isFile()) {
          callback(_src);
        } else if (st.isDirectory()) {
          read(_src, callback);
        }
      });
    });
  });
};

const write = (targetSrc, data) => {
  const writeData = src => {
    if (/^template\./i.test(path.basename(src))) {
      src = path.resolve(src, `../${componentName}${path.extname(src)}`);
    }
    console.log(`创建文件 ${src}`);
    fs.writeFile(src, data, { flag: "w+" }, errs => {
      if (errs) {
        throw errs;
      }
    });
  };
  fs.access(targetSrc, fs.constants.R_OK | fs.constants.W_OK, function(err) {
    if (err) {
      //不存在 创建目录
      fs.mkdir(path.dirname(targetSrc), function() {
        writeData(targetSrc);
      });
    } else {
      //存在
      writeData(targetSrc);
    }
  });
};
const changePath = (oldPathStr, basePathStr, newBasePathStr) => {
  const reg = new RegExp(escape(basePathStr));
  return unescape(escape(oldPathStr).replace(reg, escape(newBasePathStr)));
};

const copyReplace = (src, soursePath, targetPath, componentName) => {
  fs.readFile(src, "utf8", (err, data) => {
    const targetSrc = changePath(src, soursePath, targetPath);
    if (/(\.js|\.md)$/.test(src)) {
      if (err) throw err;
      let newData = data.replace(/Template/g, componentName);
      write(targetSrc, newData);
    } else {
      write(targetSrc, data);
    }
  });
};

const init = () => {
  read(soursePath, src => {
    copyReplace(src, soursePath, targetPath, componentName);
  });
};
