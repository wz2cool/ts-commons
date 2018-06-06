import { expect } from "chai";
import { describe } from "mocha";
import { ObjectUtils } from "../../src";
describe(".ObjectUtils", () => {
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
});
