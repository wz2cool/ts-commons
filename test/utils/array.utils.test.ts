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
      expect(() => ArrayUtils.isEmpty(value)).to.throw(
        // tslint:disable-next-line:trailing-comma
        "input parameter is not a array"
      );
    });
    it("should return false if value is 123 ", () => {
      const value: any = 123;
      expect(() => ArrayUtils.isEmpty(value)).to.throw(
        // tslint:disable-next-line:trailing-comma
        "input parameter is not a array"
      );
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

  describe("#max", () => {
    it("should return 5 if array is [1, 5,3,2,4]", () => {
      const array = [1, 5, 3, 2, 4];
      const result = ArrayUtils.max(array);
      expect(5).to.be.eq(result);
    });
  });

  describe("#min", () => {
    it("should return 5 if array is [1, 5,3,2,4]", () => {
      const array = [1, 5, 3, 2, 4];
      const result = ArrayUtils.min(array);
      expect(1).to.be.eq(result);
    });
  });

  describe("#takeRight", () => {
    it("should return [5] if takeRight([1, 2, 3, 4, 5]);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array);
      expect(1).to.be.eq(result.length);
      expect(5).to.be.eq(result[0]);
    });

    it("should return [5] if takeRight([1, 2, 3, 4, 5], null);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, null);
      expect(1).to.be.eq(result.length);
      expect(5).to.be.eq(result[0]);
    });

    it("should return [5] if takeRight([1, 2, 3, 4, 5], NaN);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, NaN);
      expect(1).to.be.eq(result.length);
      expect(5).to.be.eq(result[0]);
    });

    it("should return [3, 4, 5] if takeRight([1, 2, 3, 4, 5], 3);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, 3);
      expect(3).to.be.eq(result.length);
      expect(3).to.be.eq(result[0]);
    });

    it("should return [] if takeRight([1, 2, 3, 4, 5], 0);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, 0);
      expect(0).to.be.eq(result.length);
    });

    it("should return [] if takeRight([1, 2, 3, 4, 5], -2);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, -2);
      expect(0).to.be.eq(result.length);
    });

    it("should return [1, 2, 3, 4, 5] if takeRight([1, 2, 3, 4, 5], 10);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, 10);
      expect(5).to.be.eq(result.length);
      expect(1).to.be.eq(result[0]);
      expect(5).to.be.eq(result[4]);
    });

    it("should return [1, 2, 3, 4, 5] if takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE);", () => {
      const array = [1, 2, 3, 4, 5];
      const result = ArrayUtils.takeRight(array, Number.MAX_VALUE);
      expect(5).to.be.eq(result.length);
      expect(1).to.be.eq(result[0]);
      expect(5).to.be.eq(result[4]);
    });
  });

  describe("#take", () => {
    it("should return [1] if take([1, 2, 3]);", () => {
      const array = [1, 2, 3];
      const result = ArrayUtils.take(array);
      expect(1).to.be.eq(result.length);
      expect(1).to.be.eq(result[0]);
    });

    it("should return [1, 2] if take([1, 2, 3], 2);", () => {
      const array = [1, 2, 3];
      const result = ArrayUtils.take(array, 2);
      expect(2).to.be.eq(result.length);
      expect(1).to.be.eq(result[0]);
      expect(2).to.be.eq(result[1]);
    });

    it("should return [1, 2, 3] if take([1, 2, 3], 5);", () => {
      const array = [1, 2, 3];
      const result = ArrayUtils.take(array, 5);
      expect(3).to.be.eq(result.length);
    });

    it("should return [] if take([1, 2, 3], 0);", () => {
      const array = [1, 2, 3];
      const result = ArrayUtils.take(array, 0);
      expect(0).to.be.eq(result.length);
    });
  });
});
