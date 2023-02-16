import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { serverApi } from "./services/serverApi";
import authSlice from "./features/auth.slice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const peristedState = loadState();

const combinedReducers = combineReducers({
  authSlice,
  [serverApi.reducerPath]: serverApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "signout/logout") {
    localStorage.removeItem("state");
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
}

export const store = configureStore({
  preloadedState: peristedState,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
      .concat(serverApi.middleware),
});

setupListeners(store.dispatch);

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("Store Error -->", e);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

