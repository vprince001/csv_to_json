const { COMMA, DIC, ES, NL, FORMAT } = require("./constants");

const extractValues = function (splittedLine) {
  let value = ES;
  let values = [];
  let isValueComplete = true;
  const lastIndex = splittedLine.length - 1;

  splittedLine.forEach((char, index) => {
    const previousChar = splittedLine[index - 1];
    const nextChar = splittedLine[index + 1];
    if (char === DIC) {
      isValueComplete = !isValueComplete;
      if (
        previousChar === DIC ||
        previousChar === COMMA ||
        nextChar === COMMA ||
        index === lastIndex - 1 ||
        index === 0
      ) {
        return;
      }
    }

    if ((char === COMMA || index === lastIndex) && isValueComplete) {
      if (char !== DIC && char !== COMMA && char !== "\r")
        value += char;
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
    if (value === 'null') {
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
