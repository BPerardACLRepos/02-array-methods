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

module.exports = {
    mapArr,
    filterArr,
};