"use strict";

let numberOfFilms = +prompt('How many films have you already watched?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

let lastFilm = prompt('What was your last film?'),
    assess = prompt('How do you assess it?'),
    lastFilm2 = prompt('What was your last film?'),
    assess2 = prompt('How do you assess it?');

personalMovieDB.movies[lastFilm] = assess;
personalMovieDB.movies[lastFilm2] = assess2;
console.log(personalMovieDB);