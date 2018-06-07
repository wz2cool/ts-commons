import { expect } from "chai";
import { describe } from "mocha";
import { StringUtils } from "../../src";
describe(".StringUtils", () => {
  describe("#isBlank", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return true if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });

    it('should return false if value is "   "', () => {
      const testValue = "   ";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });

    it('should return false if value is "bob"', () => {
      const testValue = "bob";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });

    it('should return false if value is " bob "', () => {
      const testValue = " bob ";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
  });
});
