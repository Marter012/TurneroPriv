import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import BurgerMenuReducer from "./BurgerMenu/BurgerMenuSlice";
import HeaderItemsReducer from "./HeaderItems/HeaderItemsSlice";
import SelectedDayReducer from "./SelectedDay/SelectedDaySlice";
import ShiftsReducer from "./Shifts/ShiftsSlice";
import CalendarMenuReducer from "./CalendarMenu/CalendarMenuSlice";
import SelectedShiftsReducer from "./SelectedShifts/SelectedShifts";
import UpdateShiftReducer from "./UpdateShift/UpdateShiftSlice";
import ActivitiesReducer from "./Activities/ActivitiesSlice";
import CustomersReducer from "./Customers/CustomersSlice";

const reducers = combineReducers({
  shifts: ShiftsReducer,
  burgerMenu: BurgerMenuReducer,
  selectedItem: HeaderItemsReducer,
  selectedShifts: SelectedShiftsReducer,
  selectDay: SelectedDayReducer,
  updateShift: UpdateShiftReducer,
  calendarMenu: CalendarMenuReducer,
  activities: ActivitiesReducer,
  customers: CustomersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: ["activities"],
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
