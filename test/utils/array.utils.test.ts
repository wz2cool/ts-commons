import { ArrayUtils } from "../../src/index";
import { expect } from "chai";

describe(".arrayUtils", () => {
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
    it("should return false if value is 'string' ", () => {
      const value: any = "string";
      const result = ArrayUtils.isEmpty(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is 123 ", () => {
      const value: any = 123;
      const result = ArrayUtils.isEmpty(value);
      expect(true).to.be.eq(result);
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

  describe("#insert", () => {
    it("should return true if insert md value success", () => {
      const array = [1, 3];
      const obj = 2;
      const result = ArrayUtils.insert(array, 1, obj);
      expect(true).to.be.eq(result);
      expect(3).to.be.eq(array.length);
    });

    it("should return true if insert last value success", () => {
      const array = [1, 2];
      const obj = 3;
      const result = ArrayUtils.insert(array, 2, obj);
      expect(true).to.be.eq(result);
      expect(3).to.be.eq(array.length);
    });
    it("should return true if array is []", () => {
      const array = [];
      const obj = 4;
      const result = ArrayUtils.insert(array, 0, obj);
      expect(true).to.be.eq(result);
      expect(1).to.be.eq(array.length);
    });
    it("should return false if insert last value greater than source.length", () => {
      const array = [1, 2];
      const obj = 4;
      const result = ArrayUtils.insert(array, 3, obj);
      expect(false).to.be.eq(result);
      expect(2).to.be.eq(array.length);
    });
    it("should return false if array is null", () => {
      const array = null;
      const obj = 4;
      const result = ArrayUtils.insert(array, 1, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if array is undefined", () => {
      const array = undefined;
      const obj = 4;
      const result = ArrayUtils.insert(array, 1, obj);
      expect(false).to.be.eq(result);
    });
    it("should return false if index is 1.2", () => {
      const array = [1, 2];
      const obj = 4;
      const result = ArrayUtils.insert(array, 1.2, obj);
      expect(false).to.be.eq(result);
    });
  });

  describe("#remove", () => {
    it("should return true if obj in array", () => {
      const array = [1, 2, 3];
      const obj = 2;
      const result = ArrayUtils.remove(array, obj);
      expect(true).to.be.eq(result);
      expect([1, 3].toString()).to.be.eq(array.toString());
    });

    it("should return false if obj not in array", () => {
      const array = [1, 2, 3];
      const obj = 5;
      const result = ArrayUtils.remove(array, obj);
      expect(false).to.be.eq(result);
      expect([1, 2, 3].toString()).to.be.eq(array.toString());
    });

    it("should return false if obj not in array", () => {
      const array = [1, 2, 3];
      const obj: any = "aaaa";
      const result = ArrayUtils.remove(array, obj);
      expect(false).to.be.eq(result);
      expect([1, 2, 3].toString()).to.be.eq(array.toString());
    });

    it("should return false if array is not array type", () => {
      const array: any = "bbb";
      const obj: any = "aaaa";
      const result = ArrayUtils.remove(array, obj);
      expect(false).to.be.eq(result);
    });
  });
});
