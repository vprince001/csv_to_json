const NL = "\n";
const comma = ",";
const ES = "";
const FILE_PATH = "./data.json";
const WRONG_FILE_PATH = "./d.csv";

const CSV_DATA = `FIRST_NAME,LAST_NAME,NUMBER,EMAIL,ADDRESS
Debra,Berks,880012XXXX,debra.burks@yahoo.com,"9273 Thome Ave., Orchard Park, NY - 14127"
Kasha,Todd,null,kasha.todd@yahoo.com,"910, Vine Street, Campbell, CA - 95008"`;

const DATA_IN_ARRAY = CSV_DATA.split(NL);

const HEADERS = DATA_IN_ARRAY[0].split(comma);

const LINE1_DATA_IN_ARRAY = [
    "Debra",
    "Berks",
    "880012XXXX",
    "debra.burks@yahoo.com",
    "9273 Thome Ave., Orchard Park, NY - 14127"
];

const LINE2_DATA_IN_ARRAY = [
    "Kasha",
    "Todd",
    "null",
    "kasha.todd@yahoo.com",
    "910, Vine Street, Campbell, CA - 95008"
];

const OBJ_FOR_LINE1 = {
    FIRST_NAME: "Debra",
    LAST_NAME: "Berks",
    NUMBER: "880012XXXX",
    EMAIL: "debra.burks@yahoo.com",
    ADDRESS: "9273 Thome Ave., Orchard Park, NY - 14127"
};

const OBJ_FOR_LINE2 = {
    FIRST_NAME: "Kasha",
    LAST_NAME: "Todd",
    NUMBER: null,
    EMAIL: "kasha.todd@yahoo.com",
    ADDRESS: "910, Vine Street, Campbell, CA - 95008"
};

const FINAL_RESULT = [OBJ_FOR_LINE1, OBJ_FOR_LINE2];

const fs = {
    readFileSync: () => CSV_DATA,
    existsSync: filePath => filePath === FILE_PATH
};

module.exports = {
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
};
