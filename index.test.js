const {
    mapArr,
    filterArr,
    findIndex,
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
});