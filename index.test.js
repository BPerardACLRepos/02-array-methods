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
});