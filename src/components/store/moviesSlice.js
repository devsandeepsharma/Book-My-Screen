import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    categories: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setCategories(state, action) {
            state.categories = action.payload;
        }
    }
})

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;