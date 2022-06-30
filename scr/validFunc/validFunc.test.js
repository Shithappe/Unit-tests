const validFunc = require('./validFunc');


describe('validFunc', () => {
    test('Validation value', () => {
        expect(validFunc(1)).toBe(true);
    });

    test('Меньше нуля', () => {
        expect(validFunc(-10)).toBe(false);
    });

    test('Больше 100', () => {
        expect(validFunc(110)).toBe(false);
    });
})