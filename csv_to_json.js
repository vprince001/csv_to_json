const { ES } = require("./source/constants");
const { extractValues, getFinalResult, getData } = require("./source/library");

const main = function(filePath) {
  const data = getData(filePath);
  const headers = extractValues(data[0].split(ES));
  const finalResult = getFinalResult(data.slice(1), headers);
  return finalResult;
};

main("./app_test_data/data.csv");
// module.exports = main;
