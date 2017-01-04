let assign = require('../utils/Object').assign;
let initialTimeState = {};

// 下面的 reducer 命名用"_"开头，用于从 state 中读取的时候，避免 state.time.time (出现两个 time )。
// 这只是个人偏好你可以不必这样做，它取决于你如何对各个 reducer 命名，和在 Redux 的 store 中暴露哪些属性。
function _time(state = initialTimeState, action) {
    console.log('_time reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'GET_TIME_REQUEST':
            return assign({}, state, { frozen: true });
        case 'GET_TIME_SUCCESS':
            return assign({}, state, {
                time: action.result.time,
                frozen: false
            });
        case 'GET_TIME_FAILURE':
            // 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
            return assign({}, state, { frozen: false });
        default:
            return state
    }
}

module.exports = _time
