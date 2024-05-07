import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from './component/Context/CartContext.jsx';
//import { BrowserRouter } from 'react-router-dom';
import { FilterContextProvider } from './component/Context/FilterContext.jsx';
import store from './redux/store/index.js';
import { router } from './routing.jsx';
import { Toaster } from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterContextProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
      </FilterContextProvider>
      <Toaster
        position="top-right"
      />
    </Provider>
  </React.StrictMode>,
)
