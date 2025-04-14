var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var partial1 = function (fn, a1) { return function (a2) { return fn(a1, a2); }; };
export var partial2 = function (fn, a1, a2) { return function (a3) { return fn(a1, a2, a3); }; };
export var partial3 = function (fn, a1, a2, a3) { return function (a4) { return fn(a1, a2, a3, a4); }; };
export var partial4 = function (fn, a1, a2, a3, a4) { return function (a5) { return fn(a1, a2, a3, a4, a5); }; };
export var partial5 = function (fn, a1, a2, a3, a4, a5) { return function (a6) { return fn(a1, a2, a3, a4, a5, a6); }; };
export var partial6 = function (fn, a1, a2, a3, a4, a5, a6) { return function (a7) { return fn(a1, a2, a3, a4, a5, a6, a7); }; };
export var partial7 = function (fn, a1, a2, a3, a4, a5, a6, a7) { return function (a8) { return fn(a1, a2, a3, a4, a5, a6, a7, a8); }; };
export var partial1Right = function (fn, a2) { return function (a1) { return fn(a1, a2); }; };
export var partial2Right = function (fn, a2, a3) { return function (a1) { return fn(a1, a2, a3); }; };
export var partial3Right = function (fn, a2, a3, a4) { return function (a1) { return fn(a1, a2, a3, a4); }; };
export var partial4Right = function (fn, a2, a3, a4, a5) { return function (a1) { return fn(a1, a2, a3, a4, a5); }; };
export var partial5Right = function (fn, a2, a3, a4, a5, a6) { return function (a1) { return fn(a1, a2, a3, a4, a5, a6); }; };
export var partial6Right = function (fn, a2, a3, a4, a5, a6, a7) { return function (a1) { return fn(a1, a2, a3, a4, a5, a6, a7); }; };
export var partial7Right = function (fn, a2, a3, a4, a5, a6, a7, a8) { return function (a1) { return fn(a1, a2, a3, a4, a5, a6, a7, a8); }; };
export var curry2 = function (fn) {
    return function (a1) { return function (a2) { return fn(a1, a2); }; };
};
export var curry3 = function (fn) {
    return function (a1) { return function (a2) { return function (a3) { return fn(a1, a2, a3); }; }; };
};
export var curry4 = function (fn) {
    return function (a1) { return function (a2) { return function (a3) { return function (a4) { return fn(a1, a2, a3, a4); }; }; }; };
};
export var curry5 = function (fn) {
    return function (a1) { return function (a2) { return function (a3) { return function (a4) { return function (a5) { return fn(a1, a2, a3, a4, a5); }; }; }; }; };
};
export var curry6 = function (fn) {
    return function (a1) { return function (a2) { return function (a3) { return function (a4) { return function (a5) { return function (a6) { return fn(a1, a2, a3, a4, a5, a6); }; }; }; }; }; };
};
export var curry7 = function (fn) {
    return function (a1) { return function (a2) { return function (a3) { return function (a4) { return function (a5) { return function (a6) { return function (a7) { return fn(a1, a2, a3, a4, a5, a6, a7); }; }; }; }; }; }; };
};
export var curry2Right = function (fn) {
    return function (a2) { return function (a1) { return fn(a1, a2); }; };
};
export var curry3Right = function (fn) {
    return function (a3) { return function (a2) { return function (a1) { return fn(a1, a2, a3); }; }; };
};
export var curry4Right = function (fn) {
    return function (a4) { return function (a3) { return function (a2) { return function (a1) { return fn(a1, a2, a3, a4); }; }; }; };
};
export var curry5Right = function (fn) {
    return function (a5) { return function (a4) { return function (a3) { return function (a2) { return function (a1) { return fn(a1, a2, a3, a4, a5); }; }; }; }; };
};
export var curry6Right = function (fn) {
    return function (a6) { return function (a5) { return function (a4) { return function (a3) { return function (a2) { return function (a1) { return fn(a1, a2, a3, a4, a5, a6); }; }; }; }; }; };
};
export var curry7Right = function (fn) {
    return function (a7) { return function (a6) { return function (a5) { return function (a4) { return function (a3) { return function (a2) { return function (a1) { return fn(a1, a2, a3, a4, a5, a6, a7); }; }; }; }; }; }; };
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
//# sourceMappingURL=fp.js.map