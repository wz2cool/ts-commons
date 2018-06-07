import { expect } from "chai";
import { describe } from "mocha";
import { StringUtils } from "../../src";
describe(".StringUtils", () => {
  describe("#isEmpty", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = StringUtils.isEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return false if value is "   "', () => {
      const testValue = "   ";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return false if value is "bob"', () => {
      const testValue = "bob";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return false if value is " bob "', () => {
      const testValue = " bob ";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNotEmpty", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = StringUtils.isNotEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isNotEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return true if value is "   "', () => {
      const testValue = "   ";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return true if value is "bob"', () => {
      const testValue = "bob";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return true if value is " bob "', () => {
      const testValue = " bob ";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
  });

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
    it("should return true if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\t \n \f \r'", () => {
      const testValue = "\t \n \f \r";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is '\b'", () => {
      const testValue = "\b";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is 'bob'", () => {
      const testValue = "bob";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is ' bob '", () => {
      const testValue = " bob ";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNotBlank", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '\t \n \f \r'", () => {
      const testValue = "\t \n \f \r";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return true if value is '\b'", () => {
      const testValue = "\b";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 'bob'", () => {
      const testValue = "bob";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is ' bob '", () => {
      const testValue = " bob ";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
  });
});
