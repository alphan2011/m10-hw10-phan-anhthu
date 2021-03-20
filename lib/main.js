'use strict';

// Add boiling temp
var boiling = function boiling() {
    document.getElementById('boiling-temp').innerHTML = 212;
};
setTimeout(boiling, 0);
// Add freezing temp
var freezing = function freezing() {
    document.getElementById('freezing-temp').innerHTML = 32;
};
setTimeout(freezing, 0);
// Add current temp
var current = function current() {
    document.getElementById('water-temp').innerHTML = 60;
};
setTimeout(current, 0);
// Show message
var message = function message() {
    if (current > 212) {
        var section1 = document.getElementById('boiling');
        section1.classList.remove('hide');
        section1.classList.add('show');
    } else if (current < 32) {
        var section2 = document.getElementById('frozen');
        section2.classList.remove('hide');
        section2.classList.add('show');
    } else {
        var section3 = document.getElementById('good-temp');
        section3.classList.remove('hide');
        section3.classList.add('show');
    }
};
setTimeout(message, 3000);