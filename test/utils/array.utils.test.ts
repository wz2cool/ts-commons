import { ArrayUtils } from "../../src";
import { expect } from "chai";

describe(".CollectionUtils", () => {
  describe("#isEmpty", () => {
    it("should return true if value is null", () => {
      const value = null;
      const result = ArrayUtils.isEmpty(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is undefined", () => {
      const value = undefined;
      const result = ArrayUtils.isEmpty(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is []", () => {
      const value = [];
      const result = ArrayUtils.isEmpty(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is [1,2,3]", () => {
      const value: number[] = [1, 2, 3];
      const result = ArrayUtils.isEmpty(value);
      expect(false).to.be.eq(result);
    });
  });

  describe("#constains", () => {
    it("should return false if collectin is null and obj is 1", () => {
      const collectin = null;
      const obj = 1;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if collectin is undefined and obj is 1", () => {
      const collectin = undefined;
      const obj = 1;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if collectin is [] and obj is 1", () => {
      const collectin = [];
      const obj = 1;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
    it("should return true if collectin is [1,2,3] and obj is 1", () => {
      const collectin = [1, 2, 3];
      const obj = 1;
      const result = ArrayUtils.contains(collectin, obj);
      expect(true).to.be.eq(result);
    });
    it("should return false if collectin is [1,2,3] and obj is 5", () => {
      const collectin = [1, 2, 3];
      const obj = 5;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if collectin is [1,2,3] and obj is null", () => {
      const collectin = [1, 2, 3];
      const obj = null;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if collectin is [1,2,3] and obj is undefined", () => {
      const collectin = [1, 2, 3];
      const obj = undefined;
      const result = ArrayUtils.contains(collectin, obj);
      expect(false).to.be.eq(result);
    });
  });

  describe("#containsAny", () => {
    it("should return false if array is null and candidates is [1,2]", () => {
      const array = null;
      const candidates = [1, 2];
      const result = ArrayUtils.containsAny(array, candidates);
      expect(false).to.be.eq(result);
    });
    it("should return false if array is undefined and candidates is [1,2]", () => {
      const array = undefined;
      const candidates = [1, 2];
      const result = ArrayUtils.containsAny(array, candidates);
      expect(false).to.be.eq(result);
    });
    it("should return false if array is [1,3,5] and candidates is [1,2]", () => {
      const array = [1, 3, 5];
      const candidates = [1, 2];
      const result = ArrayUtils.containsAny(array, candidates);
      expect(true).to.be.eq(result);
    });
    it("should return false if array is [1,3,5] and candidates is [2,4,6]", () => {
      const array = [1, 3, 5];
      const candidates = [2, 4, 6];
      const result = ArrayUtils.containsAny(array, candidates);
      expect(false).to.be.eq(result);
    });
    it("should return false if array is [1,3,5] and candidates is null", () => {
      const array = [1, 3, 5];
      const candidates = null;
      const result = ArrayUtils.containsAny(array, candidates);
      expect(false).to.be.eq(result);
    });
    it("should return false if array is [1,3,5] and candidates is undefined", () => {
      const array = [1, 3, 5];
      const candidates = undefined;
      const result = ArrayUtils.containsAny(array, candidates);
      expect(false).to.be.eq(result);
    });
  });
});
