import { createSlice } from "@reduxjs/toolkit";

export const organizationSlice = createSlice({
    name: "organization",
    initialState: {
        data: {
            name: "Mi organizacion",
            image: "mi_logo.png",
            phone: "12345678",
            address: "direccion 123",
            welcomeText: "Bienvenidos",
        },
    },

    reducers: {},
});

export default organizationSlice.reducer;

export const organizationSelector = (state) => state.organization.data;
