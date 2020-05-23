const fs = require("fs");
const {ES} = require("./source/constants");
const {extractValues, getFinalResult, getData, sliceHeaderIfNeeded} = require("./source/library");

const main = function (params) {
    const data = getData(params, fs);
    const headers = params.headers ? params.headers : extractValues(data[0].split(ES), params.separator);
    const dataWithOrWithoutHeader = sliceHeaderIfNeeded(params, data);
    return getFinalResult(dataWithOrWithoutHeader, headers, params.separator);
};

module.exports = main;
