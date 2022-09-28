import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  
  return (
    <div>
      <MoviesList movies={movies} />
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <h3>Choose a movie from the list above</h3>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
