'use strict'

var gFocus = document.querySelector('input');

function init() {
    onSetLanguage();
    renderChar();
    getFocus();
}

function onKeyboardPress() {
    let currChar = getCurrChar();
    if (gFocus.value.toLowerCase() === currChar) {
        onAnswer('correct', true)
    } else {
        onAnswer('wrong', false)
    }
    getFocus();
    gFocus.value = '';
}

function onSetLanguage(lang) {
    (!lang || lang === 'English') ? setLanguage('English') : setLanguage('Hebrew');
    renderChar();
    getFocus();
}

function renderChar() {
    const char = getRandomChar();
    document.querySelector('.letter').innerText = char;
    getFocus();
}

function onChangeTheme() {
    document.querySelector('body').classList.toggle('body-dark-mode');
    document.querySelector('header').classList.toggle('header-dark-mode');
    document.querySelector('body').classList.toggle('body-light-mode');
    document.querySelector('header').classList.toggle('header-light-mode');
    getFocus();
}

function onAnswer(res, isRender) {
    document.querySelector('.letter').classList.toggle(res);
    setTimeout(() => {
        document.querySelector('.letter').classList.toggle(res);
        if (isRender) renderChar();
    }, 300);
}

function getFocus() {
    gFocus.focus();
}