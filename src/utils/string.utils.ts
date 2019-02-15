import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class StringUtils {
  public static readonly EMPTY: string = "";
  public static readonly INDEX_NOT_FOUND: number = -1;

  /**
   * check current string is empty.
   * @param str
   * @example StringUtils.isEmpty(null)      = true
   * @example StringUtils.isEmpty(undefined) = true
   * @example StringUtils.isEmpty("")        = true
   * @example StringUtils.isEmpty(" ")       = false
   * @example StringUtils.isEmpty("bob")     = false
   * @example StringUtils.isEmpty("  bob  ") = false
   */
  public static isEmpty(str: string | undefined | null): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.length === 0;
  }

  /**
   * check current string is not empty.
   * @param str
   * @example StringUtils.isNotEmpty(null)      = false
   * @example StringUtils.isNotEmpty(undefined) = false
   * @example StringUtils.isNotEmpty("")        = false
   * @example StringUtils.isNotEmpty(" ")       = true
   * @example StringUtils.isNotEmpty("bob")     = true
   * @example StringUtils.isNotEmpty("  bob  ") = true
   */
  public static isNotEmpty(str: string | undefined | null): boolean {
    return !this.isEmpty(str);
  }

  /**
   * check current string is blank.
   * @param str
   * @example StringUtils.isBlank(null)      = true
   * @example StringUtils.isBlank(undefined) = true
   * @example StringUtils.isBlank("")        = true
   * @example StringUtils.isBlank(" ")       = true
   * @example StringUtils.isBlank("bob")     = false
   * @example StringUtils.isBlank("  bob  ") = false
   */
  public static isBlank(str: string | undefined | null): boolean {
    return ObjectUtils.isNullOrUndefined(str) || str.trim() === this.EMPTY;
  }

  /**
   * check current string is not blank.
   * @param str
   * @example StringUtils.isNotBlank(null)      = false
   * @example StringUtils.isNotBlank(undefined) = false
   * @example StringUtils.isNotBlank("")        = false
   * @example StringUtils.isNotBlank(" ")       = false
   * @example StringUtils.isNotBlank("bob")     = true
   * @example StringUtils.isNotBlank("  bob  ") = true
   */
  public static isNotBlank(str: string | undefined | null): boolean {
    return !this.isBlank(str);
  }

  /**
   * Removes all leading and trailing white-space characters from the current string.
   * @param str
   */
  public static trim(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return str;
    } else {
      return str.replace("\b", this.EMPTY).trim();
    }
  }

  /**
   * Removes all leading and trailing white-space characters from the current string to null.
   * @param str
   */
  public static trimToNull(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return null;
    }
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  /**
   * Removes all leading and trailing white-space characters from the current string to "".
   * @param str
   */
  public static trimToEmpty(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return this.EMPTY;
    }
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? this.EMPTY : tmp;
  }

  /**
   * Strips any of a set of characters from the start and end of a String.
   * @param str
   * @param stripChars
   */
  public static strip(str: string, stripChars?: string): string {
    const tmp = this.stripStart(str, stripChars);
    return this.stripEnd(tmp, stripChars);
  }

  /**
   * Strips whitespace from the start and end of a String returning null if the String is empty ("") after the strip.
   * @param str
   */
  public static stripToNull(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return null;
    }
    const tmp = this.strip(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  /**
   * Strips whitespace from the start and end of a String returning an empty String if null input.
   * @param str
   */
  public static stripToEmpty(str: string): string {
    if (ObjectUtils.isNullOrUndefined(str)) {
      return this.EMPTY;
    }
    const tmp = this.strip(str);
    return this.isBlank(tmp) ? this.EMPTY : tmp;
  }

  /**
   * Strips any of a set of characters from the start of a String.
   * @param str
   * @param stripChars
   * @example StringUtils.stripStart(null, *)          = null
   * @example StringUtils.stripStart("", *)            = ""
   * @example StringUtils.stripStart("abc", "")        = "abc"
   * @example StringUtils.stripStart("abc", null)      = "abc"
   * @example StringUtils.stripStart("  abc", null)    = "abc"
   * @example StringUtils.stripStart("abc  ", null)    = "abc  "
   * @example StringUtils.stripStart(" abc ", null)    = "abc "
   * @example StringUtils.stripStart("yxabc  ", "xyz") = "abc  "
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
   * Strips any of a set of characters from the end of a String.
   * @param str
   * @param stripChars
   * @example StringUtils.stripEnd(null, *)          = null
   * @example StringUtils.stripEnd("", *)            = ""
   * @example StringUtils.stripEnd("abc", "")        = "abc"
   * @example StringUtils.stripEnd("abc", null)      = "abc"
   * @example StringUtils.stripEnd("  abc", null)    = "  abc"
   * @example StringUtils.stripEnd("abc  ", null)    = "abc"
   * @example StringUtils.stripEnd(" abc ", null)    = " abc"
   * @example StringUtils.stripEnd("  abcyx", "xyz") = "  abc"
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
   * Compares two CharSequences, returning true if they represent equal sequences of characters.
   * @param str1
   * @param str2
   * @example StringUtils.equal(null, null)              = true
   * @example StringUtils.equal(undefined, undefined)      = true
   * @example StringUtils.equal(undefined, null)          = false
   * @example StringUtils.equal(null, undefined)          = false
   * @example StringUtils.equal(null, "abc")             = false
   * @example StringUtils.equal("abc", null)             = false
   * @example StringUtils.equal("abc", undefined)         = false
   * @example StringUtils.equal(undefined, "abc")         = false
   * @example StringUtils.equal("abc", "def")            = false
   * @example StringUtils.equal("abc", "abc")            = true
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
   * Compares two CharSequences, returning true if they represent equal sequences of characters, ignoring case.
   * @param str1
   * @param str2
   * @example StringUtils.equal(null, null)              = true
   * @example StringUtils.equal(undefined, undefined)      = true
   * @example StringUtils.equal(undefined, null)          = false
   * @example StringUtils.equal(null, undefined)          = false
   * @example StringUtils.equal(null, "abc")             = false
   * @example StringUtils.equal("abc", null)             = false
   * @example StringUtils.equal("abc", undefined)         = false
   * @example StringUtils.equal(undefined, "abc")         = false
   * @example StringUtils.equal("abc", "def")            = false
   * @example StringUtils.equal("abc", "abc")            = true
   * @example StringUtils.equal("abc", "AbC")            = true
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
   * Finds the first index within a CharSequence, handling null.
   * @param str
   * @param searchStr
   * @param startPos
   * @example StringUtils.indexOf(null, *)         = -1
   * @example StringUtils.indexOf(undefined, *)         = -1
   * @example StringUtils.indexOf("", *)           = -1
   * @example StringUtils.indexOf("aabaabaa", 'a') = 0
   * @example StringUtils.indexOf("aabaabaa", 'b') = 2
   * @example StringUtils.indexOf("aabaabaa", 'b', 3) = 5
   * @example StringUtils.indexOf("aabaabaa", '') = 0
   */
  public static indexOf(
    str: string,
    searchStr: string,
    startPos?: number
  ): number {
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
   * Returns the index within seq of the first occurrence of the specified character, starting the search at the specified index.
   * @param str
   * @param searchStr
   * @param position
   * @example StringUtils.lastIndexOf("aFkyk", "k")          =4
   * @example StringUtils.lastIndexOf("a Fkyk", " ");        =1
   * @example StringUtils.lastIndexOf("aabaabaa", "b");      =5
   * @example StringUtils.lastIndexOf("aabaabaa", "b", 4);   =2
   */
  public static lastIndexOf(
    str: string,
    searchStr: string,
    position?: number
  ): number {
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

  /**
   * Checks if CharSequence contains a search character, handling null.
   * @param str
   * @param searchStr
   */
  public static contains(str: string, searchStr: string): boolean {
    if (ObjectUtils.isString(str) && ObjectUtils.isString(searchStr)) {
      return str.indexOf(searchStr) >= 0;
    } else {
      return false;
    }
  }

  /**
   * Checks if CharSequence contains a search CharSequence irrespective of case, handling null.
   * @param str
   * @param searchStr
   */
  public static containsIgnoreCase(str: string, searchStr: string): boolean {
    if (ObjectUtils.isString(str) && ObjectUtils.isString(searchStr)) {
      return (
        str.toLocaleLowerCase().indexOf(searchStr.toLocaleLowerCase()) >= 0
      );
    } else {
      return false;
    }
  }

  /**
   * Gets a substring from the specified String avoiding exceptions.
   * @param str
   * @param start
   * @param end
   */
  public static subString(str: string, start: number, end?: number): string {
    if (
      !ObjectUtils.isString(str) ||
      !NumberUtils.isSafeInteger(start) ||
      (!ObjectUtils.isUndefinend(end) && !NumberUtils.isSafeInteger(end))
    ) {
      return null;
    }

    if (str.length === 0) {
      return str;
    }

    if (ObjectUtils.isUndefinend(end)) {
      return str.substring(start);
    } else {
      return str.substring(start, end);
    }
  }

  /**
   * Determines whether the beginning of this string instance matches the specified string.
   * @param str
   * @param prefix
   */
  public static startWith(str: string, prefix: string): boolean {
    if (!ObjectUtils.isString(str) || !ObjectUtils.isString(prefix)) {
      return false;
    }
    // return str.indexOf(prefix) === 0;
    // according to https://leonax.net/p/5806/use-string-startswith-and-endswith-in-javascript/
    return str.slice(0, prefix.length) === prefix;
  }

  /**
   * Determines whether the beginning of this string instance matches the specified string irrespective of case.
   * @param str
   * @param prefix
   */
  public static startWithIgnoreCase(str: string, prefix: string): boolean {
    if (!ObjectUtils.isString(str) || !ObjectUtils.isString(prefix)) {
      return false;
    }
    const useStr = str.toLocaleLowerCase();
    const usePrefix = prefix.toLocaleLowerCase();
    return useStr.slice(0, usePrefix.length) === usePrefix;
  }

  /**
   *  Determines whether the end of this string instance matches the specified string.
   * @param str
   * @param suffix
   */
  public static endWith(str: string, suffix: string): boolean {
    if (!ObjectUtils.isString(str) || !ObjectUtils.isString(suffix)) {
      return false;
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  /**
   * Determines whether the end of this string instance matches the specified string irrespective of case.
   * @param str
   * @param suffix
   */
  public static endWithIgnoreCase(str: string, suffix: string): boolean {
    if (!ObjectUtils.isString(str) || !ObjectUtils.isString(suffix)) {
      return false;
    }
    const useStr = str.toLocaleLowerCase();
    const useSuffix = suffix.toLocaleLowerCase();
    return useStr.indexOf(useSuffix, useStr.length - useSuffix.length) !== -1;
  }

  /**
   * check if current char is whitespace
   * @param ch
   */
  public static isWhitespace(ch: string): boolean {
    return " \f\n\r\t\v\u00A0\u2028\u2029".indexOf(ch) > -1;
  }

  /**
   * Initializes a new string of the guid structure.
   */
  public static newGuid(): string {
    return (
      this.S4() +
      this.S4() +
      "-" +
      this.S4() +
      "-" +
      this.S4() +
      "-" +
      this.S4() +
      "-" +
      this.S4() +
      this.S4() +
      this.S4()
    );
  }

  private static S4() {
    // tslint:disable-next-line:no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  /**
   * JavaScript convert string to snake_case.
   * @example console.log(toSnakeCase('string')); // => string
   * @example console.log(toSnakeCase('camelCase')); // => camel_case
   * @example console.log(toSnakeCase('param-case')); // => param_case
   * @example console.log(toSnakeCase('PascalCase')); // => pascal_case
   * @example console.log(toSnakeCase('UPPER_CASE')); // => upper_case
   * @example console.log(toSnakeCase('snake_case')); // => snake_case
   * @example console.log(toSnakeCase('sentence case')); // => sentence_case
   * @example console.log(toSnakeCase('Title Case')); // => title_case
   * @example console.log(toSnakeCase('dot.case')); // => // dot_case
   * @example
   * @example console.log(toSnakeCase('')); // => ''
   * @example console.log(toSnakeCase(null)); // => ''
   * @example console.log(toSnakeCase(undefined)); // => ''
   * @example
   * @example console.log(toSnakeCase('Abc ___ 123 ___ xYz')); // => abc_123_x_yz
   * @example console.log(toSnakeCase('123__abc  ... ?// {#} def 12')); // => 123_abc_def_12
   * @example console.log(toSnakeCase('	tab space ??? ________')); // => tab_space
   * @example console.log(toSnakeCase('___?||123  abc|| 123..123')); // => 123_abc_123_123
   * @example console.log(toSnakeCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc_xy_z_g123h
   * @example console.log(toSnakeCase(' ^&* #DEFine x: 15 + ==')); // => define_x_15
   * @example console.log(toSnakeCase('123456789')); // => 123456789
   */
  public static snakeCase(str: string): string {
    if (this.isBlank(str)) {
      return "";
    }

    return String(str)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
      .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
      .replace(/[^A-Za-z0-9]+|_+/g, "_")
      .toLowerCase();
  }
}
