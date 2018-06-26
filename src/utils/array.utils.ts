import { ObjectUtils } from "./object.utils";
import { NumberUtils } from ".";

// from org.springframework.util.CollectionUtils
export class ArrayUtils {
  public static isEmpty<T>(array: T[]): boolean {
    return !ObjectUtils.isArray(array) || array.length === 0;
  }

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

  public static insert<T>(array: T[], index: number, obj: T): boolean {
    if (
      !ObjectUtils.isArray(array) ||
      !NumberUtils.isSafeInteger(index) ||
      index > array.length
    ) {
      return false;
    }
    const oldCount = array.length;
    array.splice(index, 0, obj);
    return oldCount === array.length - 1;
  }
}
