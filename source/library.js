const { COMMA, DIC, ES, NL, FORMAT } = require("./constants");

const extractValues = function (splittedLine) {
  let value = ES;
  let values = [];
  let isValueComplete = true;
  const length = splittedLine.length;

  splittedLine.forEach((char, index) => {
    const previousChar = splittedLine[index - 1];
    const nextChar = splittedLine[index + 1];
    const lastIndex = length - 1;
    if (char == DIC) {
      isValueComplete = !isValueComplete;
      if (
        previousChar == DIC ||
        previousChar == COMMA ||
        nextChar == COMMA ||
        index == lastIndex - 1
      ) {
        return;
      }
    }

    if ((char == COMMA || index == lastIndex) && isValueComplete) {
      values.push(value);
      value = ES;
      return;
    }
    value += char;
  });
  return values;
};

const getObj = function (headers, lineData) {
  const obj = {};

  headers.forEach((header, index) => {
    let value = lineData[index];
    if (value == 'null') {
      value = null;
    }
    obj[header] = value;
  });
  return obj;
};

const getFinalResult = function (data, headers) {
  const finalResult = [];
  data.forEach(line => {
    line = line.split(ES);
    const lineData = extractValues(line);
    const obj = getObj(headers, lineData);
    finalResult.push(obj);
  });
  return finalResult;
};

const getData = function (params, fs) {
  if (params.filePath == null)
    return params.data.split(NL);
  return fs.readFileSync(params.filePath, FORMAT).replace(/^\uFEFF/, '').split(NL);
};

module.exports = { extractValues, getObj, getFinalResult, getData };
