// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie=>movie.director)
}
console.log(movies);
 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray
    .filter(movie =>{
        return movie.director==="Steven Spielberg"
    })
    .filter(movie => movie.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0;
    }else{
   const suma=moviesArray.reduce((accu, movie)=>accu+movie.score,0);
   const average=suma/moviesArray.length;
   return Number(average.toFixed(2)); 
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama_tico=moviesArray.filter(drama=>drama.genre.includes("Drama"));
    let suma_drama=drama_tico.reduce((a,d)=>a+d.score,0);
    let average_drama=suma_drama/moviesArray.length;
    return Number(average_drama);
}
dramaMoviesScore(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let array_copy=moviesArray.slice();
    let yearly = array_copy.sort((a,b) => {
        if(a.year < b.year){
          return -1
        }
    })
    return yearly;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let ordenado=moviesArray.sort((a,b)=>a.title.localeCompare(b.title))
    let title_ord=ordenado.map(ord=>ord.title);
    let x= title_ord.filter(e => e.length<20 );
    return x;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
