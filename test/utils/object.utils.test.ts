import { expect } from "chai";
import { describe } from "mocha";
import { ObjectUtils } from "../../src";
describe(".ObjectUtils", () => {
  describe("#isNull", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isNull(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isNull(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue = {};
      const result = ObjectUtils.isNull(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isUndefinend", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isUndefinend(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return true if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isUndefinend(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue = {};
      const result = ObjectUtils.isUndefinend(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNullOrUndefined", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return true if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is number", () => {
      const testValue = 123;
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is string", () => {
      const testValue = "test";
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue: any = {};
      const result = ObjectUtils.isNullOrUndefined(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isArray", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is undefined", () => {
      const testValue = undefined;
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return false if value is object", () => {
      const testValue: any = {};
      const result = ObjectUtils.isArray(testValue);
      expect(false).to.be.eq(result);
    });

    it("should return true if value is string array", () => {
      const testValue: string[] = [];
      const result = ObjectUtils.isArray(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return true if value is any array", () => {
      const testValue: any[] = [];
      const result = ObjectUtils.isArray(testValue);
      expect(true).to.be.eq(result);
    });
  });

  describe("#isDate", () => {
    it("should return true if value is new Date()", () => {
      const testValue = new Date();
      const result = ObjectUtils.isDate(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 123", () => {
      const testValue = "123";
      const result = ObjectUtils.isDate(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isString", () => {
    it("should return true if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isString(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 123", () => {
      const testValue = 123;
      const result = ObjectUtils.isString(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNumber", () => {
    it("should return true if value is 123", () => {
      const testValue = 123;
      const result = ObjectUtils.isNumber(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isNumber(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isBoolean", () => {
    it("should return true if value is true", () => {
      const testValue = true;
      const result = ObjectUtils.isBoolean(testValue);
      expect(true).to.be.eq(result);
    });

    it("should return false if value is 'test'", () => {
      const testValue = "test";
      const result = ObjectUtils.isBoolean(testValue);
      expect(false).to.be.eq(result);
    });
  });
});
