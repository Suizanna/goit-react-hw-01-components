import React from "react";

//пакет react-dom рендерит react-элементы в настоящие DOM-дерево
import ReactDOM from "react-dom"; // есть метод ReactDOM.render /метод рендерит компонент App 
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// 2 вар метод рендерит компонент App 
// ReactDOM.render(<App />, document.querySelector('#root'));

//<React.StrictMode>  это компонент оборачиваетвсе приложение в строгий режим 




