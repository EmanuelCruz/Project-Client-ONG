import { configureStore } from "@reduxjs/toolkit";
import menuItemsSlice from "../component/header/slice/menuItemsSlice";
import organizationSlice from "../component/header/slice/organizationSlice";

const store = configureStore({
    reducer: { menuItems: menuItemsSlice, organization: organizationSlice },
});

export default store;
