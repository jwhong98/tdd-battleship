const ship = require("../ship");

const battleShip = ship(3);

test("Ship is storing properties correctly", () => {
  expect(battleShip.length).toBe(3);
  expect(battleShip.timesHit).toBe(0);
  expect(battleShip.sunk).toBe(false);
});

describe("ship functions", () => {
  beforeEach(() => {
    battleShip.hit();
  });
  test("Ship hit function increments hit property", () => {
    expect(battleShip.timesHit).toEqual(1);
  });
});
