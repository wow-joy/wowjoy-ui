import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  /* reset */

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-tap-highlight-color: transparent
}

* ::after,
*::before {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-tap-highlight-color: transparent
}

button,
input,
select,
textarea {
  font-family: Helvetica Neue, Helvetica, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif
}

a {
  color: inherit;
  text-decoration: none
}

blockquote,
body,
dd,
dl,
fieldset,
h1,
h2,
h3,
h4,
h5,
h6,
input[type=checkbox],
input[type=radio],
ol,
p,
pre,
ul {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-size: 12px/1.5;
  font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  color: #333;
  -webkit-touch-callout: none;
}

em,
i {
  font-style: normal
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 18px;
}

h3 {
  font-size: 16px;
}

html {
  -webkit-text-size-adjust: 100%;
     -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
          text-size-adjust: 100%
}

img {
  border: 0
}

ol,
ul {
  list-style: none;
  list-style-type: none
}

button,
fieldset,
input,
ol,
option,
td,
textarea,
th,
ul {
  padding: 0，
}

button,
input,
select,
textarea {
  border: 0;
  vertical-align: middle;
  outline: 0;
  -webkit-appearance: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

textarea {
  resize: none
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  display: none
}

.demo-column {
  width: 750px;
  margin: 20px 1%;
  float: left;
}

`;
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter basename={`/wowjoy-ui/demo/dist/`}>
      <Route component={App} />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("demo")
);
registerServiceWorker();
