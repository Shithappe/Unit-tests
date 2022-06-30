const validFunc = (value) => {
    if (0 < value && value <= 100) return true;
    return false;
}

module.exports = validFunc;
