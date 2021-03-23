const {
    mapArr
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

        expect(expected).toEqual([33, 3, 12]);
    });
});