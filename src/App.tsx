import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import AppRoute from "./routes/AppRoutes";
import { useEffect } from "react";
import { DocumentTitle } from "./enums";

function App() {
  useEffect(() => {
    document.title = DocumentTitle.appTitle;
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  );
}

export default App;
