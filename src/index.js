import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/Styles/GlobalStyles";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);

// OBSERVAR PANTALLA DE COBROS, TIJERA Y DATEPICKER PAGE SEMANAL 
// CREAR LISTA DE CLIENTES FIJOS, EN 4 ITEM HEADER MENU BAR
// agegar input checkbox clientes en actionsshifts 
// estudiar posibilidad de notificaciones web 