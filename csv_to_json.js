const fs = require("fs");
const { ES } = require("./source/constants");
const { extractValues, getFinalResult, getData } = require("./source/library");

const main = function (params) {
  const data = getData(params, fs);
  const headers = extractValues(data[0].split(ES));
  const finalResult = getFinalResult(data.slice(1), headers);
  return finalResult;
};

module.exports = main;
