import { ObjectUtils } from "./object.utils";

export class StringUtils {
  /**
   * <p>Checks if a String is empty ("") or null or underfined.</p>
   *
   * <pre>
   * StringUtils.isEmpty(null)      = true
   * StringUtils.isEmpty(undefined) = true
   * StringUtils.isEmpty("")        = true
   * StringUtils.isEmpty(" ")       = false
   * StringUtils.isEmpty("bob")     = false
   * StringUtils.isEmpty("  bob  ") = false
   * </pre>
   *
   * @param str  the String to check, may be null or undefined.
   * @return <code>true</code> if the String is empty or null or undefined
   */
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

  public static trimToNull(str: string): string {
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? null : tmp;
  }

  public static trimToEmpty(str: string): string {
    const tmp = this.trim(str);
    return this.isBlank(tmp) ? "" : tmp;
  }

  public static strip(str: string, stripChars?: string): string {
    const tmp = this.stripStart(str, stripChars);
    return this.stripEnd(tmp, stripChars);
  }

  /**
   * <p>Strips any of a set of characters from the start of a String.</p>
   *
   * <p>A <code>null</code> input String returns <code>null</code>.
   * An empty string ("") input returns the empty string.</p>
   *
   * <p>If the stripChars String is <code>null</code>, whitespace is
   * stripped as defined by {@link isWhitespace(char)}.</p>
   *
   * <pre>
   * StringUtils.stripStart(null, *)          = null
   * StringUtils.stripStart("", *)            = ""
   * StringUtils.stripStart("abc", "")        = "abc"
   * StringUtils.stripStart("abc", null)      = "abc"
   * StringUtils.stripStart("  abc", null)    = "abc"
   * StringUtils.stripStart("abc  ", null)    = "abc  "
   * StringUtils.stripStart(" abc ", null)    = "abc "
   * StringUtils.stripStart("yxabc  ", "xyz") = "abc  "
   * </pre>
   *
   * @param str  the String to remove characters from, may be null
   * @param stripChars  the characters to remove, null or undefined treated as whitespace
   * @return the stripped String, <code>null</code> if null String input
   */
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
   * <p>Strips any of a set of characters from the end of a String.</p>
   *
   * <p>A <code>null</code> input String returns <code>null</code>.
   * An empty string ("") input returns the empty string.</p>
   *
   * <p>If the stripChars String is <code>null</code>, whitespace is
   * stripped as defined by {@link Character#isWhitespace(char)}.</p>
   *
   * <pre>
   * StringUtils.stripEnd(null, *)          = null
   * StringUtils.stripEnd("", *)            = ""
   * StringUtils.stripEnd("abc", "")        = "abc"
   * StringUtils.stripEnd("abc", null)      = "abc"
   * StringUtils.stripEnd("  abc", null)    = "  abc"
   * StringUtils.stripEnd("abc  ", null)    = "abc"
   * StringUtils.stripEnd(" abc ", null)    = " abc"
   * StringUtils.stripEnd("  abcyx", "xyz") = "  abc"
   * </pre>
   *
   * @param str  the String to remove characters from, may be null
   * @param stripChars  the characters to remove, null treated as whitespace
   * @return the stripped String, <code>null</code> if null String input
   */
  public static stripEnd(str: string, stripChars: string) {
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

  public static isWhitespace(ch: string): boolean {
    return " \f\n\r\t\v\u00A0\u2028\u2029".indexOf(ch) > -1;
  }
}
