const {createStore, applyMiddleware, compose} = require('./libs/redux.js');
// const devTools = require('./libs/remote-redux-devtools.js').default;
const reducer = require('./reducers/index.js');
const promiseMiddleware = require('./libs/promise-middleware');
//const thunkMiddleware = require('./libs/redux-thunk');

function configureStore() {
  return createStore(reducer, applyMiddleware(promiseMiddleware));
}
// function configureStore() {
//   return createStore(reducer, compose(devTools({
//     hostname: 'localhost',
//     port: 5678,
//     secure: false
//   })));
// }

module.exports = configureStore;


/*const {createStore, applyMiddleware, compose} = require('./libs/redux.js');
const devTools = require('./libs/remote-redux-devtools.js').default;
const reducer = require('./reducers/index.js');
const promiseMiddleware = require('./libs/promise-middleware');

function configureStore(data) {
    var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
    var store = finalCreateStore(reducer, data);
    return store;
}*/

/*function configureStore() {
  return createStore(reducer);
}*/
/*function configureStore() {
  return createStore(reducer, compose(devTools({
    hostname: 'localhost',
    port: 5678,
    secure: false
  })));
}

module.exports = configureStore;*/