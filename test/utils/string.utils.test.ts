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

  describe("#trim", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.trim(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return undefined if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.trim(testValue);
      expect(undefined).to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.trim(testValue);
      expect("ss").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.trim(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.trim(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.trim(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#strip", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.strip(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return undefined if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.strip(testValue);
      expect(undefined).to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.strip(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.strip(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.strip(testValue);
      expect("\b").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.strip(testValue);
      expect("ss   \b").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.strip(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.strip(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.strip(testValue);
      expect("dd").to.be.eq(result);
    });
  });
});
