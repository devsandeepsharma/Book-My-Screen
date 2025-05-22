import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./moviesSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer: {
        "movies": moviesSlice,
        "ui": uiSlice
    }
})

export default store;