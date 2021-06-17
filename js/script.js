"use strict";



let personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: true,
    countAmountOfFilms: function() {
        personalMovieDB.count = +prompt('How many films have you already watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '');
        }
    },
    detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        alert('You have watched quite little amount of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20) {
            alert('You are a several person who loves watching films');
        } else {
            alert('Looks like you are mad about watching films! Congrats!');
        }
    },
    showMyDb: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Sorry, this is personal movie data base :(');
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`What is you favorite genre number ${i + 1}?`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((order, i) => {
            console.log(`Your favorite genre number ${i} is ${order}`);
        });
    },
    rememberMyFilms: function() {
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
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
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
