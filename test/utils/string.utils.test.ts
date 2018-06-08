import { expect } from "chai";
import { describe } from "mocha";
import { StringUtils } from "../../src";
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
});
