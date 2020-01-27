const fs = require("fs");
const {ES} = require("./source/constants");
const {extractValues, getFinalResult, getData} = require("./source/library");

const main = function (params) {
    const data = getData(params, fs);
    const headers = params.headers ? params.headers : extractValues(data[0].split(ES), params.separator);
    const dataInArray = params.hasHeader ? data.slice(1) : data;
    return getFinalResult(dataInArray, headers, params.separator);
};

module.exports = main;
