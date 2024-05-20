import { HttpUtils } from "../../src/index";
import { expect } from "chai";

describe(".HttpUtils", () => {
  describe("#getCookies", () => {
    it("should ignore invalid key", () => {
      const test = "test=1; test2";
      const result = HttpUtils.getCookies(test);
      expect("1").to.be.eq(result.test);
      expect(undefined).to.be.eq(result.test2);
    });
    it("should return {} if cookie is null", () => {
      const test = null;
      const result = HttpUtils.getCookies(test);
      expect(true).to.be.eq(
        // tslint:disable-next-line:trailing-comma
        Object.keys(result).length === 0 && result.constructor === Object
      );
    });
    it("should get all cookies", () => {
      const test =
        // tslint:disable-next-line:max-line-length
        "__gads=ID=13aec61f22fb21ae:T=1522633539:S=ALNI_MZdXbvushXRf5X2yVaxn6w5KcWlVA; __qca=P0-1762416018-1522633540560; _ga=GA1.2.494526142.1522633539; _gid=GA1.2.1731690045.1529633814; _gat=1";
      const result = HttpUtils.getCookies(test);
      expect(
        // tslint:disable-next-line:trailing-comma
        "ID=13aec61f22fb21ae:T=1522633539:S=ALNI_MZdXbvushXRf5X2yVaxn6w5KcWlVA"
      ).to.be.eq(result.__gads);
      expect("P0-1762416018-1522633540560").to.be.eq(result.__qca);
      expect("GA1.2.494526142.1522633539").to.be.eq(result._ga);
      expect("GA1.2.1731690045.1529633814").to.be.eq(result._gid);
      expect("1").to.be.eq(result._gat);
    });
  });

  describe("#getQueryParams", () => {
    it("should return {} if url is null", () => {
      const test = null;
      const result = HttpUtils.getQueryParams(test);
      expect("{}").to.be.eq(JSON.stringify(result));
    });

    it("should get all params with uri", () => {
      const test = "http://www.google.com/?search=test&id=123";
      const result = HttpUtils.getQueryParams(test);
      expect("test").to.be.eq(result.search);
      expect("123").to.be.eq(result.id);
    });

    it("should get all params without uri", () => {
      const test = "search=test&id=123";
      const result = HttpUtils.getQueryParams(test);
      expect("test").to.be.eq(result.search);
      expect("123").to.be.eq(result.id);
    });
  });

  describe("#mergeUrl", () => {
    it("should return replace old param", () => {
      const queryParams: { [key: string]: string } = {};
      queryParams.tab = "0";
      queryParams.xxx = "1";
      const result = HttpUtils.mergeUrl(
        "http://test.xxxx.com?tab=9999999",
        queryParams,
        true
      );
      expect("http://test.xxxx.com?tab=0&xxx=1").to.be.eq(result);
    });
    it("should keep old", () => {
      const queryParams: { [key: string]: string } = {};
      queryParams.tab = "0";
      queryParams.xxx = "1";
      const result = HttpUtils.mergeUrl(
        "http://test.xxxx.com?tab=1",
        queryParams,
        false
      );
      expect("http://test.xxxx.com?tab=1&xxx=1").to.be.eq(result);
    });
    it("empty param", () => {
      const queryParams: { [key: string]: string } = {};
      const result = HttpUtils.mergeUrl(
        "http://test.xxxx.com",
        queryParams,
        true
      );
      expect("http://test.xxxx.com").to.be.eq(result);
    });
  });
});
