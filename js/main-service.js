'use strict'

const gEnglishKeys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
const gHebrewKeys = ['ק','ר','א','ט','ו','ן','ם','פ','ש','ד','ג','כ','ע','י','ח','ל','ך','ז','ס','ב','ה','נ','מ','צ','ף']
var gSelectedLanguage;
var gCurrChar;

function setCurrChar(char){
    gCurrChar = char;
}

function getCurrChar(){
    return gCurrChar
}

function setLanguage(lang){
    gSelectedLanguage = (lang === 'English') ? gEnglishKeys : gHebrewKeys; 
}

function getRandomChar(){
    let charIdx = getRandomInt(0, gSelectedLanguage.length);
    let randomChar = gSelectedLanguage[charIdx];
    setCurrChar(randomChar)
    return randomChar;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }