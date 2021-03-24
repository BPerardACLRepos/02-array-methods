const mapArr = (arr, callback) => {
    const mapped = [];
    for (let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i]);
    }
    return mapped;
}

const filterArr = (arr, callback) => {
    let filtered = []
    for (let item of arr) {
        if (callback(item)) {
            filtered = [...filtered, item];
        }
    }
    return filtered;
}

const findIndex = (arr, callback) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            index = i;
            i = arr.length;
        }
    }
    return index;
}

const reduceArr = (arr, callback, initialValue = null) => {
    let product = initialValue;
    for (let i = 0; i < arr.length; i++) {
        if (!initialValue && i === 0) {
            product = callback(arr[0], arr[1]);
            i++;
        } else {
            product = callback(product, arr[i]);
        }
    }
    return product;
}

module.exports = {
    mapArr,
    filterArr,
    findIndex,
    reduceArr,
};