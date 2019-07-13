const { equal, deepEqual } = require("assert");
const { getObj } = require("../source/library");
const { HEADERS, LINE1_DATA, OBJ_FOR_LINE1 } = require("./constants_for_test");

describe("getObj", function() {
  it("should map all headers to values as an object of key - value pairs", function() {
    const actual = getObj(HEADERS, LINE1_DATA);
    const expected = OBJ_FOR_LINE1;
    deepEqual(actual, expected);
  });
});
