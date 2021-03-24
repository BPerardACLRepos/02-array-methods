const {
    mapArr,
    filterArr,
    findIndex,
    reduceArr,
    everyArr,
} = require('./index');

describe('array methods', () => {
    it('takes array and callback and returns new array of callback return values', () => {
        const callback = (item) => {
            return item ** 3;
        }

        const mockArray = [1, 2, 3, 4];

        const expected = mapArr(mockArray, callback);

        expect(expected).toEqual([1, 8, 27, 64]);
    });

    it('takes array and callback and returns truthy values in new array', () => {
        const callback = item => {
            return item % 3 !== 0;
        }

        const mockArray = [2, 33, 5, 8, 3, 12];

        const expected = filterArr(mockArray, callback);

        expect(expected).toEqual([2, 5, 8]);
    });

    it('takes an array and callback and returns index of first item that returns truthy value, or -1 if no truthy value in array', () => {
        const callback = item => {
            return item.length > 4;
        }

        const mockArray = ['here', 'there', 'yollo', 'jeep'];

        const expected = findIndex(mockArray, callback);

        const secondMockArray = [1, 2, 3, 4];

        const secondExpected = findIndex(secondMockArray, callback);

        expect(expected).toEqual(1);
        expect(secondExpected).toEqual(-1);
    });

    it('takes an array, callback, and optional initial value, accumulates the values, and returns the accumulator', () => {
        const callback = (accumulator, item) => {
            return accumulator * item;
        }

        const mockArray = [3, 4, 7, 2];

        const expected = reduceArr(mockArray, callback);

        const secondExpected = reduceArr(mockArray, callback, 0.5);

        expect(expected).toEqual(168);
        expect(secondExpected).toEqual(84);
    });

    it('takes an array and callback and returns true if all callback returns are truthy, otherwise returns false', () => {
        const callback = item => {
            return typeof item === 'string';
        }

        const mockArray = ['1', 'one', 'won', 'is the loneliest number']

        const expected = everyArr(mockArray, callback);

        const secondMockArray = ['!', '!', '!', 1]

        const secondExpected = everyArr(secondMockArray, callback);

        expect(expected).toEqual(true);
        expect(secondExpected).toEqual(false);
    });
});