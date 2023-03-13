import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBoiVcu-wqyHgRELOUdMaYRdXLWpLo_8JI",
  authDomain: "reenbit-test-auth.firebaseapp.com",
  projectId: "reenbit-test-auth",
  storageBucket: "reenbit-test-auth.appspot.com",
  messagingSenderId: "502648900817",
  appId: "1:502648900817:web:3b2b643be7bde3284189f0",
  measurementId: "G-BRPNJKNY1E",
});

const auth = getAuth(firebaseApp);
// const db = getFirestore();

// const analytics = getAnalytics(app);

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Context.Provider
        value={{
          auth,
          // db,
        }}
      >
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
