"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}

start();



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: true,
};



function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('You have watched quite little amount of films');
        } else if (numberOfFilms >= 10 && numberOfFilms < 20) {
            alert('You are a several person who loves watching films');
        } else {
            alert('Looks like you are mad about watching films! Congrats!');
        }
}
detectPersonalLevel();



// Задание номер два
function showMyDb() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Sorry, this is personal moviedata base :(');
    }
}
showMyDb();



// Задание номер три 
function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`What is you favorite genre number ${i + 1}?`);
    }
}
writeYourGenres();



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('What was your last film?', '');
        
        if (a != null && a != '' && a.length < 50) {
            let b = prompt('How do you assess it on a scale from 1 to 5?', '');
            
            if (b != null && b != '' && b <= 5) {
                personalMovieDB.movies[a] = b;
                
            } else {
                alert('Looks like you inserted empty data or too high mark :(');
                i--;
            }
            
        } else {
            alert('You cant insert empty data');
            i--;
        }
    }
}
rememberMyFilms();

// rememberMyFilms();
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


