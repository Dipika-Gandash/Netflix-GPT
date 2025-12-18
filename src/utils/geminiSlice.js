import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'Gemini',
    initialState: {
        showGeminiSearch: false,
        movieName: [],
        movieResults: []
    },
    reducers : {
        toggleGeminiSearchView: (state)=>{
            state.showGeminiSearch = !state.showGeminiSearch;
        },

        addGeminiMovieResults: (state, action) => {
            state.movieName = action.payload.movieName;
            state.movieResults = action.payload.movieResults;
        }
    }
});

export const {toggleGeminiSearchView, addGeminiMovieResults} = geminiSlice.actions;

export default geminiSlice.reducer;