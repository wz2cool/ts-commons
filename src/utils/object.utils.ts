export class ObjectUtils {
  public static isNull(value: any): boolean {
    return value === null;
  }

  public static isUndefinend(value: any): boolean {
    return typeof value === "undefined";
  }

  public static isNullOrUndefined(value: any): boolean {
    return ObjectUtils.isNull(value) || ObjectUtils.isUndefinend(value);
  }

  public static isArray(value: any): boolean {
    const result = value instanceof Array;
    return result;
  }
}
