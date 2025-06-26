
/**
 * Комзозиция функций
 * 
 * @param ...fn функции 
 */
export function compose<T1, R>(fn1: (agr1: T1) => R): (agr1: T1) => R;
export function compose<T1, T2, R>(fn2: (agr2: T2) => R, fn1: (agr1: T1) => T2): (agr1: T1) => R;
export function compose<T1, T2, T3, R>(fn3: (arg: T3) => R, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export function compose<T1, T2, T3, T4, R>(fn4: (arg: T4) => R, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export function compose<T1, T2, T3, T4, T5, R>(fn5: (arg: T5) => R, fn4: (arg: T4) => T5, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export function compose<T1, T2, T3, T4, T5, T6, R>(fn6: (arg: T6) => R, fn5: (arg: T5) => T6, fn4: (arg: T4) => T5, fn3: (arg: T3) => T4, fn2: (agr: T2) => T3, fn1: (agr: T1) => T2): (agr: T1) => R;
export function compose(...functions: Function[]) {
    return (x: any) => functions.reduceRight((x, f) => f(x), x)
}

/**
 * Композиция функций путем с лева
 * 
 * @param ...fn функции
 */
export function composel<T1, R>(fn1: (agr1: T1) => R): (agr1: T1) => R;
export function composel<T1, T2, R>(fn2: (agr2: T1) => T2, fn1: (agr1: T2) => R): (agr1: T1) => R;
export function composel<T1, T2, T3, R>(fn3: (arg: T1) => T2, fn2: (agr: T2) => T3, fn1: (agr: T3) => R): (agr: T1) => R;
export function composel<T1, T2, T3, T4, R>(fn4: (arg: T1) => T2, fn3: (arg: T2) => T3, fn2: (agr: T3) => T4, fn1: (agr: T4) => R): (agr: T1) => R;
export function composel<T1, T2, T3, T4, T5, R>(fn5: (arg: T1) => T2, fn4: (arg: T2) => T3, fn3: (arg: T3) => T4, fn2: (agr: T4) => T5, fn1: (agr: T5) => R): (agr: T1) => R;
export function composel<T1, T2, T3, T4, T5, T6, R>(fn6: (arg: T1) => T2, fn5: (arg: T2) => T3, fn4: (arg: T3) => T4, fn3: (arg: T4) => T5, fn2: (agr: T5) => T6, fn1: (agr: T6) => R): (agr: T1) => R;
export function composel(...functions: Function[]) {
    return (x: any) => functions.reduce((x, f) => f(x), x)
}

/**
 * Карирование тип 
 * f(first, ...rest) => 
 *  (...rest) => (first) => f(first, ...rest)
 * @param fn функция
 */
export function asUpdate<T1, R>(fn: (arg1: T1) => R): (arg1: T1) => () => R;
export function asUpdate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R): (arg2: T2) => (arg1: T1) => R;
export function asUpdate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R): (arg2: T2, arg3: T3) => (arg1: T1) => R;
export function asUpdate<T1, T2, T3, T4, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R): (arg2: T2, arg3: T3, arg4: T4) => (arg1: T1) => R;
export function asUpdate<T1, T2, T3, T4, T5, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R): (arg2: T2, arg3: T3, arg4: T4, arg5: T5) => (arg1: T1) => R;
export function asUpdate<T1, T2, T3, T4, T5, T6, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R): (arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => (arg1: T1) => R;
export function asUpdate(fn: Function) {
    if (fn.length < 2) return fn
    else return (...rest: any[]) => (arg1: any) => fn(arg1, ...rest)
}

/**
 * Типы для каррирования
 */
export type CurryFunction1<T1, R> = (arg1: T1) => R;
export type CurryFunction2<T1, T2, R> = (arg1: T1) => CurryFunction1<T2, R>;
export type CurryFunction3<T1, T2, T3, R> = (arg1: T1) => CurryFunction2<T2, T3, R>;
export type CurryFunction4<T1, T2, T3, T4, R> = (arg1: T1) => CurryFunction3<T2, T3, T4, R>;
export type CurryFunction5<T1, T2, T3, T4, T5, R> = (arg1: T1) => CurryFunction4<T2, T3, T4, T5, R>;
export type CurryFunction6<T1, T2, T3, T4, T5, T6, R> = (arg1: T1) => CurryFunction5<T2, T3, T4, T5, T6, R>;

/**
 * Карирование функции 
 * 
 * 
 *  const f1 = (a: number, b: string, c:Date) => a * a + b + c.getTime()
 *  curry(f1)(55)("---")(new Date())
 * 
 * @param fn Функция
 */
export function curry<T1, R>(fn: (arg1: T1) => R): (arg1: T1) => R;
export function curry<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R): CurryFunction2<T1, T2, R>;
export function curry<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R): CurryFunction3<T1, T2, T3, R>;
export function curry<T1, T2, T3, T4, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R): CurryFunction4<T1, T2, T3, T4, R>;
export function curry<T1, T2, T3, T4, T5, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R): CurryFunction5<T1, T2, T3, T4, T5, R>;
export function curry<T1, T2, T3, T4, T5, T6, R>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R): CurryFunction6<T1, T2, T3, T4, T5, T6, R>;
export function curry(fn: Function) {
    if (fn.length < 2) return fn

    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...args2: any[]) => curried(...args, ...args2);
        }
    };
}

