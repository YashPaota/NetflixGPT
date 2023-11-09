import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    topRatedSeries: null,
    airingTodaySeries : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addAiringTodaySeries : (state , action) => {
      state.airingTodaySeries = action.payload;
    }
  },
});

// console.log(movieSlice);
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addNowPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTopRatedSeries,
  addAiringTodaySeries,
} = movieSlice.actions;
export default movieSlice.reducer;
