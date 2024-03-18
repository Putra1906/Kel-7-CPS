import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./pages/footer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <App />
        <Footer />
  </React.StrictMode>
);
