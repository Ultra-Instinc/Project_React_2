import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import fetchedReducer from "./fetchedData/fetchedDataSlice";
import themeReducer from "./theme/themeSlice";
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	fetchedData: fetchedReducer,
	theme: themeReducer,
});

const persistConfig = {
	key: "root",
	storage,
	version: 1,
};

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

export const persistor = persistStore(store);
