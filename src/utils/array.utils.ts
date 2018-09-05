import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class ArrayUtils {
  /**
   * check whether current array is empty.
   * eg: ArrayUtils.isEmpty([]) = true;
   * eg: ArrayUtils.isEmpty(null) = true;
   * eg: ArrayUtils.isEmpty(underfind) = true;
   * eg: ArrayUtils.isEmtpy([1]) = fase;
   * eg: ArrayUtils.isEmtpy("string") = fase;
   * eg: ArrayUtils.isEmtpy(123) = fase;
   * @param array
   */
  public static isEmpty<T>(array: T[]): boolean {
    if (ObjectUtils.isNullOrUndefined(array)) {
      return true;
    }
    if (!ObjectUtils.isArray(array)) {
      return false;
    }
    return array.length === 0;
  }

  /**
   * Determines whether an element is in the array.
   * @param array
   * @param obj
   */
  public static contains<T>(array: T[], obj: T): boolean {
    if (this.isEmpty(array) || ObjectUtils.isNullOrUndefined(obj)) {
      return false;
    }
    return array.indexOf(obj) !== -1;
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
}
