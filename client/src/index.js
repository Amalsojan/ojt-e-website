import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LandingPage from './pages/HomePage/LandingPage';
import { Provider } from "react-redux";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Provider store={store}>
      <LandingPage />
    </Provider> */}

    <App />
  </React.StrictMode>
);

