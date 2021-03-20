// Add boiling temp
const boiling = () => {
    document.getElementById('boiling-temp').innerHTML =
    212;
}
setTimeout(boiling, 0);
// Add freezing temp
const freezing = () => {
    document.getElementById('freezing-temp').innerHTML =
    32;
}
setTimeout(freezing, 0);
// Add current temp
const current = () => {
    document.getElementById('water-temp').innerHTML =
    60;
}
setTimeout(current, 0);
// Show message
let message = () => {
    if (current > 212) {
        let section1 = document.getElementById('boiling');
        section1.classList.remove('hide');
        section1.classList.add('show');
    }
    else if (current < 32) {
        let section2 = document.getElementById('frozen');
        section2.classList.remove('hide');
        section2.classList.add('show');
    }
    else {
        let section3 = document.getElementById('good-temp');
        section3.classList.remove('hide');
        section3.classList.add('show');
    }
}
setTimeout(message, 3000);