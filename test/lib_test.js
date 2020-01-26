const {deepEqual} = require("assert");
const {expect} = require('chai');
const {
    extractValues,
    getObj,
    getData,
    getFinalResult,
    readData,
    readFile
} = require("../source/library");

const {
    ES,
    CSV_DATA,
    DATA_IN_ARRAY,
    HEADERS,
    LINE1_DATA_IN_ARRAY,
    LINE2_DATA_IN_ARRAY,
    OBJ_FOR_LINE1,
    OBJ_FOR_LINE2,
    FINAL_RESULT,
    fs,
    FILE_PATH,
    WRONG_FILE_PATH
} = require("./constants_for_test");

describe("extractValues", function () {
    it("should return one value in array for a string without comma", function () {
        const value = "FIRST_NAME";
        const actual = extractValues(value.split(ES));
        const expected = ["FIRST_NAME"];

        deepEqual(actual, expected);
    });

    it("should return multiple values in array for a string with comma", function () {
        const value = "FIRST,NAME";
        const actual = extractValues(value.split(ES));
        const expected = ["FIRST", "NAME"];

        deepEqual(actual, expected);
    });


    it("should return one value in array if string with comma is surrounded by double inverted comma", function () {
        const value = '"FIRST,NAME"';
        const actual = extractValues(value.split(ES));
        const expected = ["FIRST,NAME"];

        deepEqual(actual, expected);
    });

    it("should return values in array for string containing multiple values without comma", function () {
        const actual = extractValues(DATA_IN_ARRAY[0].split(ES));
        const expected = HEADERS;

        deepEqual(actual, expected);
    });

    it("should return values in array for string containing multiple values with comma", function () {
        const value = '"FIRST,NAME","LAST,NAME"';
        const actual = extractValues(value.split(ES));
        const expected = ["FIRST,NAME", "LAST,NAME"];

        deepEqual(actual, expected);
    });

    it("should return values in array for string containing multiple values with comma", function () {
        const value = '"FIRST,NAME","LAST,NAME"';
        const actual = extractValues(value.split(ES));
        const expected = ["FIRST,NAME", "LAST,NAME"];

        deepEqual(actual, expected);
    });

    it("should return values in array for string containing both with comma and without comma values", function () {
        const actual = extractValues(DATA_IN_ARRAY[1].split(ES));
        const expected = LINE1_DATA_IN_ARRAY;

        deepEqual(actual, expected);
    });
});

describe("getObj", function () {
    it("should map all headers to values as an object of key - value pairs", function () {
        const actual = getObj(HEADERS, LINE1_DATA_IN_ARRAY);
        const expected = OBJ_FOR_LINE1;

        deepEqual(actual, expected);
    });

    it("should map all headers to values as an object of key - value pairs and handle null case also", function () {
        const actual = getObj(HEADERS, LINE2_DATA_IN_ARRAY);
        const expected = OBJ_FOR_LINE2;

        deepEqual(actual, expected);
    });
});

describe("getData", function () {
    it("should throw an error if no valid argument is passed", function () {
        expect(() => getData({})).to.throw();
    });

    it("should take data as string if filepath is not given", function () {
        const actual = getData({data: CSV_DATA});
        const expected = DATA_IN_ARRAY;

        deepEqual(actual, expected);
    });
});

describe("readData", function () {
    it("should return data in Array if data is a string", function () {
        const actual = readData(CSV_DATA);
        const expected = DATA_IN_ARRAY;

        deepEqual(actual, expected);
    });

    it("should throw an error if data is not a string", function () {
        expect(() => readData(["someValues"])).to.throw();
    });

    it("should throw an error if data is an empty string", function () {
        expect(() => readData(ES)).to.throw();
    });
});

describe("readFile", function () {
    it("should return data in Array if file exists", function () {
        const actual = readFile(FILE_PATH, fs);
        const expected = DATA_IN_ARRAY;

        deepEqual(actual, expected);
    });

    it("should throw an error if file does not exists", function () {
        expect(() => getData({filePath: WRONG_FILE_PATH}, fs)).to.throw();
    });
});

describe("getFinalResult", function () {
    it("should return data in json for data in csv and array of headers", function () {
        const actual = getFinalResult(DATA_IN_ARRAY.slice(1), HEADERS);
        const expected = FINAL_RESULT;

        deepEqual(actual, expected);
    });
});
