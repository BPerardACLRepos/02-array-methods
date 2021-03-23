const mapArr = (arr, callback) => {
    const mapped = [];
    for (let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i]);
    }
    return mapped;
}

module.exports = {
    mapArr
};