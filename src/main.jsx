import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
