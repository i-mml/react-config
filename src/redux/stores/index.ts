import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import allReducers from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userInfoReducer"],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export let myStore = createStore(persistedReducer);

export let persistor = persistStore(myStore);
