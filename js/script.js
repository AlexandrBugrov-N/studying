'use strict';

const personalMOvieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMOvieDB.count = +prompt('How much films have you already watched?', '');

        while (personalMOvieDB.count == '' || personalMOvieDB.count == null || isNaN(personalMOvieDB.count)) {
            personalMOvieDB.count = +prompt('How much films have you already watched?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
    
            const a = prompt('What was the last film you have watched?', ''),
                b = prompt('How do you assess it?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMOvieDB.movies[a] = b;
                console.log('done!');
            } else { 
                console.log('Error! Please insert your answer!');
                i = -1;
            }
        }
    },

    detectPersonalLevel: function() {
        if (numberOfFilms < 10) {
            console.log('You have watched quite a few amount of films');
        } else if (numberOfFilms >= 10 && numberOfFilms <30) {
            console.log('You are a several person who like watching films');
        } else if (numberOfFilms >= 30) {
            console.log('Looks like you are mad about watching films! Congrats!');
        }
        else {
            console.log('Error!');
        }
    },

//Все что стоит в скобках функции, по умолчанию имеет значение true
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMOvieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) {
            let genre = prompt(`What is your favorite gener number${i}?`);

            if(genre === '' || genre == null) {
                console.log(`Looks like your answer is wrong. Please insert correct answer.`);
                i--;
            } else {
                personalMOvieDB.genres[i - 1] = genre;
            }
        }

        personalMOvieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр $(i) - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMOvieDB.privat) {
            personalMOvieDB.privat = false;
        } else {
            personalMOvieDB.privat = true;
        }
    }
};

