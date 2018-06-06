import { ObjectUtils } from "./object.utils";

export class StringUtils {
  private constructor() {
    // hide constructor
  }

  public static isEmpty(cs: string): boolean {
    return ObjectUtils.isNullOrUndefined(cs) || cs.length === 0;
  }

  public static isNotEmpty(cs: string): boolean {
    return !this.isEmpty(cs);
  }

  public static isBlank(cs: string): boolean {
    return ObjectUtils.isNullOrUndefined(cs) || cs.trim() === "";
  }
}
