export declare const partial1: <A1, A2, R>(fn: (a1: A1, a2: A2) => R, a1: A1) => (a2: A2) => R;
export declare const partial2: <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R, a1: A1, a2: A2) => (a3: A3) => R;
export declare const partial3: <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R, a1: A1, a2: A2, a3: A3) => (a4: A4) => R;
export declare const partial4: <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R, a1: A1, a2: A2, a3: A3, a4: A4) => (a5: A5) => R;
export declare const partial5: <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => (a6: A6) => R;
export declare const partial6: <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => (a7: A7) => R;
export declare const partial7: <A1, A2, A3, A4, A5, A6, A7, A8, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => (a8: A8) => R;
export declare const partial1Right: <A1, A2, R>(fn: (a1: A1, a2: A2) => R, a2: A2) => (a1: A1) => R;
export declare const partial2Right: <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R, a2: A2, a3: A3) => (a1: A1) => R;
export declare const partial3Right: <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R, a2: A2, a3: A3, a4: A4) => (a1: A1) => R;
export declare const partial4Right: <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R, a2: A2, a3: A3, a4: A4, a5: A5) => (a1: A1) => R;
export declare const partial5Right: <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => (a1: A1) => R;
export declare const partial6Right: <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => (a1: A1) => R;
export declare const partial7Right: <A1, A2, A3, A4, A5, A6, A7, A8, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => (a1: A1) => R;
export declare const curry2: <A1, A2, R>(fn: (a1: A1, a2: A2) => R) => (a1: A1) => (a2: A2) => R;
export declare const curry3: <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R) => (a1: A1) => (a2: A2) => (a3: A3) => R;
export declare const curry4: <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R) => (a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => R;
export declare const curry5: <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R) => (a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => R;
export declare const curry6: <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R) => (a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => (a6: A6) => R;
export declare const curry7: <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R) => (a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => (a6: A6) => (a7: A7) => R;
export declare const curry2Right: <A1, A2, R>(fn: (a1: A1, a2: A2) => R) => (a2: A2) => (a1: A1) => R;
export declare const curry3Right: <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R) => (a3: A3) => (a2: A2) => (a1: A1) => R;
export declare const curry4Right: <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => R;
export declare const curry5Right: <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R) => (a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => R;
export declare const curry6Right: <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R) => (a6: A6) => (a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => R;
export declare const curry7Right: <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R) => (a7: A7) => (a6: A6) => (a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => R;
export declare const compose2: <A, B, C>(f1: (value: A) => B, f2: (value: B) => C) => (value: A) => C;
export declare class Functor<A, B> {
    readonly transform: (value: A) => B;
    constructor(transform: (value: A) => B);
    map<C>(transform: (value: B) => C): Functor<A, C>;
}
export declare class Thread<A> {
    readonly value: A;
    static from<A>(value: A): Thread<A>;
    private constructor();
    apply<B>(transform: (value: A) => B): Thread<B>;
}
