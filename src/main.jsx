import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import CsvFileToTable from "./components/csvFileTOTable/CsvFileToTable";
import CsvFileAnother from "./components/csvFileTOTable/CsvFileAnother";
import ExcelToJson from "./components/excelToJson/ExcelToJson";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      {/* <CsvFileToTable /> */}
      {/* <CsvFileAnother /> */}
      {/* <ExcelToJson /> */}
    </PersistGate>
  </Provider>
);
