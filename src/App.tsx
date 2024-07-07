import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import {
  DrawerProvider,
  LangProvider,
  ModalProvider,
  ThemeProvider,
} from "./providers";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LangProvider>
          <ThemeProvider>
            <DrawerProvider>
              <ModalProvider>
                <ToastContainer />
                <AppRoutes />
              </ModalProvider>
            </DrawerProvider>
          </ThemeProvider>
        </LangProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
