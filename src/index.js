import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Root = () => {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.init(); // Инициализация Telegram WebApp
    } else {
      alert("Пожалуйста, откройте это приложение через Telegram.");
    }
  }, []);

  return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));
