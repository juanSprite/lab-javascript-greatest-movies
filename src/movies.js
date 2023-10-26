// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(el => el.director)
}
  
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filterMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return filterMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if(moviesArray.length === 0 ){return 0}
    let sum = moviesArray.reduce((accumulator, currentMovie) => {
        if(currentMovie.score){
        return accumulator + currentMovie.score
        } else {
        return accumulator
        }
    },0);

   return Number((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0){
    return 0;
  }
  const dramaMoviesScore = dramaMovies.reduce((accumulator, currentMovie) =>  accumulator + currentMovie.score, 0);
  const averageScore = dramaMoviesScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  const moviesCopy = [...movies]; // Crear una copia del arreglo original

  const sortedMovies = moviesCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  
  const alphabetMovies = sortedMovies.sort((a,b) =>{
    if (a.year === b.year){
      if (a.title > b.title){
        return 1
      } else if (a.title < b.title){
        return -1
      } else {
        return 0
      } 
    }
  })

  return alphabetMovies;
}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
