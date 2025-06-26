export declare function compose<T1, R>(fn1: (agr1: T1) => R): (agr1: T1) => R;
export declare function compose<T1, T2, R>(fn2: (agr2: T2) => R, fn1: (agr1: T1) => T2): (agr1: T1) => R;
export declare function compose<T1, T2, T3, R>(fn3: (arg: T3) => R, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export declare function compose<T1, T2, T3, T4, R>(fn4: (arg: T4) => R, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export declare function compose<T1, T2, T3, T4, T5, R>(fn5: (arg: T5) => R, fn4: (arg: T4) => T5, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export declare function compose<T1, T2, T3, T4, T5, T6, R>(fn6: (arg: T6) => R, fn5: (arg: T5) => T6, fn4: (arg: T4) => T5, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export declare function composel<T1, R>(fn1: (agr1: T1) => R): (agr1: T1) => R;
export declare function composel<T1, T2, R>(fn2: (agr2: T1) => T2, fn1: (agr1: T2) => R): (agr1: T1) => R;
export declare function composel<T1, T2, T3, R>(fn3: (arg: T1) => T2, fn2: (agr: T2) => T3, fn1: (agr: T3) => R): (agr: T1) => R;
export declare function composel<T1, T2, T3, T4, R>(fn4: (arg: T1) => T2, fn3: (arg: T2) => T3, fn2: (agr: T3) => T4, fn1: (agr: T4) => R): (agr: T1) => R;
export declare function composel<T1, T2, T3, T4, T5, R>(fn5: (arg: T1) => T2, fn4: (arg: T2) => T3, fn3: (arg: T3) => T4, fn2: (agr: T4) => T5, fn1: (agr: T5) => R): (agr: T1) => R;
export declare function composel<T1, T2, T3, T4, T5, T6, R>(fn6: (arg: T1) => T2, fn5: (arg: T2) => T3, fn4: (arg: T3) => T4, fn3: (arg: T4) => T5, fn2: (agr: T5) => T6, fn1: (agr: T6) => R): (agr: T1) => R;
export declare function asUpdate<T1, R>(fn: (arg1: T1) => R): (arg1: T1) => () => R;
export declare function asUpdate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R): (arg2: T2) => (arg1: T1) => R;
export declare function asUpdate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R): (arg2: T2, arg3: T3) => (arg1: T1) => R;
export declare function asUpdate<T1, T2, T3, T4, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R): (arg2: T2, arg3: T3, arg4: T4) => (arg1: T1) => R;
export declare function asUpdate<T1, T2, T3, T4, T5, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R): (arg2: T2, arg3: T3, arg4: T4, arg5: T5) => (arg1: T1) => R;
export declare function asUpdate<T1, T2, T3, T4, T5, T6, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R): (arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => (arg1: T1) => R;
export type CurryFunction1<T1, R> = (arg1: T1) => R;
export type CurryFunction2<T1, T2, R> = (arg1: T1) => CurryFunction1<T2, R>;
export type CurryFunction3<T1, T2, T3, R> = (arg1: T1) => CurryFunction2<T2, T3, R>;
export type CurryFunction4<T1, T2, T3, T4, R> = (arg1: T1) => CurryFunction3<T2, T3, T4, R>;
export type CurryFunction5<T1, T2, T3, T4, T5, R> = (arg1: T1) => CurryFunction4<T2, T3, T4, T5, R>;
export type CurryFunction6<T1, T2, T3, T4, T5, T6, R> = (arg1: T1) => CurryFunction5<T2, T3, T4, T5, T6, R>;
export declare function curry<T1, R>(fn: (arg1: T1) => R): (arg1: T1) => R;
export declare function curry<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R): CurryFunction2<T1, T2, R>;
export declare function curry<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R): CurryFunction3<T1, T2, T3, R>;
export declare function curry<T1, T2, T3, T4, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R): CurryFunction4<T1, T2, T3, T4, R>;
export declare function curry<T1, T2, T3, T4, T5, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R): CurryFunction5<T1, T2, T3, T4, T5, R>;
export declare function curry<T1, T2, T3, T4, T5, T6, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R): CurryFunction6<T1, T2, T3, T4, T5, T6, R>;
export declare const compose2: <A, B, C>(f1: (value: A) => B, f2: (value: B) => C) => (value: A) => C;
export declare class Functor<A, B> {
    readonly transform: (value: A) => B;
    private constructor();
    static of<A, B>(transform: (value: A) => B): Functor<A, B>;
    map<C>(transform: (value: B) => C): Functor<A, C>;
}
export declare class Thread<A> {
    private readonly value;
    static of<A>(value: A): Thread<A>;
    private constructor();
    map<B>(transform: (value: A) => B): Thread<B>;
    out(): A;
}
export type Pipe<A> = Thread<A>;
export declare const value: <T>(v: T) => T;
export declare const set: <V>(v: V) => () => V;
export declare const setNull: () => null;
export declare const setUndefined: () => undefined;
