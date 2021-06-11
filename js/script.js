"use strict";

let numberOfFilms = +prompt('How many films have you already watched?', '');

if (numberOfFilms < 10) {
    alert('You have watched quite little amount of films');
    } else if (numberOfFilms >= 10 && numberOfFilms < 20) {
        alert('You are a several person who loves watching films');
    } else {
        alert('Looks like you are mad about watching films! Congrats!');
    }


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    let a = prompt('What was your last film?', '');
    
    if (a != null && a != '' && a.length < 50) {
        let b = prompt('How do you assess it on a scale from 1 to 5?', '');
        
        if (b != null && b != '' && b <= 5) {
            personalMovieDB.movies[a] = b;
            
        } else {
            alert('Looks like you insered empty data or too high mark :(');
            i--;
        }
        
    } else {
        alert('You cant insert empty data');
        i--;
    }
}

// for (let i = 0; i < 2; i++) {

//     let a = prompt('What was your last film?', ''),
//         b = prompt('How do you assess it?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         alert('Please insert correct data');
//         i = 0;
//     }
// }

console.log(personalMovieDB);

