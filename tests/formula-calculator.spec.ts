import { describe, expect, it } from "vitest";
import { FormulaCalculator } from "../src/formula-calculator.js";

describe("FormulaCalculator", () => {
  it("calculates known value for valid x", () => {
    const calculator = new FormulaCalculator(7.2, 1.3);
    const value = calculator.calculate(2.4);
    expect(value).toBeCloseTo(13.7026, 4);
  });

  it("throws when x is out of domain", () => {
    const calculator = new FormulaCalculator(7.2, 1.3);
    expect(() => calculator.calculate(0)).toThrow("x must be > 0");
  });

  it("builds table for task A range", () => {
    const calculator = new FormulaCalculator(7.2, 1.3);
    const rows = calculator.calculateRange(1.56, 4.71, 0.63);
    expect(rows.length).toBe(6);
    expect(rows[0].x).toBe(1.56);
  });

  it("supports discrete task B values", () => {
    const calculator = new FormulaCalculator(7.2, 1.3);
    const rows = calculator.calculateValues([2.4, 2.8, 3.9]);
    expect(rows.length).toBe(3);
    expect(typeof rows[1].y).toBe("number");
  });
});
