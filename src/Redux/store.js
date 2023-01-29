import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userRedux";
import questionReducer from "./questionSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import answerSlice from "./answerSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["question", "answer"],
};
const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  answer: answerSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
