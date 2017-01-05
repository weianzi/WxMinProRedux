//app.js
const { Provider } = require('./libs/wechat-weapp-redux');
const configureStore = require('./configureStore');

App(Provider(configureStore())({
    onLaunch: function() {
        console.log('onLaunch');
    }
}));
