import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { LangProvider, ThemeProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import AppRoute from "./routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LangProvider>
          <ThemeProvider>
            <ToastContainer />
            <AppRoute />
          </ThemeProvider>
        </LangProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
