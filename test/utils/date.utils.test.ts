import { DateUtils } from "../../src/index";
import { expect } from "chai";
import * as dateFormat from "dateformat";

describe(".DateUtils", () => {
  describe("#dateToTimestamp", () => {
    it("should return 0 if value is null", () => {
      const value = null;
      const result = DateUtils.dateToTimestamp(value);
      expect(0).to.be.eq(result);
    });

    it("should return 0 if value is undefined", () => {
      const value = undefined;
      const result = DateUtils.dateToTimestamp(value);
      expect(0).to.be.eq(result);
    });

    it("should return 1529366400 if value is Tue, 19 Jun 2018 00:00:00 GMT", () => {
      const value = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.dateToTimestamp(value);
      expect(1529366400).to.be.eq(result);
    });
  });

  describe("#timestampToDate", () => {
    it("should return null if value is null", () => {
      const value = null;
      const result = DateUtils.timestampToDate(value);
      expect(null).to.be.eq(result);
    });

    it("should return null if value is number.max", () => {
      const value = Number.MAX_VALUE;
      const result = DateUtils.timestampToDate(value);
      expect(null).to.be.eq(result);
    });

    it("should return Tue, 19 Jun 2018 00:00:00 GMT if value is 1529366400", () => {
      const value = 1529366400;
      const result = DateUtils.timestampToDate(value);
      expect(new Date("Tue, 19 Jun 2018 00:00:00 GMT").getTime()).to.be.eq(
        result.getTime()
      );
    });

    it("should return Tue, 19 Jun 2018 00:00:00 GMT if value is 1529366400000", () => {
      const value = 1529366400000;
      const date = DateUtils.timestampToDate(value);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
      const day = date.getUTCDate();
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const seconds = date.getUTCSeconds();
      expect(new Date("Tue, 19 Jun 2018 00:00:00 GMT").getTime()).to.be.eq(
        date.getTime()
      );
    });
  });

  describe("#toUTCString", () => {
    it("should format by yyyy/MM/dd HH:mm:ss.SSS", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.toUTCString(testDate, "yyyy/MM/dd HH:mm:ss.SSS");
      expect("2018/07/19 00:00:00.0").to.be.eq(result);
    });
  });
});
