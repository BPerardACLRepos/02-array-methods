const {
    mapArr
} = require('./index');

describe('array methods', () => {
    it('takes array and callback and returns new array of callback return values', () => {
        const mockCallback = jest.fn();

        const expected = mapArr(arr, mockCallback);

        expect(expected).toHaveReturnedTimes(arr.length);
    });
});