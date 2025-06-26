var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (x) { return functions.reduceRight(function (x, f) { return f(x); }, x); };
}
export function composel() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (x) { return functions.reduce(function (x, f) { return f(x); }, x); };
}
export function asUpdate(fn) {
    if (fn.length < 2)
        return fn;
    else
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return function (arg1) { return fn.apply(void 0, __spreadArray([arg1], rest, false)); };
        };
}
export function curry(fn) {
    if (fn.length < 2)
        return fn;
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length >= fn.length) {
            return fn.apply(void 0, args);
        }
        else {
            return function () {
                var args2 = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args2[_i] = arguments[_i];
                }
                return curried.apply(void 0, __spreadArray(__spreadArray([], args, false), args2, false));
            };
        }
    };
}
export var compose2 = function (f1, f2) { return function (value) { return f2(f1(value)); }; };
var Functor = (function () {
    function Functor(transform) {
        this.transform = transform;
    }
    Functor.of = function (transform) {
        return new Functor(transform);
    };
    Functor.prototype.map = function (transform) {
        return new Functor(compose2(this.transform, transform));
    };
    return Functor;
}());
export { Functor };
var Thread = (function () {
    function Thread(value) {
        this.value = value;
    }
    Thread.of = function (value) {
        return new Thread(value);
    };
    Thread.prototype.map = function (transform) {
        return new Thread(transform(this.value));
    };
    Thread.prototype.out = function () {
        return this.value;
    };
    return Thread;
}());
export { Thread };
export var value = function (v) { return v; };
export var set = function (v) { return function () { return v; }; };
export var setNull = function () { return null; };
export var setUndefined = function () { return undefined; };
//# sourceMappingURL=fp.js.map