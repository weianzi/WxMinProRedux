const Redux = require('../libs/redux');
const combineReducers = Redux.combineReducers;
const _time = require('./_time');

const todoApp = combineReducers({ _time });

module.exports = todoApp;