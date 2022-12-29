import React from "react";
import { render } from "react-dom";

import * as $ from "jquery";
import Post from "./Post";
import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import WebpackLogo from "./assets/webpack-logo.png";
import "./styles/styles.css";
import "./styles/less-test.less";
import "./styles/sass-test.scss";
import "./babel";

const post = new Post("Webpack Post Title", WebpackLogo);
$("pre").html(post.toString());

const App = () => (
  <div className="container">
    <h1>My Webpack Test</h1>
    <hr />
    <div className="logo">
      <img src="..\src\assets\webpack-logo.png" alt="" />
    </div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>This is the LESS style</h2>
    </div>
    <div className="card">
      <h2>This is the SASS style</h2>
    </div>
  </div>
);
render(<App />, document.getElementById("app"));

console.log("JSON:", json);
console.log("XML:", xml);
console.log("CSV:", csv);
