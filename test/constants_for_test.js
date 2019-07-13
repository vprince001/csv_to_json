const DATA = [
  "FIRST_NAME, LAST_NAME, NUMBER, EMAIL, ADDRESS",
  'Debra,Berks,880012XXXX,debra.burks@yahoo.com,"9273 Thome Ave., Orchard Park, NY - 14127"',
  'Kasha,Todd,NULL,kasha.todd@yahoo.com,"910, Vine Street, Campbell, CA - 95008"'
];

const HEADERS_LINE = DATA[0];
const LINE1 = DATA[1];
const LINE2 = DATA[2];

const HEADERS = ["FIRST_NAME", "LAST_NAME", "NUMBER", "EMAIL", "ADDRESS"];

const LINE1_DATA = [
  "Debra",
  "Berks",
  "880012XXXX",
  "debra.burks@yahoo.com",
  '"9273 Thome Ave., Orchard Park, NY - 14127"'
];

OBJ_FOR_LINE1 = {
  FIRST_NAME: "Debra",
  LAST_NAME: "Berks",
  NUMBER: "880012XXXX",
  EMAIL: "debra.burks@yahoo.com",
  ADDRESS: '"9273 Thome Ave., Orchard Park, NY - 14127"'
};

module.exports = {
  DATA,
  HEADERS_LINE,
  LINE1,
  LINE2,
  HEADERS,
  LINE1_DATA,
  OBJ_FOR_LINE1
};
