export class ObjectUtils {
  private constructor() {
    // hide constructor
  }

  public static isNullOrUndefined(value: any): boolean {
    return value === null || typeof value === "undefined";
  }

  public static isArray(value: any): boolean {
    const result = value instanceof Array;
    return result;
  }
}
