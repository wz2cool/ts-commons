export class ObjectUtils {
  /**
   * check whether value is null.
   * @param value
   * @example ObjectUtils.isNull(null)        = true
   * @example ObjectUtils.isNull(undefinend)  = false
   * @example ObjectUtils.isNull({})          = false
   * @example ObjectUtils.isNull(1)           = false
   */
  public static isNull(value: any): boolean {
    return value === null;
  }

  /**
   * check whether value is undefined.
   * @param value
   * @example ObjectUtils.isUndefinend(undefinend)  = true
   * @example ObjectUtils.isUndefinend(null)        = false
   * @example ObjectUtils.isUndefinend({})          = false
   * @example ObjectUtils.isUndefinend(1)           = false
   */
  public static isUndefinend(value: any): boolean {
    return typeof value === "undefined";
  }

  /**
   * check whether value is null or undefined.
   * @param value
   * @example ObjectUtils.isNullOrUndefined(undefinend)  = true
   * @example ObjectUtils.isNullOrUndefined(null)        = true
   * @example ObjectUtils.isNullOrUndefined({})          = false
   * @example ObjectUtils.isNullOrUndefined(1)           = false
   */
  public static isNullOrUndefined(value: any): boolean {
    return this.isNull(value) || this.isUndefinend(value);
  }

  /**
   * check whether value is array.
   * @param value
   * @example ObjectUtils.isArray([])           = true
   * @example ObjectUtils.isArray(null)         = false
   * @example ObjectUtils.isArray(undefinend)   = false
   * @example ObjectUtils.isArray(1)            = false
   */
  public static isArray(value: any): boolean {
    return value instanceof Array;
  }

  /**
   * check whether value is date.
   * @param value
   * @example ObjectUtils.isDate(new Date())   = true
   * @example ObjectUtils.isDate(null)         = false
   * @example ObjectUtils.isDate(undefinend)   = false
   * @example ObjectUtils.isDate(1)            = false
   */
  public static isDate(value: any): boolean {
    return value instanceof Date;
  }

  /**
   * check whether value is string.
   * @param value
   * @example ObjectUtils.isString("test")       = true
   * @example ObjectUtils.isString(null)         = false
   * @example ObjectUtils.isString(undefinend)   = false
   * @example ObjectUtils.isString(1)            = false
   */
  public static isString(value: any): boolean {
    return typeof value === "string";
  }

  /**
   * check whether value is number.
   * @param value
   * @example ObjectUtils.isNumber(1)            = true
   * @example ObjectUtils.isNumber(null)         = false
   * @example ObjectUtils.isNumber(undefinend)   = false
   * @example ObjectUtils.isNumber("test")       = false
   */
  public static isNumber(value: any): boolean {
    return typeof value === "number";
  }

  /**
   * check whether value is boolean.
   * @param value
   * @example ObjectUtils.isBoolean(false)        = true
   * @example ObjectUtils.isBoolean(null)         = false
   * @example ObjectUtils.isBoolean(undefinend)   = false
   * @example ObjectUtils.isBoolean("test")       = false
   */
  public static isBoolean(value: any): boolean {
    return typeof value === "boolean";
  }

  /**
   * Returns a string representation of an object even if value is null or undefined.
   * @param value
   * @param defaultValue
   * @example ObjectUtils.toSafeString(null)        = ""
   * @example ObjectUtils.toSafeString(undefined)   = ""
   * @example ObjectUtils.toSafeString("test")      = "test"
   */
  public static toSafeString(value: any, defaultValue: string = ""): string {
    if (this.isNullOrUndefined(value)) {
      return defaultValue;
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
  public static createObject<T>(type: new () => T): T {
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
    const a = "";
    return key.toString();
  }

  public static values(obj: any): any[] {
    if (this.isNullOrUndefined(obj)) {
      return [];
    }

    const values = Object.keys(obj).map(key => obj[key]);
    return values;
  }

  /**
   * if value is null or undefined return default value, else return value.
   * @param value
   * @param defaultValue
   * @example ObjectUtils.getOrDefault<number | undefined>(1, 0)            = "1"
   * @example ObjectUtils.getOrDefault<number | undefined>(undefined, 0)    = "0"
   * @example ObjectUtils.getOrDefault<number | null>(1, 0)                 = "1"
   * @example ObjectUtils.getOrDefault<number | null>(null, 0)              = "0"
   */
  public static getOrDefault<T>(
    value: T,
    defaultValue: NonNullable<T>
  ): NonNullable<T> {
    if (ObjectUtils.isNullOrUndefined(value)) {
      return defaultValue;
    } else {
      return value as NonNullable<T>;
    }
  }
}
