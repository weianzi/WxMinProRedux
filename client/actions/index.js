const Promise = require('../libs/es6-promise.min').Promise;

function getTime() {
    return {
        types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
        promise: () => {
            return new Promise((resolve, reject) => {
                // 通过 setTimeout 来模拟一个异步服务器请求
                setTimeout(() => {
                    const time = new Date();
                    resolve({time});
                }, 3000);
            })
        }
    }
}

module.exports = { getTime };
