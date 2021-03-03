import { createSlice } from "@reduxjs/toolkit";

const URL_ORGANIZACION_DATA_PUBLIC = "http://organization/1/public"; //TODO: Agregar url para obtener los datos

export const organizationSlice = createSlice({
    name: "organization",
    initialState: {
        data: [],
        loading: false,
        hasErrors: false,
    },

    reducers: {
        getData: (state) => {
            state.loading = true;
        },
        getDataSuccess: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getDataFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

export default organizationSlice.reducer;

export const {
    getData,
    getDataSuccess,
    getDataFailure,
} = organizationSlice.actions;

export const organizationSelector = (state) => state.organization;

// Asynchronous thunk action
export function fetchData() {
    return async (dispatch) => {
        dispatch(getData());

        try {
            const response = await fetch(URL_ORGANIZACION_DATA_PUBLIC);
            const data = await response.json();

            dispatch(getDataSuccess(data));
        } catch (error) {
            dispatch(getDataFailure());
        }
    };
}
