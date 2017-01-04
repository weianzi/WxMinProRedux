const Redux = require('../libs/redux.js')
const combineReducers = Redux.combineReducers
const todos = require('./todos.js')
const visibilityFilter = require('./visibilityFilter.js')
const _time = require('./_time.js')

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  _time
})

module.exports = todoApp