import { NumberUtils } from "../../src";
import { expect } from "chai";

describe(".NumberUtils", () => {
  describe("#isInteger", () => {
    // Number.isInteger(0);         // true
    // Number.isInteger(1);         // true
    // Number.isInteger(-100000);   // true
    // Number.isInteger(99999999999999999999999); // true
    // Number.isInteger(0.1);       // false
    // Number.isInteger(Math.PI);   // false
    // Number.isInteger(NaN);       // false
    // Number.isInteger(Infinity);  // false
    // Number.isInteger(-Infinity); // false
    // Number.isInteger('10');      // false
    // Number.isInteger(true);      // false
    // Number.isInteger(false);     // false
    // Number.isInteger([1]);       // false
    it("should return true if value is 0", () => {
      const value = 0;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 1", () => {
      const value = 1;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is -10000", () => {
      const value = -10000;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 99999999999999999999999", () => {
      const value = 99999999999999999999999;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is 0.1", () => {
      const value = 0.1;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is Math.PI", () => {
      const value = Math.PI;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is NaN", () => {
      const value = NaN;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is Infinity", () => {
      const value = Infinity;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is -Infinity", () => {
      const value = -Infinity;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '10'", () => {
      const value = "10" as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is true", () => {
      const value = true as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is false", () => {
      const value = false as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is [1]", () => {
      const value = [1] as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
  });
});
