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
export var compose2 = function (f1, f2) { return function (value) { return f2(f1(value)); }; };
var Functor = (function () {
    function Functor(transform) {
        this.transform = transform;
    }
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
    Thread.from = function (value) {
        return new Thread(value);
    };
    Thread.prototype.apply = function (transform) {
        var result = transform(this.value);
        return new Thread(result);
    };
    return Thread;
}());
export { Thread };
//# sourceMappingURL=fp.js.map