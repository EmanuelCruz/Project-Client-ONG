import { createSlice } from "@reduxjs/toolkit";

const URL_ORGANIZACION_DATA_PUBLIC = "http://localhost:3002/items";

export const menuItemsSlice = createSlice({
    name: "menuItems",
    initialState: {
        items: [],
        loading: false,
        hasErrors: false,
    },

    reducers: {
        getItems: (state) => {
            state.loading = true;
        },
        getItemsSuccess: (state, { payload }) => {
            state.items = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getItemsFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export default menuItemsSlice.reducer;

export const {
    getItems,
    getItemsSuccess,
    getItemsFailure,
} = menuItemsSlice.actions;

export const itemsSelector = (state) => state.menuItems;

// Asynchronous thunk action
export function fetchItems() {
    return async (dispatch) => {
        dispatch(getItems());

        try {
            const response = await fetch(URL_ORGANIZACION_DATA_PUBLIC);
            const data = await response.json();

            dispatch(getItemsSuccess(data));
        } catch (error) {
            dispatch(getItemsFailure());
        }
    };
}
