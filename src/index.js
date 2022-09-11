module.exports = {
    dice,
    randomMax
};

function dice() {
    return Math.floor((Math.random() * 6) + 1);
}

function randomMax(maxNumber) {
    return Math.floor((Math.random() * maxNumber) + 1);
}