/**
 * Пример карироания с хабра, 
 * TODO: надо разобраться... 
 * https://habr.com/ru/articles/721346/

type _Head<A extends any[]> = A extends [infer H, ...any[]] ? H : never;
type _Tail<A extends any[]> = A extends [any, ...infer T] ? T : never;

type _Recurse<F extends (...args: any[]) => any, A1 extends any[] = [], A2 extends any[] = Parameters<F>>
    = A2 extends []
        ? F
    : F extends (...a: [...A1, ...A2]) => infer R
        ? ((...a1: A1) => _Recurse<(...a2: A2) => R>) & (_Recurse<F, [...A1, _Head<A2>], _Tail<A2>>)
        : never;

type Curry<F extends (...args: any[]) => any> = _Recurse<F>;

 */

/**
 * Композиция из двух элементов
 * 
 * @param f1 
 * @param f2 
 * @returns 
 */
export const compose2 = <A, B, C>(f1: (value: A) => B, f2: (value: B) => C): (value: A) => C => value => f2(f1(value))

/**
 * Функтор
 * 
 * const inc = (x:number) => x + 1
 * const dec = (x:number) => x - 1
 * const fincdec = Functor.of(inc).map(dec).map(inc).transform(1)
 * console.log(fincdec) // => 2
 * 
 * 
 */
export class Functor<A, B> {

    private constructor(public readonly transform: (value: A) => B) { }

    public static of<A, B>(transform: (value: A) => B): Functor<A, B> {
        return new Functor<A, B>(transform)
    }

    map<C>(transform: (value: B) => C): Functor<A, C> {
        return new Functor<A, C>(compose2<A, B, C>(this.transform, transform))
    }

}


/**
 * Создание потока для выполнения
 * 
 * Пример использования:
 * 
 * const inc = (x: number) => x + 1
 *
 * const o = Thread.of(10).apply(inc).value()
 * 
 * const r = Thread.of([1, 2, 3])
 *	.apply(list => list.map(inc))
 *	.apply(list => list.map(inc))
 *	.apply(list => list.reduce((acc, x) => acc + x, 10))
 *	.value
 *
 * console.log(o,r) 
 * 
 */
export class Thread<A> {

    public static of<A>(value: A) {
        return new Thread<A>(value)
    }

    private constructor(private readonly value: A) { }

    map<B>(transform: (value: A) => B): Thread<B> {
        return new Thread<B>(transform(this.value))
    }

    out() {
        return this.value;
    }
}

/**
 * То же самое что и Thread
 */
export type Pipe<A,> = Thread<A>

/**
 * Взять значение
 * 
 * @param v 
 * @returns 
 */
export const value = <T>(v: T) => v

/**
 * Установить как значение v вместо _s
 * @param _s 
 * @param v 
 * @returns значение v
 */
export const set = <V>(v: V) => () => v

/**
 * Установить как null
 *  
 * @returns null
 */
export const setNull = () => null

/**
 * Установить как undefined
 * 
 * @returns undefined
 */
export const setUndefined = () => undefined
