import { NumberUtils } from "./number.utils";
import { ObjectUtils } from "./object.utils";

export class ArrayUtils {
  /**
   * check whether current array is empty or null/undefined.
   * @param array
   * @returns  true if array is empty or null/undefined; otherwise, false.
   * @throws if input parameter is not array type or null/undefined
   * @example ArrayUtils.isEmpty([]) = true;
   * @example ArrayUtils.isEmpty(null) = true;
   * @example ArrayUtils.isEmpty(undefined) = true;
   * @example ArrayUtils.isEmtpy([1]) = false;
   * @example ArrayUtils.isEmtpy("string") throw error;
   * @example ArrayUtils.isEmtpy(123) throw error;
   */
  public static isEmpty<T>(array: T[] | undefined | null): boolean {
    if (ObjectUtils.isNullOrUndefined(array)) {
      return true;
    }
    if (!ObjectUtils.isArray(array)) {
      throw new Error("input parameter is not a array or null/undefined");
    }

    return array.length === 0;
  }

  /**
   * check whether current array is not empty or null/undefined.
   * @param array
   * @returns  false if array is empty or null/undefined; otherwise, true.
   * @throws if input parameter is not array type or null/undefined
   * @example ArrayUtils.isNotEmpty([]) = false;
   * @example ArrayUtils.isNotEmpty(null) = false;
   * @example ArrayUtils.isNotEmpty(undefined) = false;
   * @example ArrayUtils.isNotEmpty([1]) = true;
   * @example ArrayUtils.isNotEmpty("string") throw error;
   * @example ArrayUtils.isNotEmpty(123) throw error;
   */
  public static isNotEmpty<T>(array: T[] | undefined | null): boolean {
    return !this.isEmpty(array);
  }

  /**
   * Determines whether an element is in the array.
   * @param array
   * @param item
   * @returns true if item is in the array; otherwise, false.
   * @example ArrayUtils.contains(null, 1) = false
   * @example ArrayUtils.contains(undefined, 1) = false
   * @example ArrayUtils.contains([], 1) = false
   * @example ArrayUtils.contains([1,2,3], 1) = true
   * @example ArrayUtils.contains([1,2,3], 5) = false
   * @example ArrayUtils.contains([1,2,3], null) = false
   * @example ArrayUtils.contains([1,2,3], undefined) = false
   */
  public static contains<T>(array: T[], item: T): boolean {
    if (this.isEmpty(array) || ObjectUtils.isNullOrUndefined(item)) {
      return false;
    }
    return array.indexOf(item) !== -1;
  }

  /**
   * Determines whether any of candidates is in the array.
   * @param array
   * @param candidates
   * @returns true if item is in the array; otherwise, false.
   * @example ArrayUtils.containsAny(null, [1, 2]) = false
   * @example ArrayUtils.containsAny(undefined, [1, 2]) = false
   * @example ArrayUtils.containsAny([1, 3, 5], [1, 2]) = true
   * @example ArrayUtils.containsAny([1, 3, 5], [2, 4, 6]) = false
   * @example ArrayUtils.containsAny([1, 3, 5], null) = false
   * @example ArrayUtils.containsAny([1, 3, 5], undefined) = false
   */
  public static containsAny<T>(array: T[], candidates: T[]): boolean {
    if (this.isEmpty(array) || this.isEmpty(candidates)) {
      return false;
    }

    for (const candidate of candidates) {
      if (array.indexOf(candidate) !== -1) {
        return true;
      }
    }
    return false;
  }

  /**
   * Determines whether all of candidates is in the array.
   * @param array
   * @param candidates
   * @returns true if item is in the array; otherwise, false.
   * @example ArrayUtils.containsAll(null, [1, 2]) = false
   * @example ArrayUtils.containsAll(undefined, [1, 2]) = false
   * @example ArrayUtils.containsAll([1, 3, 5], [1, 2]) = false
   * @example ArrayUtils.containsAll([1, 3, 5], [1, 3]) = true
   **/
  public static containsAll<T>(array: T[], candidates: T[]): boolean {
    if (this.isEmpty(array) || this.isEmpty(candidates)) {
      return false;
    }

    for (const candidate of candidates) {
      if (!this.contains(array, candidate)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Inserts an element into the array at the specified index.
   * @param array
   * @param index The zero-based index at which item should be inserted.
   * @param item The object to insert. The value can be null for reference types.
   * @returns true if insert successfully, otherwise false.
   * @example ArrayUtils.insert([1, 3], 1, 2) ==> [1, 2, 3]
   * @example ArrayUtils.insert([1, 2], 100, 4) = false // greater than array.length.
   */
  public static insert<T>(array: T[], index: number, item: T): boolean {
    if (
      !ObjectUtils.isArray(array) ||
      !NumberUtils.isSafeInteger(index) ||
      index > array.length
    ) {
      return false;
    }
    const oldCount = array.length;
    array.splice(index, 0, item);
    return oldCount === array.length - 1;
  }

  /**
   * Removes the first occurrence of a specific object from the array.
   * @param array
   * @param item
   * @returns true if item is successfully removed; otherwise, false.
   * @example  ArrayUtils.remove([1, 2, 3], 2) = true
   * @example  ArrayUtils.remove([1, 2, 3], 5) = false
   */
  public static remove<T>(array: T[], item: T): boolean {
    if (!ObjectUtils.isArray(array)) {
      return false;
    }
    const index = array.indexOf(item);
    if (index < 0) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  /**
   * Find the max number value from array.
   * @param array
   * @returns the max value of the number array.
   * @example  ArrayUtils.max([1,5,3,2,4]) = 5
   */
  public static max(array: number[]): number {
    return Math.max.apply(null, array);
  }

  /**
   * Find the min number value from array.
   * @param array
   * @returns the max value of the number array.
   * @example  ArrayUtils.min([1,5,3,2,4]) = 1
   */
  public static min(array: number[]): number {
    return Math.min.apply(null, array);
  }

  public static take<T>(array: T[], n?: number | undefined | null): T[] {
    const length = array.length;
    let takeN;
    if (ObjectUtils.isNullOrUndefined(n) || isNaN(n)) {
      takeN = 1;
    } else if (n <= 0) {
      takeN = 0;
    } else if (n < length) {
      takeN = n;
    } else {
      takeN = length;
    }
    return array.slice(0, takeN);
  }

  /**
   * Creates a slice of array with n items taken from the end.
   * @param array
   * @returns Array - The slice of the array.
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5]) = [5]
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], null) = [5]
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], NaN) = [5]
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], 3) = [3, 4, 5]
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], 0) = []
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], -2) = []
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], 10) = [1, 2, 3, 4, 5]
   * @example  ArrayUtils.takeRight([1, 2, 3, 4, 5], Number.MAX_VALUE) = [1, 2, 3, 4, 5]
   */
  public static takeRight<T>(array: T[], n?: number | undefined | null): T[] {
    const length = array.length;
    let useStartIndex: number;
    if (ObjectUtils.isNullOrUndefined(n) || isNaN(n)) {
      // default value is 1
      useStartIndex = length - 1;
    } else if (n < 0) {
      useStartIndex = length;
    } else if (n < length) {
      useStartIndex = length - n;
    } else {
      useStartIndex = 0;
    }
    return array.slice(useStartIndex, length);
  }
}
