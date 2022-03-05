import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*ReactDOM.render의 역할은 브라우저에 있는 실제 DOM 내부에
  리액트 컴포넌트를 렌더링하는 것.*/
/*StrictMode 는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구. 자손들에 대한 부가적인 검사와 경고를 활성화. Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않음.*/
/*../public/index.html의 id가 root인 div 내부에 렌더링된다.*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
