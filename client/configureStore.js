const {createStore, applyMiddleware, compose} = require('./libs/redux');
// const devTools = require('./libs/remote-redux-devtools').default;
const reducer = require('./reducers/index');
const promiseMiddleware = require('./libs/promise-middleware');

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
