import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import BurgerMenuReducer from "./BurgerMenu/BurgerMenuSlice";
import HeaderItemsReducer from "./HeaderItems/HeaderItemsSlice";
import NavShiftsReducer from "./NavShifts/NavShiftsSlicer";
import SelectedDayReducer from "./SelectedDay/SelectedDaySlice";
import ShiftsReducer from "./Shifts/ShiftsSlice";

const reducers = combineReducers({
  shifts : ShiftsReducer,
  burgerMenu : BurgerMenuReducer,
  selectedItem : HeaderItemsReducer,
  selectedShifts : NavShiftsReducer,
  selectDay : SelectedDayReducer
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
