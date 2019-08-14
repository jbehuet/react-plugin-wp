import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Plugin from "./Plugin";

const pluginContainer = document.getElementById("react-plugin-wp");
console.log(pluginContainer);

ReactDOM.render(<Plugin />, pluginContainer);

