import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store"; // הקובץ שבו מוגדר ה-Store שלך

const root = createRoot(document.getElementById("root"));

console.log("Starting app..."); // לוג לבדיקת טעינת האפליקציה

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
