import { asUpdate, compose, composel, curry, Functor, Thread } from "../src/fp";

describe('Тестирование compose', () => {

    test('Тестирование функции с одним аргументом', () => {

        const inc = (x: number) => x + 1

        const comp = compose(inc)

        const a = 5

        expect(comp(a)).toBe(6);
    });

    test('Тестирование функции с двумя аргументами', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1

        const comp = compose(inc, dec)

        const a = 5

        expect(comp(a)).toBe(5);
    });


    test('Тестирование функции с тремя агрументами', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1
        const str = (x: number) => x + ""

        const comp = compose(str, inc, dec)

        const a = 5

        expect(comp(a)).toBe("5");
    });
});

describe('Тестирование composel', () => {

    test('Тестирование функции с одним аргументом', () => {

        const inc = (x: number) => x + 1

        const comp = composel(inc)

        const a = 5

        expect(comp(a)).toBe(6);
    });

    test('Тестирование функции с двумя аргументами', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1

        const comp = composel(inc, dec)

        const a = 5

        expect(comp(a)).toBe(5);
    });


    test('Тестирование функции с тремя агрументами', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1
        const str = (x: number) => x + ""

        const comp = composel(inc, dec, str)

        const a = 5

        expect(comp(a)).toBe("5");
    });
});


describe('Тестирование asUpdate', () => {

    test('Тестирование функции с одним аргументом', () => {

        const f1 = (a: number): string => a * a + " sec"
        const f1C = asUpdate(f1)

        const a = 5
        expect(f1(a)).toBe(f1C(a));
    });

    test('Тестирование функции с двумя аргументами', () => {

        const f1 = (a: number, b: string) => a * a + b
        const f1C = asUpdate(f1)

        const a = 5, b = " mm"
        expect(f1(a, b)).toBe(f1C(b)(a));
    });


    test('Тестирование функции с тремя агрументами', () => {

        const f1 = (a: number, b: string, c: number): string => a * a + b + c
        const f1C = asUpdate(f1)

        const a = 1, b = "-", c = 123
        expect(f1(a, b, c)).toBe(f1C(b, c)(a));
    });
});


describe('Тестирование curry', () => {


    test('Тестирование функции с одним агрументом', () => {

        const f1 = (a: number): number => a * a

        const f1C = curry(f1)

        const a = 111

        expect(f1(a)).toBe(f1C(a));
    });

    test('Тестирование функции с тремя агрументами', () => {

        const f1 = (a: number, b: string, c: number): string => a * a + b + c
        const f1C = curry(f1)

        const a = 987, b = "-", c = 123

        expect(f1(a, b, c)).toBe(f1C(a)(b)(c));
    });

    test('Тестирование функции с четыремя агрументами', () => {

        const f1 = (a: number, b: number, c: number, d: string): string => (a + b * c) + " " + d
        const f1C = curry(f1)

        const a = 1000, b = 5, c = 7, d = "sec"

        expect(f1(a, b, c, d)).toBe(f1C(a)(b)(c)(d));
    });
});


describe('Тестирование Functor', () => {

    test('Тестирование с одной функцией', () => {

        const inc = (x: number) => x + 1
        const functor = Functor.of(inc)

        expect(functor.transform(5)).toBe(6);
    });

    test('Тестирование функции с двумя функциями', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1
        const functor = Functor.of(inc).map(dec)

        expect(functor.transform(5)).toBe(5);

    });

    test('Тестирование функции с тремя функциями', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1
        const str = (x: number) => x + ""
        const functor = Functor.of(inc).map(dec).map(str)

        expect(functor.transform(5)).toBe("5");
    });
});

describe('Тестирование Thread', () => {

    test('Тестирование с одной функцией', () => {
        const inc = (x: number) => x + 1
        expect(Thread.of(5).map(inc).out()).toBe(6);
    });

    test('Тестирование функции с двумя функциями', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1

        expect(Thread.of(5).map(inc).map(dec).out()).toBe(5);

    });

    test('Тестирование функции с тремя функциями', () => {

        const inc = (x: number) => x + 1
        const dec = (x: number) => x - 1
        const str = (x: number) => x + ""

        expect(Thread.of(5).map(inc).map(dec).map(str).out()).toBe("5");
    });
});

