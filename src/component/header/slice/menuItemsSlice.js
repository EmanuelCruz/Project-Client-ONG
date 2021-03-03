import { createSlice } from "@reduxjs/toolkit";

export const menuItemsSlice = createSlice({
    name: "menuItems",
    initialState: {
        items: [
            { texto: "Inicio", ruta: "/" },
            { texto: "Nostros", ruta: "/nosotros" },
            { texto: "Actividades", ruta: "/actividades" },
            { texto: "Novedades", ruta: "/novedades" },
            { texto: "Contacto", ruta: "/contacto" },
        ],
    },

    reducers: {},
});

export default menuItemsSlice.reducer;
