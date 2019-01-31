"use strict";
var languages = []; //data var
languages[0] = { countrycode: 'AFG'
    , language: 'Balochi', percentage: '0.9', population: '22720000' };
languages[1] = { countrycode: 'AFG'
    , language: 'Dari', percentage: '32.1', population: '22720000' };
languages[2] = { countrycode: 'AFG'
    , language: 'Pashto', percentage: '52.4', population: '22720000' };
languages[3] = { countrycode: 'AFG'
    , language: 'Turkmenian', percentage: '1.9', population: '22720000' };
languages[4] = { countrycode: 'AFG'
    , language: 'Uzbek', percentage: '8.8', population: '22720000' };
languages[5] = { countrycode: 'TJK'
    , language: 'Russian', percentage: '9.7', population: '6188000' };
languages[6] = { countrycode: 'TJK'
    , language: 'Tadzhik', percentage: '62.2', population: '6188000' };
languages[7] = { countrycode: 'TJK'
    , language: 'Uzbek', percentage: '23.2', population: '6188000' };
languages[8] = { countrycode: 'UZB'
    , language: 'Karakalpak', percentage: '2.0', population: '24318000' };
languages[9] = { countrycode: 'UZB'
    , language: 'Kazakh', percentage: '3.8', population: '24318000' };
languages[10] = { countrycode: 'UZB'
    , language: 'Russian', percentage: '10.9', population: '24318000' };
languages[11] = { countrycode: 'UZB'
    , language: 'Tadzhik', percentage: '4.4', population: '24318000' };
languages[12] = { countrycode: 'UZB'
    , language: 'Tatar', percentage: '1.8', population: '24318000' };
languages[13] = { countrycode: 'UZB'
    , language: 'Uzbek', percentage: '72.6', population: '24318000' };

var i = 6;


var countries = []; //Opret array der indeholder elementerne fra languages
if (!countries[languages[i].countrycode] || countries[languages[i].language] || countries[languages[i].percentage] || countries[languages[i].population]) {
    countries[languages[i].countrycode] = languages[i].countrycode;
    countries[languages[i].language] = languages[i].language;
    countries[languages[i].percentage] = languages[i].percentage;
    countries[languages[i].population] = languages[i].population;
}

// console og window
console.log(countries[languages[i].countrycode] + " " + languages[i].language + " " + languages[i].percentage + " " + languages[i].population);
window.alert(countries[languages[i].countrycode] + " " + languages[i].language + " " + languages[i].percentage + " " + languages[i].population);