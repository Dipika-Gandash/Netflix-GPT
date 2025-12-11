import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        trailerVideo : null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        actionMovies: null,
        animation: null,


    },
    reducers: {
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
         addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload
        },
        addAnimation: (state, action) => {
            state.animation = action.payload
        },

    }
})

export const { addNowPlayingMovies, addTrailerVideo , addPopularMovies , addTopRatedMovies, addUpcomingMovies, addActionMovies, addAnimation} = moviesSlice.actions;

export default moviesSlice.reducer;
// export default moviesSlice;

// export const selectNowPlayingMovies = (state) => state