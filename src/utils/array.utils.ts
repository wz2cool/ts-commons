import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class ArrayUtils {
  /**
   * check whether current array is empty or null/undefined.
   * @param array
   * @returns  true if array is empty or null/undefined; otherwise, false.
   * @throws if input parameter is not array type or null/undefined
   * @example ArrayUtils.isEmpty([]) = true;
   * @example ArrayUtils.isEmpty(null) = true;
   * @example ArrayUtils.isEmpty(underfind) = true;
   * @example ArrayUtils.isEmtpy([1]) = false;
   * @example ArrayUtils.isEmtpy("string") throw error;
   * @example ArrayUtils.isEmtpy(123) throw error;
   */
  public static isEmpty<T>(array: T[]): boolean {
    if (ObjectUtils.isNullOrUndefined(array)) {
      return true;
    }
    if (!ObjectUtils.isArray(array)) {
      throw new Error("input parameter is not a array");
    }
    return array.length === 0;
  }

  /**
   * Determines whether an element is in the array.
   * @param array
   * @param item
   */
  public static contains<T>(array: T[], item: T): boolean {
    if (this.isEmpty(array) || ObjectUtils.isNullOrUndefined(item)) {
      return false;
    }
    return array.indexOf(item) !== -1;
  }

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
}
