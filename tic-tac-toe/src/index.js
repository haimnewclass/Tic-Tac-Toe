import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nbzxvs5sv0bnvxx5.us.auth0.com"
      clientId="2ukiqGzdUkyFSIIuh4SXzz8uMxWlk4ce"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
