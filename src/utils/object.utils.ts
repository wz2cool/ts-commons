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

  public static getClassName<T>(o: T | { new (): T }): string {
    if (this.isNullOrUndefined(o)) {
      return "";
    }

    const testObj = typeof o === "function" ? new o() : o;
    return (testObj.constructor as any).name;
  }

  public static createObject<T>(type: { new (): T }): T {
    if (this.isNullOrUndefined(type)) {
      return null;
    }
    return new type();
  }

  // getPropertyName<Student>((student) => student.name) return name
  // getPropertyName<Student>((student) => student.age) return age
  public static getPropertyName<T>(fn: (o: T) => any): string {
    if (this.isNullOrUndefined(fn)) {
      return "";
    }

    // ES5: function (name) { return student.name; }
    // ES6: (student) => student.name;
    const expression = fn.toString();
    const returnIndex = expression.indexOf("return");
    const regexp =
      returnIndex > -1
        ? new RegExp(`^.*return\\s+\\w+\.(\\w+)\\s*;\\s*\\}\\s*$`)
        : RegExp(`^\\s*\\(?\\w+\\)?\\s*=>\\s*\\w+\\.(\\w+)\\s*$`);

    const match = regexp.exec(expression);
    return !this.isNullOrUndefined(match) && match.length === 2 ? match[1] : "";
  }
}
