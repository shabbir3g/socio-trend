const sum = require("./sum");

// .toBe(3)

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// .toEqua

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// .not.toBe(0)

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    console.log(a);
    for (let b = 1; b < 10; b++) {
      console.log(b);
      expect(a + b).not.toBe(0);
    }
  }
});
