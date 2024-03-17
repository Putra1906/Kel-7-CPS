import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./pages/footer"
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    //waduh
};

const FirebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(FirebaseApp)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <App />
        <Footer />
  </React.StrictMode>
);
