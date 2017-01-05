/*export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types

    next({...rest, type: REQUEST})

    return promise().then(
      (result) => {
        next({...rest, result, type: SUCCESS})
      },
      (error) => {
        next({...rest, error, type: FAILURE})
      }
    )
  }
}*/

/**
* 以上是ES6写法，小程序没正确识别。
* 以下是用babel转化后代码
**/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = promiseMiddleware;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function promiseMiddleware() {
  return function (next) {
    return function (action) {
      var promise = action.promise,
          types = action.types,
          rest = _objectWithoutProperties(action, ["promise", "types"]);

      if (!promise) {
        return next(action);
      }

      var _types = _slicedToArray(types, 3),
          REQUEST = _types[0],
          SUCCESS = _types[1],
          FAILURE = _types[2];

      next(_extends({}, rest, { type: REQUEST }));

      return promise().then(function (result) {
        next(_extends({}, rest, { result: result, type: SUCCESS }));
      }, function (error) {
        next(_extends({}, rest, { error: error, type: FAILURE }));
      });
    };
  };
}