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

console.log("Hello world");
console.log("JSON:", json);
console.log("XML:", xml);
console.log("CSV:", csv);
