export class ObjectUtils {
  /**
   * check whether value is null.
   * @param value
   */
  public static isNull(value: any): boolean {
    return value === null;
  }

  /**
   * check whether value is undefined.
   * @param value
   */
  public static isUndefinend(value: any): boolean {
    return typeof value === "undefined";
  }

  /**
   * check whether value is null or undefined.
   * @param value
   */
  public static isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefinend(value);
  }

  /**
   * check whether value is array.
   * @param value
   */
  public static isArray(value: any): boolean {
    return value instanceof Array;
  }

  /**
   * check whether value is date.
   * @param value
   */
  public static isDate(value: any): boolean {
    return value instanceof Date;
  }

  /**
   * check whether value is string.
   * @param value
   */
  public static isString(value: any): boolean {
    return typeof value === "string";
  }

  /**
   * check whether value is number.
   * @param value
   */
  public static isNumber(value: any): boolean {
    return typeof value === "number";
  }

  /**
   * check whether value is boolean.
   * @param value
   */
  public static isBoolean(value: any): boolean {
    return typeof value === "boolean";
  }

  /**
   * Returns a string representation of an object even if value is null or undefined.
   * @param value
   * @example ObjectUtils.toSafeString(null) = ""
   * @example ObjectUtils.toSafeString(undefined) = ""
   */
  public static toSafeString(value: any): string {
    if (this.isNullOrUndefined(value)) {
      return "";
    } else {
      return value.toString();
    }
  }

  /**
   * get property value of object by key.
   * @param obj
   * @param key
   */
  public static getProperty<T, K extends keyof T>(obj: T, key: K): any {
    return obj[key]; // Inferred type is T[K]
  }

  /**
   * set property to object.
   * @param obj
   * @param key
   * @param value
   */
  public static setProperty<T, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
  ): void {
    obj[key] = value;
  }

  /**
   * create object by type.
   * @param type
   */
  public static createObject<T>(type: { new (): T }): T {
    if (this.isNullOrUndefined(type)) {
      return null;
    }
    return new type();
  }

  /**
   * get name of property.
   * @param key
   */
  public static getPropertyName<T>(key: keyof T): any {
    return key.toString();
  }

  public static values(obj: any): any[] {
    if (this.isNullOrUndefined(obj)) {
      return [];
    }

    const values = Object.keys(obj).map(key => obj[key]);
    return values;
  }
}
