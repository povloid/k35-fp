export const partial1 = <A1, A2, R>(fn: (a1: A1, a2: A2) => R, a1: A1) => (a2: A2) => fn(a1, a2)
export const partial2 = <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R, a1: A1, a2: A2) => (a3: A3) => fn(a1, a2, a3)
export const partial3 = <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R, a1: A1, a2: A2, a3: A3) => (a4: A4) => fn(a1, a2, a3, a4)
export const partial4 = <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R, a1: A1, a2: A2, a3: A3, a4: A4) => (a5: A5) => fn(a1, a2, a3, a4, a5)
export const partial5 = <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => (a6: A6) => fn(a1, a2, a3, a4, a5, a6)
export const partial6 = <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => (a7: A7) => fn(a1, a2, a3, a4, a5, a6, a7)
export const partial7 = <A1, A2, A3, A4, A5, A6, A7, A8, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => R, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => (a8: A8) => fn(a1, a2, a3, a4, a5, a6, a7, a8)

export const partial1Right = <A1, A2, R>(fn: (a1: A1, a2: A2) => R, a2: A2) => (a1: A1) => fn(a1, a2)
export const partial2Right = <A1, A2, A3, R>(fn: (a1: A1, a2: A2, a3: A3) => R, a2: A2, a3: A3) => (a1: A1) => fn(a1, a2, a3)
export const partial3Right = <A1, A2, A3, A4, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R, a2: A2, a3: A3, a4: A4) => (a1: A1) => fn(a1, a2, a3, a4)
export const partial4Right = <A1, A2, A3, A4, A5, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R, a2: A2, a3: A3, a4: A4, a5: A5) => (a1: A1) => fn(a1, a2, a3, a4, a5)
export const partial5Right = <A1, A2, A3, A4, A5, A6, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => (a1: A1) => fn(a1, a2, a3, a4, a5, a6)
export const partial6Right = <A1, A2, A3, A4, A5, A6, A7, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => (a1: A1) => fn(a1, a2, a3, a4, a5, a6, a7)
export const partial7Right = <A1, A2, A3, A4, A5, A6, A7, A8, R>(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => R, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => (a1: A1) => fn(a1, a2, a3, a4, a5, a6, a7, a8)


export const curry2 = <A1, A2, R>
	(fn: (a1: A1, a2: A2) => R) =>
	(a1: A1) => (a2: A2) => fn(a1, a2)

export const curry3 = <A1, A2, A3, R>
	(fn: (a1: A1, a2: A2, a3: A3) => R) =>
	(a1: A1) => (a2: A2) => (a3: A3) => fn(a1, a2, a3)

export const curry4 = <A1, A2, A3, A4, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R) =>
	(a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => fn(a1, a2, a3, a4)

export const curry5 = <A1, A2, A3, A4, A5, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R) =>
	(a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => fn(a1, a2, a3, a4, a5)

export const curry6 = <A1, A2, A3, A4, A5, A6, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R) =>
	(a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => (a6: A6) => fn(a1, a2, a3, a4, a5, a6)

export const curry7 = <A1, A2, A3, A4, A5, A6, A7, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R) =>
	(a1: A1) => (a2: A2) => (a3: A3) => (a4: A4) => (a5: A5) => (a6: A6) => (a7: A7) => fn(a1, a2, a3, a4, a5, a6, a7)


export const curry2Right = <A1, A2, R>
	(fn: (a1: A1, a2: A2) => R) =>
	(a2: A2) => (a1: A1) => fn(a1, a2)

export const curry3Right = <A1, A2, A3, R>
	(fn: (a1: A1, a2: A2, a3: A3) => R) =>
	(a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3)

export const curry4Right = <A1, A2, A3, A4, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4) => R) =>
	(a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3, a4)

export const curry5Right = <A1, A2, A3, A4, A5, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R) =>
	(a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3, a4, a5)

export const curry6Right = <A1, A2, A3, A4, A5, A6, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => R) =>
	(a6: A6) => (a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3, a4, a5, a6)

export const curry7Right = <A1, A2, A3, A4, A5, A6, A7, R>
	(fn: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => R) =>
	(a7: A7) => (a6: A6) => (a5: A5) => (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3, a4, a5, a6, a7)



export const compose2 = <A, B, C>(f1: (value: A) => B, f2: (value: B) => C): (value: A) => C => value => f2(f1(value))


/**
 * Функтор
 * 
 * const inc = (x:number) => x + 1
 * const dec = (x:number) => x - 1
 * const fincdec = new Functor(inc).map(dec).map(inc).transform(1)
 * console.log(fincdec) // => 2
 * 
 * 
 */
export class Functor<A, B> {

	public constructor(public readonly transform: (value: A) => B) { }

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
 * const o = Thread.from(10).apply(inc).value()
 * 
 * const r = Thread.from([1, 2, 3])
 *	.apply(list => list.map(inc))
 *	.apply(list => list.map(inc))
 *	.apply(list => list.reduce((acc, x) => acc + x, 10))
 *	.value
 *
 * console.log(o,r) 
 * 
 */
export class Thread<A> {

	public static from<A>(value: A) {
		return new Thread<A>(value)
	}

	private constructor(public readonly value: A) { }

	apply<B>(transform: (value: A) => B): Thread<B> {
		const result = transform(this.value)
		return new Thread<B>(result)
	}

}

