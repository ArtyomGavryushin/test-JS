import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Root() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.init();
    } else {
      alert("Пожалуйста, откройте приложение через Telegram.");
    }
  }, []);

  return <App />;
}

ReactDOM.render(<Root />, document.getElementById("root"));
