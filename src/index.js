import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoModel from './TodoModel';
let model = new TodoModel();
function render(){
    ReactDOM.render(<App model={model} />,document.getElementById("root"));
}

model.subscribe(render); //当模型变化的时候会调用render
render();