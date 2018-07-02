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

  // return "" if value is null or undefined.
  // from C# https://docs.microsoft.com/en-us/dotnet/api/microsoft.toolkit.extensions.stringextensions.tosafestring?view=uwp-toolkit-dotnet
  public static toSafeString(value: any): string {
    if (this.isNullOrUndefined(value)) {
      return "";
    } else {
      return value.toString();
    }
  }

  public static getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; // Inferred type is T[K]
  }

  public static setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
  }
}
