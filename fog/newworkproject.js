const numberOfFilms = prompt ('How many movies have you already watched?','');
const personalMovieDB = {
      count:numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      pravit: false
};
const a = prompt('one of the last movies i watched?',''),
      b = prompt('how much would you rate it?',''),
      c = prompt('one of the last movies i watched?',''),
      d = prompt('how much would you rate it?','');
      personalMovieDB.movies[a]= b;
      personalMovieDB.movies[c]= d;
      console.log (personalMovieDB);