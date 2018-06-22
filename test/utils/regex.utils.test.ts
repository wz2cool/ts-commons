import { RegexUtils } from "../../src";
import { expect } from "chai";

describe(".RegexUtils", () => {
  describe("#escapeRegex", () => {
    it(`shoule return '\*' if str is '*'`, () => {
      const testValue = "*";
      const result = RegexUtils.escapeRegExp(testValue);
      expect(`\\*`).to.be.eq(result);
    });
    it(`shoule return '\/path\/to\/resource\.html\?search=query' if str is '/path/to/resource.html?search=query'`, () => {
      const testValue = "/path/to/resource.html?search=query";
      const result = RegexUtils.escapeRegExp(testValue);
      expect(`\\/path\\/to\\/resource\\.html\\?search=query`).to.be.eq(result);
    });
  });
});
