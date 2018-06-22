import { RegexUtils } from "../../src";
import { expect } from "chai";

describe(".RegexUtils", () => {
  describe("#escapeRegex", () => {
    it(`shoule return '\*' if str is '*'`, () => {
      const testValue = "*";
      const result = RegexUtils.escapeRegExp(testValue);
      expect(`\\*`).to.be.eq(result);
    });
    it(`shoule return '\/path\/to\/resource\.html\?search=query' if str is '/path/to/resource.html?search=query'`, () => {
      const testValue = "/path/to/resource.html?search=query";
      const result = RegexUtils.escapeRegExp(testValue);
      expect(`\\/path\\/to\\/resource\\.html\\?search=query`).to.be.eq(result);
    });
  });
  describe("#validateUsername", () => {
    it("should return true if value is wz2cool", () => {
      const testValue = "wz2cool";
      const result = RegexUtils.validateUsername(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is WZ2COOL", () => {
      const testValue = "WZ2COOL";
      const result = RegexUtils.validateUsername(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is wz base less than 3", () => {
      const testValue = "wz";
      const result = RegexUtils.validateUsername(testValue);
      expect(false).to.be.eq(result);
    });
  });
  describe("#validatePassword", () => {
    it("should return true if value is password123", () => {
      const testValue = "password123";
      const result = RegexUtils.validatePassword(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is passworddddddd", () => {
      // no number
      const testValue = "passworddddddd";
      const result = RegexUtils.validatePassword(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return true if value is 1234567890", () => {
      // no string
      const testValue = "1234567890";
      const result = RegexUtils.validatePassword(testValue);
      expect(false).to.be.eq(result);
    });
  });
  describe("#validateEmail", () => {
    it("should return true if value is aaa@live.cn", () => {
      const testValue = "aaa@live.cn";
      const result = RegexUtils.validateEmail(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is aaa", () => {
      const testValue = "aaa";
      const result = RegexUtils.validateEmail(testValue);
      expect(false).to.be.eq(result);
    });
  });
});
