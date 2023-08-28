import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import AppRoute from "./routes/AppRoutes";
import { LangProvider } from "./providers";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LangProvider>
          <AppRoute />
        </LangProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
