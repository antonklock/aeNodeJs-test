const { updateText } = require('./updateText');
const prompt = require('prompt-sync')();

const comp = prompt('Enter comp: ');
const layer = prompt('Enter layer: ');
const text = prompt('Enter text: ');

const updateObject = {
    comp,
    layer,
    text
}

updateText(updateObject);