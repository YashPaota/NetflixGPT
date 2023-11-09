import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movies);
  // console.log(movies.topRatedSeries);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-32 relative z-20 pl-12'>
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Top Rated Series" movies={movies.topRatedSeries} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Airing Today Series" movies={movies.airingTodaySeries} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        <MovieList title="New Released" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
  )
}

export default SecondaryContainer;