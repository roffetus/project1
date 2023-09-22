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
      if(a!=null && b!=null && a!='' && b!='' && a.length<50){
            console.log('done')//!='' not equal to the empty string for answer
      } else{
            console.log('error')
            i--;
      }
      if(personalMovieDB.count<10){
            console.log('few films watched')
      }else if(personalMovieDB.count>=10 && personalMovieDB.count<10){
      console.log ('you are classic watcher')
      }else if(personalMovieDB.count>=30){
      console.log('you are a film buff')
      }else{
      console.log('an error occurred')
      }
personalMovieDB.movies[a]= b;

      }
      console.log (personalMovieDB);