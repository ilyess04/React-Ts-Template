import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import ReduxLogger from "redux-logger";
import { AuthReducer, SettingReducer } from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  blackList: ["auth", "setting"],
};

const reducers = combineReducers({
  auth: AuthReducer,
  setting: SettingReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ReduxLogger),
});
const persistor = persistStore(store);
export { store, persistor };
