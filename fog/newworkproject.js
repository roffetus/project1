const numberOfFilms = prompt ('How many movies have you already watched?','');
const personalMovieDB = {
      count:numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      pravit: false
}

      for(let i =0;i<2;i++){
const a = prompt('one of the last movies i watched?',''),
      b = prompt('how much would you rate it?','');
personalMovieDB.movies[a]= b;

      }
      console.log (personalMovieDB);