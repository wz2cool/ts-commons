import { expect } from "chai";
import { describe } from "mocha";
import { StringUtils, NumberUtils } from "../../src";
describe(".StringUtils", () => {
  describe("#isEmpty", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = StringUtils.isEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return false if value is "   "', () => {
      const testValue = "   ";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return false if value is "bob"', () => {
      const testValue = "bob";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return false if value is " bob "', () => {
      const testValue = " bob ";
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is [1]", () => {
      const testValue = [1] as any;
      const result = StringUtils.isEmpty(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNotEmpty", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = StringUtils.isNotEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isNotEmpty(testValue);
      expect(false).to.be.eq(result);
    });
    it('should return true if value is "   "', () => {
      const testValue = "   ";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return true if value is "bob"', () => {
      const testValue = "bob";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
    it('should return true if value is " bob "', () => {
      const testValue = " bob ";
      const result = StringUtils.isNotEmpty(testValue);
      expect(true).to.be.eq(result);
    });
  });

  describe("#isBlank", () => {
    it("should return true if value is null", () => {
      const testValue = null;
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\t \n \f \r'", () => {
      const testValue = "\t \n \f \r";
      const result = StringUtils.isBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is '\b'", () => {
      const testValue = "\b";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is 'bob'", () => {
      const testValue = "bob";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is ' bob '", () => {
      const testValue = " bob ";
      const result = StringUtils.isBlank(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isNotBlank", () => {
    it("should return false if value is null", () => {
      const testValue = null;
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is string.empty", () => {
      const testValue = "";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '\t \n \f \r'", () => {
      const testValue = "\t \n \f \r";
      const result = StringUtils.isNotBlank(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return true if value is '\b'", () => {
      const testValue = "\b";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 'bob'", () => {
      const testValue = "bob";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is ' bob '", () => {
      const testValue = " bob ";
      const result = StringUtils.isNotBlank(testValue);
      expect(true).to.be.eq(result);
    });
  });

  describe("#trim", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.trim(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return undefined if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.trim(testValue);
      expect(undefined).to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.trim(testValue);
      expect("").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.trim(testValue);
      expect("ss").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.trim(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.trim(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.trim(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#strip", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.strip(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return undefined if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.strip(testValue);
      expect(undefined).to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.strip(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.strip(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.strip(testValue);
      expect("\b").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.strip(testValue);
      expect("ss   \b").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.strip(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.strip(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.strip(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       ' and stripChars is null", () => {
      const testValue = "     dd       ";
      const result = StringUtils.strip(testValue, null);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       ' and stripChars is undefined", () => {
      const testValue = "     dd       ";
      const result = StringUtils.strip(testValue, null);
      expect("dd").to.be.eq(result);
    });

    it("should return 'dd' if value is 'xyddxz' and stripChars is xyz", () => {
      const testValue = "xyddxz";
      const stripChars = "xyz";
      const result = StringUtils.strip(testValue, stripChars);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#stripToNull", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.stripToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.stripToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is ''", () => {
      const testValue = "";
      const result = StringUtils.stripToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.stripToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.stripToNull(testValue);
      expect("\b").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.stripToNull(testValue);
      expect("ss   \b").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.stripToNull(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.stripToNull(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.stripToNull(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#stripToEmpty", () => {
    it("should return '' if value is null", () => {
      const testValue = null;
      const result = StringUtils.stripToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.stripToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.stripToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.stripToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '      \b \t \n \f \r    '", () => {
      const testValue = "     \b\t \n \f \r    ";
      const result = StringUtils.stripToEmpty(testValue);
      expect("\b").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.stripToEmpty(testValue);
      expect("ss   \b").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.stripToEmpty(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.stripToEmpty(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.stripToEmpty(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#trimToNull", () => {
    it("should return null if value is null", () => {
      const testValue = null;
      const result = StringUtils.trimToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is ''", () => {
      const testValue = "";
      const result = StringUtils.trimToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.trimToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is '     \b \t \n \f \r    '", () => {
      const testValue = "     \b \t \n \f \r    ";
      const result = StringUtils.trimToNull(testValue);
      expect(null).to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.trimToNull(testValue);
      expect("ss").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.trimToNull(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.trimToNull(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.trimToNull(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#trimToEmpty", () => {
    it("should return '' if value is null", () => {
      const testValue = null;
      const result = StringUtils.trimToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is ''", () => {
      const testValue = "";
      const result = StringUtils.trimToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '   '", () => {
      const testValue = "   ";
      const result = StringUtils.trimToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return '' if value is '     \b \t \n \f \r    '", () => {
      const testValue = "     \b \t \n \f \r    ";
      const result = StringUtils.trimToEmpty(testValue);
      expect("").to.be.eq(result);
    });
    it("should return 'ss' if value is '     \n\tss   \b'", () => {
      const testValue = "     \n\tss   \b";
      const result = StringUtils.trimToEmpty(testValue);
      expect("ss").to.be.eq(result);
    });
    it("should return 'd   d dd' if value is ' d   d dd     '", () => {
      const testValue = " d   d dd     ";
      const result = StringUtils.trimToEmpty(testValue);
      expect("d   d dd").to.be.eq(result);
    });
    it("should return 'dd' if value is 'dd     '", () => {
      const testValue = "dd     ";
      const result = StringUtils.trimToEmpty(testValue);
      expect("dd").to.be.eq(result);
    });
    it("should return 'dd' if value is '     dd       '", () => {
      const testValue = "     dd       ";
      const result = StringUtils.trimToEmpty(testValue);
      expect("dd").to.be.eq(result);
    });
  });

  describe("#isWhitespace", () => {
    //  \f\n\r\t\v\u00A0\u2028\u2029
    it("should return true if value is ' '", () => {
      const testValue = "";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\f'", () => {
      const testValue = "\f";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\r'", () => {
      const testValue = "\r";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\t'", () => {
      const testValue = "\t";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\v'", () => {
      const testValue = "\v";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\u00A0'", () => {
      const testValue = "\u00A0";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\u2028'", () => {
      const testValue = "\u2028";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is '\u2029'", () => {
      const testValue = "\u2029";
      const result = StringUtils.isWhitespace(testValue);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is 'a'", () => {
      const testValue = "a";
      const result = StringUtils.isWhitespace(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is null", () => {
      const testValue = null;
      const result = StringUtils.isWhitespace(testValue);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is undefined", () => {
      const testValue = undefined;
      const result = StringUtils.isWhitespace(testValue);
      expect(false).to.be.eq(result);
    });
  });

  describe("#stripStart", () => {
    // * StringUtils.stripStart(null, *)          = null
    // * StringUtils.stripStart("", *)            = ""
    // * StringUtils.stripStart("abc", "")        = "abc"
    // * StringUtils.stripStart("abc", null)      = "abc"
    // * StringUtils.stripStart("  abc", null)    = "abc"
    // * StringUtils.stripStart("abc  ", null)    = "abc  "
    // * StringUtils.stripStart(" abc ", null)    = "abc "
    // * StringUtils.stripStart("yxabc  ", "xyz") = "abc  "
    it("should return null if value is null", () => {
      const str = null;
      const stripChars = "*";
      const result = StringUtils.stripStart(str, stripChars);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is undefined", () => {
      const str = undefined;
      const stripChars = "*";
      const result = StringUtils.stripStart(str, stripChars);
      expect(undefined).to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is ''", () => {
      const str = "abc";
      const stripChars = "";
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is null", () => {
      const str = "abc";
      const stripChars = null;
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is undefined", () => {
      const str = "abc";
      const stripChars = undefined;
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is '  abc' and stripChars is null", () => {
      const str = "  abc";
      const stripChars = null;
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc  ' if str is 'abc  ' and stripChars is null", () => {
      const str = "abc  ";
      const stripChars = null;
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc  ").to.be.eq(result);
    });
    it("should return 'abc  ' if str is '  abc  ' and stripChars is null", () => {
      const str = "  abc  ";
      const stripChars = null;
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc  ").to.be.eq(result);
    });
    it("should return 'abc  ' if str is 'yxabc  ' and stripChars is 'xyz'", () => {
      const str = "yxabc  ";
      const stripChars = "xyz";
      const result = StringUtils.stripStart(str, stripChars);
      expect("abc  ").to.be.eq(result);
    });
  });

  describe("#stripEnd", () => {
    //  * StringUtils.stripEnd(null, *)          = null
    //  * StringUtils.stripEnd("", *)            = ""
    //  * StringUtils.stripEnd("abc", "")        = "abc"
    //  * StringUtils.stripEnd("abc", null)      = "abc"
    //  * StringUtils.stripEnd("  abc", null)    = "  abc"
    //  * StringUtils.stripEnd("abc  ", null)    = "abc"
    //  * StringUtils.stripEnd(" abc ", null)    = " abc"
    //  * StringUtils.stripEnd("  abcyx", "xyz") = "  abc"
    it("should return null if value is null", () => {
      const str = null;
      const stripChars = "*";
      const result = StringUtils.stripEnd(str, stripChars);
      expect(null).to.be.eq(result);
    });
    it("should return null if value is undefined", () => {
      const str = undefined;
      const stripChars = "*";
      const result = StringUtils.stripEnd(str, stripChars);
      expect(undefined).to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is ''", () => {
      const str = "abc";
      const stripChars = "";
      const result = StringUtils.stripEnd(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is null", () => {
      const str = "abc";
      const stripChars = null;
      const result = StringUtils.stripEnd(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc' and stripChars is undefined", () => {
      const str = "abc";
      const stripChars = undefined;
      const result = StringUtils.stripEnd(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return 'abc' if str is 'abc  ' and stripChars is null", () => {
      const str = "abc  ";
      const stripChars = null;
      const result = StringUtils.stripEnd(str, stripChars);
      expect("abc").to.be.eq(result);
    });
    it("should return '  abc' if str is '  abc' and stripChars is null", () => {
      const str = "  abc";
      const stripChars = null;
      const result = StringUtils.stripEnd(str, stripChars);
      expect("  abc").to.be.eq(result);
    });
    it("should return '  abc' if str is '  abc  ' and stripChars is null", () => {
      const str = "  abc  ";
      const stripChars = null;
      const result = StringUtils.stripEnd(str, stripChars);
      expect("  abc").to.be.eq(result);
    });
    it("should return '  abc' if str is '  abcxy' and stripChars is 'xyz'", () => {
      const str = "  abcyx";
      const stripChars = "xyz";
      const result = StringUtils.stripEnd(str, stripChars);
      expect("  abc").to.be.eq(result);
    });
  });

  describe("#equal", () => {
    // * StringUtils.equal(null, null)              = true
    // * StringUtils.equal(undefined, undefined)      = true
    // * StringUtils.equal(undefined, null)          = false
    // * StringUtils.equal(null, undefined)          = false
    // * StringUtils.equal(null, "abc")             = false
    // * StringUtils.equal("abc", null)             = false
    // * StringUtils.equal("abc", undefined)         = false
    // * StringUtils.equal(undefined, "abc")         = false
    // * StringUtils.equal("abc", "def")            = false
    // * StringUtils.equal("abc", "abc")            = true
    it("should return true if str1 is null and str2 is null", () => {
      const str1 = null;
      const str2 = null;
      const result = StringUtils.equals(str1, str2);
      expect(true).to.be.eq(result);
    });
    it("should return true if str1 is undefined and str2 is undefined", () => {
      const str1 = undefined;
      const str2 = undefined;
      const result = StringUtils.equals(str1, str2);
      expect(true).to.be.eq(result);
    });
    it("should return false if str1 is undefined and str2 is null", () => {
      const str1 = undefined;
      const str2 = null;
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is null and str2 is undefined", () => {
      const str1 = null;
      const str2 = undefined;
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is null and str2 is 'abc'", () => {
      const str1 = null;
      const str2 = "abc";
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is null", () => {
      const str1 = "abc";
      const str2 = null;
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is undefined and str2 is 'abc'", () => {
      const str1 = undefined;
      const str2 = "abc";
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is undefined", () => {
      const str1 = "abc";
      const str2 = undefined;
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is 'def'", () => {
      const str1 = "abc";
      const str2 = "def";
      const result = StringUtils.equals(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return true if str1 is 'abc' and str2 is 'abc'", () => {
      const str1 = "abc";
      const str2 = "abc";
      const result = StringUtils.equals(str1, str2);
      expect(true).to.be.eq(result);
    });
  });

  describe("#equal", () => {
    // * StringUtils.equal(null, null)              = true
    // * StringUtils.equal(undefined, undefined)      = true
    // * StringUtils.equal(undefined, null)          = false
    // * StringUtils.equal(null, undefined)          = false
    // * StringUtils.equal(null, "abc")             = false
    // * StringUtils.equal("abc", null)             = false
    // * StringUtils.equal("abc", undefined)         = false
    // * StringUtils.equal(undefined, "abc")         = false
    // * StringUtils.equal("abc", "def")            = false
    // * StringUtils.equal("abc", "AbC")            = true
    it("should return true if str1 is null and str2 is null", () => {
      const str1 = null;
      const str2 = null;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(true).to.be.eq(result);
    });
    it("should return true if str1 is undefined and str2 is undefined", () => {
      const str1 = undefined;
      const str2 = undefined;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(true).to.be.eq(result);
    });
    it("should return false if str1 is undefined and str2 is null", () => {
      const str1 = undefined;
      const str2 = null;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is null and str2 is undefined", () => {
      const str1 = null;
      const str2 = undefined;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is null and str2 is 'abc'", () => {
      const str1 = null;
      const str2 = "abc";
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is null", () => {
      const str1 = "abc";
      const str2 = null;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is undefined and str2 is 'abc'", () => {
      const str1 = undefined;
      const str2 = "abc";
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is undefined", () => {
      const str1 = "abc";
      const str2 = undefined;
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return false if str1 is 'abc' and str2 is 'def'", () => {
      const str1 = "abc";
      const str2 = "def";
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(false).to.be.eq(result);
    });
    it("should return true if str1 is 'abc' and str2 is 'abc'", () => {
      const str1 = "abc";
      const str2 = "abc";
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(true).to.be.eq(result);
    });
    it("should return true if str1 is 'abc' and str2 is 'AbC'", () => {
      const str1 = "abc";
      const str2 = "AbC";
      const result = StringUtils.equalsIgnoreCase(str1, str2);
      expect(true).to.be.eq(result);
    });
  });

  describe("#indexOf", () => {
    // StringUtils.indexOf(null, *)         = -1
    // StringUtils.indexOf(undefined, *)         = -1
    // StringUtils.indexOf("", *)           = -1
    // StringUtils.indexOf("aabaabaa", 'a') = 0
    // StringUtils.indexOf("aabaabaa", 'b') = 2
    // StringUtils.indexOf("aabaabaa", 'b', 3) = 5
    it("should return -1 if str is null and searchStr is 'a'", () => {
      const str = null;
      const searchStr = "";
      const result = StringUtils.indexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is undefined and searchStr is 'a'", () => {
      const str = undefined;
      const searchStr = "";
      const result = StringUtils.indexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is null", () => {
      const str = "abc";
      const searchStr = null;
      const result = StringUtils.indexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined", () => {
      const str = "abc";
      const searchStr = undefined;
      const result = StringUtils.indexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return 0 if str is 'aabaabaa' and searchStr is 'a'", () => {
      const str = "aabaabaa";
      const searchStr = "a";
      const result = StringUtils.indexOf(str, searchStr);
      expect(0).to.be.eq(result);
    });
    it("should return 2 if str is 'aabaabaa' and searchStr is 'b'", () => {
      const str = "aabaabaa";
      const searchStr = "b";
      const result = StringUtils.indexOf(str, searchStr);
      expect(2).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined and startPos is null", () => {
      const str = "abc";
      const searchStr = "b";
      const startPos = null;
      const result = StringUtils.indexOf(str, searchStr, startPos);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined and startPos is null", () => {
      const str = "abc";
      const searchStr = "b";
      const startPos = 1.2;
      const result = StringUtils.indexOf(str, searchStr, startPos);
      expect(-1).to.be.eq(result);
    });
    it("should return 2 if str is 'aabaabaa' and searchStr is 'b' and startPos is 0", () => {
      const str = "aabaabaa";
      const searchStr = "b";
      const startPos = 0;
      const result = StringUtils.indexOf(str, searchStr, startPos);
      expect(2).to.be.eq(result);
    });
    it("should return 5 if str is 'aabaabaa' and searchStr is 'b' and startPos is 3", () => {
      const str = "aabaabaa";
      const searchStr = "b";
      const startPos = 3;
      const result = StringUtils.indexOf(str, searchStr, startPos);
      expect(5).to.be.eq(result);
    });
    it("should return 0 if str is 'aabaabaa' and searchStr is ''", () => {
      const str = "aabaabaa";
      const searchStr = "";
      const result = StringUtils.indexOf(str, searchStr);
      expect(0).to.be.eq(result);
    });
  });

  describe("#lastIndexOf", () => {
    // StringUtils.lastIndexOf("aFkyk", "k")    4;
    // StringUtils.lastIndexOf("a Fkyk", " ")   1;
    it("should return -1 if str is null and searchStr is 'a'", () => {
      const str = null;
      const searchStr = "";
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is undefined and searchStr is 'a'", () => {
      const str = undefined;
      const searchStr = "";
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is null", () => {
      const str = "abc";
      const searchStr = null;
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined", () => {
      const str = "abc";
      const searchStr = undefined;
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(-1).to.be.eq(result);
    });
    it("should return 2 if str is 'aabaabaa' and searchStr is 'b'", () => {
      const str = "aabaabaa";
      const searchStr = "b";
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(5).to.be.eq(result);
    });
    it("should return 2 if str is 'aabaabaa' and searchStr is 'b' and postion is 4", () => {
      const str = "aabaabaa";
      const searchStr = "b";
      const positon = 4;
      const result = StringUtils.lastIndexOf(str, searchStr, positon);
      expect(2).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined and startPos is null", () => {
      const str = "abc";
      const searchStr = "b";
      const startPos = null;
      const result = StringUtils.lastIndexOf(str, searchStr, startPos);
      expect(-1).to.be.eq(result);
    });
    it("should return -1 if str is 'abc' and searchStr is undefined and startPos is null", () => {
      const str = "abc";
      const searchStr = "b";
      const startPos = 1.2;
      const result = StringUtils.lastIndexOf(str, searchStr, startPos);
      expect(-1).to.be.eq(result);
    });
    it("should return 4 if str is 'aFkyk' and searchStr is 'k'", () => {
      const str = "aFkyk";
      const searchStr = "k";
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(4).to.be.eq(result);
    });
    it("should return 4 if str is 'aFkyk' and searchStr is ' '", () => {
      const str = "a Fky";
      const searchStr = " ";
      const result = StringUtils.lastIndexOf(str, searchStr);
      expect(1).to.be.eq(result);
    });
  });

  describe("#contains", () => {
    it("should return false if str is 'abc' and searchStr is null", () => {
      const str = "abc";
      const searchStr = null;
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is undefined", () => {
      const str = "abc";
      const searchStr = undefined;
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is null and searchStr is 'a'", () => {
      const str = null;
      const searchStr = "a";
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is undefined and searchStr is 'a'", () => {
      const str = undefined;
      const searchStr = "a";
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return true if str is 'abc' and searchStr is 'a'", () => {
      const str = "abc";
      const searchStr = "a";
      const result = StringUtils.contains(str, searchStr);
      expect(true).to.be.eq(result);
    });
    it("should return true if str is 'abc' and searchStr is 'bc'", () => {
      const str = "abc";
      const searchStr = "bc";
      const result = StringUtils.contains(str, searchStr);
      expect(true).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is 'd'", () => {
      const str = "abc";
      const searchStr = "d";
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is 'B'", () => {
      const str = "abc";
      const searchStr = "B";
      const result = StringUtils.contains(str, searchStr);
      expect(false).to.be.eq(result);
    });
  });

  describe("#containsIgnoreCase", () => {
    it("should return false if str is 'abc' and searchStr is null", () => {
      const str = "abc";
      const searchStr = null;
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is undefined", () => {
      const str = "abc";
      const searchStr = undefined;
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is null and searchStr is 'a'", () => {
      const str = null;
      const searchStr = "a";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is undefined and searchStr is 'a'", () => {
      const str = undefined;
      const searchStr = "a";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return true if str is 'abc' and searchStr is 'a'", () => {
      const str = "abc";
      const searchStr = "a";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(true).to.be.eq(result);
    });
    it("should return true if str is 'abc' and searchStr is 'bc'", () => {
      const str = "abc";
      const searchStr = "bc";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(true).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is 'd'", () => {
      const str = "abc";
      const searchStr = "d";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(false).to.be.eq(result);
    });
    it("should return false if str is 'abc' and searchStr is 'B'", () => {
      const str = "abc";
      const searchStr = "B";
      const result = StringUtils.containsIgnoreCase(str, searchStr);
      expect(true).to.be.eq(result);
    });
  });

  describe("#substring", () => {
    it("should return null if str is null and start is 0", () => {
      const value = null;
      const start = 0;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is undefined and start is 0", () => {
      const value = undefined;
      const start = 0;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is undefined and start is 0", () => {
      const value = undefined;
      const start = 0;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is null", () => {
      const value = "abc";
      const start = null;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is undefined", () => {
      const value = "abc";
      const start = undefined;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is 1.2", () => {
      const value = "abc";
      const start = 1.2;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is 1 and end is null", () => {
      const value = "abc";
      const start = 1;
      const end = null;
      const result = StringUtils.subString(value, start, end);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is 1 and end is 1.2", () => {
      const value = "abc";
      const start = 1;
      const end = 1.2;
      const result = StringUtils.subString(value, start, end);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is '' and start is 1.2", () => {
      const value = "";
      const start = 1.2;
      const result = StringUtils.subString(value, start);
      expect(null).to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is 1", () => {
      const value = "abc";
      const start = 1;
      const result = StringUtils.subString(value, start);
      expect("bc").to.be.eq(result);
    });
    it("should return null if str is '' and start is 1", () => {
      const value = "";
      const start = 1;
      const result = StringUtils.subString(value, start);
      expect("").to.be.eq(result);
    });
    it("should return null if str is 'abc' and start is 1 and end is 2", () => {
      const value = "abc";
      const start = 1;
      const end = 2;
      const result = StringUtils.subString(value, start, end);
      expect("b").to.be.eq(result);
    });
  });
});
