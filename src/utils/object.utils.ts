export class ObjectUtils {
  public static isNull(value: any): boolean {
    return value === null;
  }

  public static isUndefinend(value: any): boolean {
    return typeof value === "undefined";
  }

  public static isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefinend(value);
  }

  public static isArray(value: any): boolean {
    return value instanceof Array;
  }

  public static isDate(value: any): boolean {
    return value instanceof Date;
  }

  public static isString(value: any): boolean {
    return typeof value === "string";
  }

  public static isNumber(value: any): boolean {
    return typeof value === "number";
  }

  public static isBoolean(value: any): boolean {
    return typeof value === "boolean";
  }
}
