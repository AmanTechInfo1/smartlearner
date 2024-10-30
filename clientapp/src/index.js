import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { router } from "./routing";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Add this import

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AYc_2X98F4dytlVeRvPtLwPiWYndU8jDWgQg7u4FV4ByPe83gwVL9vLuoeBcDgmSBGmF_BxE5oNOOrtG",
        }}>
        <RouterProvider router={router} />

        <Toaster position="top-right" />
      </PayPalScriptProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
