import { ObjectUtils } from "./object.utils";

export class StringUtils {
  public static isEmpty(str: string): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.length === 0;
  }

  public static isNotEmpty(str: string): boolean {
    return !this.isEmpty(str);
  }

  public static isBlank(str: string): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.trim() === "";
  }

  public static isNotBlank(str: string): boolean {
    return !this.isBlank(str);
  }

  public static trim(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return str;
    } else {
      return str.replace("\b", "").trim();
    }
  }

  public static strip(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return str;
    } else {
      return str.trim();
    }
  }

  public static trimToNull(str: string): string {
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  public static trimToEmpty(str: string): string {
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? "" : tmp;
  }

  public static stripStart(str: string, stripChars: string) {
    if (ObjectUtils.isNullOrUndefined(str) || str.length === 0) {
      return str;
    }
    const strLen = str.length;
    let start = 0;
    if (ObjectUtils.isNullOrUndefined(stripChars)) {
      while (start !== strLen && this.isWhitespace(str.charAt(start))) {
        start++;
      }
    }
    if (this.isEmpty(stripChars)) {
      return str;
    }
    while (start !== strLen && stripChars.indexOf(str.charAt(start)) !== -1) {
      start++;
    }
    return str.substring(start);
  }

  public static isWhitespace(ch: string): boolean {
    return " \f\n\r\t\v\u00A0\u2028\u2029".indexOf(ch) > -1;
  }
}
