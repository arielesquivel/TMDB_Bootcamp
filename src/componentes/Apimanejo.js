import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import "../App.css";
function Apimanejo() {
  const API_URL = "http://api.themoviedb.org/3/";
  const API_KEY = "7ac73a60aa590575fb0efba44f9fe9a0";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("discover");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiMovies = async (movieSearch) => {
    try {
      let type = "discover";
      if (movieSearch) {
        type = "search";
      }
      const peliculas = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: movieSearch,
        },
      });

      return peliculas.data.results;
    } catch (error) {
      console.log("Error al obtener la informacion", error);
    }
  };
  //previsualizador de peliculas
  const selectMovie = async (movie) => {
    setSelectedMovie(movie);
  };
  //buscador funcion de evento
  const buscadordepelis = async (e) => {
    e.preventDefault();
    console.log(apiMovies(movieSearch));
    apiMovies(movieSearch);
    const results = await apiMovies(movieSearch);
    if (results.length) {
      await selectMovie(results[0]);
    }
  };
  //trae las peliculas
  useEffect(() => {
    async function moviex() {
      const movex = await apiMovies(movieSearch);
      setMovies(movex);
    }
    moviex();
  }, [movieSearch]);

  //rendedizado
  return (
    <div>
      {/*BUSCADOR DE PELIS*/}
      <form className="container mb-4" onSubmit={buscadordepelis}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setMovieSearch(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      {/* contenedor de uestra de banner*/}

      {/*trayendo las peliculas de la api */}
      <div className="container mt-3">
        {selectedMovie ? (
          <div>
            <h1>{selectedMovie.title}</h1>
            <img
              src={`${URL_IMAGE}${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />

            <p>{selectedMovie.overview}</p>
          </div>
        ) : (
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-md-4"
                onClick={() => selectMovie(movie)}
              >
                <FcLike className="corazon" onClick="#" />
                <img
                  className="img_col"
                  src={`${URL_IMAGE}${movie.poster_path}`}
                  alt={movie.title}
                  height={600}
                  width="100%"
                />
                <h4 className="text-center">{movie.title}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  //<Header />; //, (<Nav />), (<Main />), (<Footer />);
}

export default Apimanejo;
