import { describe, it, expect } from "vitest";

import {
  calculatePercentageDifference,
  generateRandomPercentageDifference,
  detectNegativeSymsFromString,
  isNanChecker,
} from "@/utils/percentage";

describe("calculatePercentageDifference", () => {
  it("should calculate positive percentage difference correctly", () => {
    const today = 120;
    const dayBefore = 100;
    expect(calculatePercentageDifference(today, dayBefore)).toBe("20.00 %");
  });

  it("should calculate negative percentage difference correctly", () => {
    const today = 80;
    const dayBefore = 100;
    expect(calculatePercentageDifference(today, dayBefore)).toBe("-20.00 %");
  });

  it("should handle zero difference correctly", () => {
    const today = 100;
    const dayBefore = 100;
    expect(calculatePercentageDifference(today, dayBefore)).toBe("0.00 %");
  });

  it("should return 'Infinity' when division by zero occurs", () => {
    const today = 100;
    const dayBefore = 0;
    expect(calculatePercentageDifference(today, dayBefore)).toBe("Infinity %");
  });

  it("should handle very small differences correctly", () => {
    const today = 100.01;
    const dayBefore = 100;
    expect(calculatePercentageDifference(today, dayBefore)).toBe("0.01 %");
  });
});

describe("generateRandomPercentageDifference", () => {
  it("should generate a percentage between -5% and 10%", () => {
    // Generate a random percentage difference
    const result = generateRandomPercentageDifference();
    const percentage = parseFloat(result.replace(" %", ""));

    // Check if the percentage is within the expected range
    expect(percentage).toBeGreaterThanOrEqual(-5);
    expect(percentage).toBeLessThanOrEqual(10);
  });

  it("should return a string with the correct format", () => {
    const result = generateRandomPercentageDifference();
    // Check if it returns a string with the format "xx.xx %"
    expect(result).toMatch(/^-?\d+(\.\d{2})? %$/);
  });
});

describe("detectNegativeSymsFromString", () => {
  it("should return true if the string starts with a negative sign", () => {
    expect(detectNegativeSymsFromString("-100")).toBe(true);
    expect(detectNegativeSymsFromString("-abc")).toBe(true);
  });

  it("should return false if the string does not start with a negative sign", () => {
    expect(detectNegativeSymsFromString("100")).toBe(false);
    expect(detectNegativeSymsFromString("abc")).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(detectNegativeSymsFromString("")).toBe(false);
  });

  it("should return true if the string starts with space then a negative sign", () => {
    expect(detectNegativeSymsFromString(" -100")).toBe(true);
  });
});

describe("isNanChecker", () => {
  it("should return the default value if the number is NaN", () => {
    expect(isNanChecker(NaN, 10)).toBe(10);
  });

  it("should return the original number if it is not NaN", () => {
    expect(isNanChecker(5, 10)).toBe(5);
    expect(isNanChecker(0, 10)).toBe(0);
    expect(isNanChecker(3.14, 10)).toBe(3.14);
  });
});
