import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class StringUtils {
  public static readonly EMPTY: string = "";
  public static readonly INDEX_NOT_FOUND: number = -1;

  /**
   * StringUtils.isEmpty(null)      = true
   * StringUtils.isEmpty(undefined) = true
   * StringUtils.isEmpty("")        = true
   * StringUtils.isEmpty(" ")       = false
   * StringUtils.isEmpty("bob")     = false
   * StringUtils.isEmpty("  bob  ") = false
   */
  public static isEmpty(str: string): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.length === 0;
  }

  public static isNotEmpty(str: string): boolean {
    return !this.isEmpty(str);
  }

  public static isBlank(str: string): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.trim() === this.EMPTY;
  }

  public static isNotBlank(str: string): boolean {
    return !this.isBlank(str);
  }

  public static trim(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return str;
    } else {
      return str.replace("\b", this.EMPTY).trim();
    }
  }

  public static trimToNull(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return null;
    }
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  public static trimToEmpty(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return this.EMPTY;
    }
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? this.EMPTY : tmp;
  }

  public static strip(str: string, stripChars?: string): string {
    const tmp = this.stripStart(str, stripChars);
    return this.stripEnd(tmp, stripChars);
  }

  public static stripToNull(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return null;
    }
    const tmp = this.strip(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  public static stripToEmpty(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return this.EMPTY;
    }
    const tmp = this.strip(str);
    return this.isBlank(tmp) ? this.EMPTY : tmp;
  }

  /**
   * StringUtils.stripStart(null, *)          = null
   * StringUtils.stripStart("", *)            = ""
   * StringUtils.stripStart("abc", "")        = "abc"
   * StringUtils.stripStart("abc", null)      = "abc"
   * StringUtils.stripStart("  abc", null)    = "abc"
   * StringUtils.stripStart("abc  ", null)    = "abc  "
   * StringUtils.stripStart(" abc ", null)    = "abc "
   * StringUtils.stripStart("yxabc  ", "xyz") = "abc  "
   */
  public static stripStart(str: string, stripChars: string): string {
    if (ObjectUtils.isNullOrUndefined(str) || str.length === 0) {
      return str;
    }
    const strLen = str.length;
    let start = 0;
    if (ObjectUtils.isNullOrUndefined(stripChars)) {
      while (start !== strLen && this.isWhitespace(str.charAt(start))) {
        start++;
      }
    } else if (stripChars.length === 0) {
      return str;
    } else {
      while (start !== strLen && stripChars.indexOf(str.charAt(start)) !== -1) {
        start++;
      }
    }
    return str.substring(start);
  }

  /**
   * StringUtils.stripEnd(null, *)          = null
   * StringUtils.stripEnd("", *)            = ""
   * StringUtils.stripEnd("abc", "")        = "abc"
   * StringUtils.stripEnd("abc", null)      = "abc"
   * StringUtils.stripEnd("  abc", null)    = "  abc"
   * StringUtils.stripEnd("abc  ", null)    = "abc"
   * StringUtils.stripEnd(" abc ", null)    = " abc"
   * StringUtils.stripEnd("  abcyx", "xyz") = "  abc"
   */
  public static stripEnd(str: string, stripChars: string): string {
    if (ObjectUtils.isNullOrUndefined(str) || str.length === 0) {
      return str;
    }
    let end = str.length;
    if (stripChars == null) {
      while (end !== 0 && this.isWhitespace(str.charAt(end - 1))) {
        end--;
      }
    } else if (stripChars.length === 0) {
      return str;
    } else {
      while (end !== 0 && stripChars.indexOf(str.charAt(end - 1)) !== -1) {
        end--;
      }
    }
    return str.substring(0, end);
  }

  /**
   * StringUtils.equal(null, null)              = true
   * StringUtils.equal(undefined, undefined)      = true
   * StringUtils.equal(undefined, null)          = false
   * StringUtils.equal(null, undefined)          = false
   * StringUtils.equal(null, "abc")             = false
   * StringUtils.equal("abc", null)             = false
   * StringUtils.equal("abc", undefined)         = false
   * StringUtils.equal(undefined, "abc")         = false
   * StringUtils.equal("abc", "def")            = false
   * StringUtils.equal("abc", "abc")            = true
   */
  public static equals(str1: string, str2: string): boolean {
    if (
      !ObjectUtils.isNullOrUndefined(str1) &&
      !ObjectUtils.isNullOrUndefined(str2)
    ) {
      return str1 === str2;
    }
    if (ObjectUtils.isNull(str1) && ObjectUtils.isNull(str2)) {
      return true;
    }
    if (ObjectUtils.isUndefinend(str1) && ObjectUtils.isUndefinend(str2)) {
      return true;
    }
    return false;
  }

  /**
   * StringUtils.equal(null, null)              = true
   * StringUtils.equal(undefined, undefined)      = true
   * StringUtils.equal(undefined, null)          = false
   * StringUtils.equal(null, undefined)          = false
   * StringUtils.equal(null, "abc")             = false
   * StringUtils.equal("abc", null)             = false
   * StringUtils.equal("abc", undefined)         = false
   * StringUtils.equal(undefined, "abc")         = false
   * StringUtils.equal("abc", "def")            = false
   * StringUtils.equal("abc", "abc")            = true
   * StringUtils.equal("abc", "AbC")            = true
   */
  public static equalsIgnoreCase(str1: string, str2: string): boolean {
    if (
      !ObjectUtils.isNullOrUndefined(str1) &&
      !ObjectUtils.isNullOrUndefined(str2)
    ) {
      return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
    }
    if (ObjectUtils.isNull(str1) && ObjectUtils.isNull(str2)) {
      return true;
    }
    if (ObjectUtils.isUndefinend(str1) && ObjectUtils.isUndefinend(str2)) {
      return true;
    }
    return false;
  }

  /**
   *  StringUtils.indexOf(null, *)         = -1
   *  StringUtils.indexOf(undefined, *)         = -1
   *  StringUtils.indexOf("", *)           = -1
   *  StringUtils.indexOf("aabaabaa", 'a') = 0
   *  StringUtils.indexOf("aabaabaa", 'b') = 2
   *  StringUtils.indexOf("aabaabaa", 'b', 3) = 5
   *  StringUtils.indexOf("aabaabaa", '') = 0
   */
  public static indexOf(str: string, searchStr: string, startPos?: number) {
    if (
      ObjectUtils.isNullOrUndefined(str) ||
      ObjectUtils.isNullOrUndefined(searchStr) ||
      (!ObjectUtils.isUndefinend(startPos) &&
        !NumberUtils.isSafeInteger(startPos))
    ) {
      return this.INDEX_NOT_FOUND;
    }
    const useStartPos = ObjectUtils.isUndefinend(startPos) ? 0 : startPos;
    return str.indexOf(searchStr, useStartPos);
  }

  /**
   * StringUtils.lastIndexOf("aFkyk", "k")          =4
   * StringUtils.lastIndexOf("a Fkyk", " ");        =1
   * StringUtils.lastIndexOf("aabaabaa", "b");      =5
   * StringUtils.lastIndexOf("aabaabaa", "b", 4);   =2
   */
  public static lastIndexOf(
    str: string,
    searchStr: string,
    // tslint:disable-next-line:trailing-comma
    position?: number
  ) {
    if (
      ObjectUtils.isNullOrUndefined(str) ||
      ObjectUtils.isNullOrUndefined(searchStr) ||
      (!ObjectUtils.isUndefinend(position) &&
        !NumberUtils.isSafeInteger(position))
    ) {
      return this.INDEX_NOT_FOUND;
    }
    const usePosition = ObjectUtils.isUndefinend(position)
      ? str.length - 1
      : position;
    return str.lastIndexOf(searchStr, usePosition);
  }

  public static contains(str: string, searchStr: string): boolean {
    if (ObjectUtils.isString(str) && ObjectUtils.isString(searchStr)) {
      return str.indexOf(searchStr) >= 0;
    } else {
      return false;
    }
  }

  public static containsIgnoreCase(str: string, searchStr: string): boolean {
    if (ObjectUtils.isString(str) && ObjectUtils.isString(searchStr)) {
      return (
        str.toLocaleLowerCase().indexOf(searchStr.toLocaleLowerCase()) >= 0
      );
    } else {
      return false;
    }
  }

  public static isWhitespace(ch: string): boolean {
    return " \f\n\r\t\v\u00A0\u2028\u2029".indexOf(ch) > -1;
  }
}
