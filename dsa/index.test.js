import { add, subtract, multiply, divide } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("divides 4 / 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2);
});
