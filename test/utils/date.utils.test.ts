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
    it("should format UTC by yyyy/MM/dd HH:mm:ss.SSS", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.toUTCString(testDate, "yyyy/MM/dd HH:mm:ss.SSS");
      expect("2018/06/19 00:00:00.000").to.be.eq(result);
    });
  });

  describe("#toString", () => {
    it("should format by yyyy/MM/dd HH:mm:ss.SSS", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const offset = new Date().getTimezoneOffset();
      const hours = Math.abs(offset / 60);
      const hourStr = hours >= 10 ? hours.toString() : `0${hours}`;
      const result = DateUtils.toString(testDate, "yyyy/MM/dd HH:mm:ss.SSS");
      expect(`2018/06/19 ${hourStr}:00:00.000`).to.be.eq(result);
    });
  });

  describe("#getTimeFormat", () => {
    it("should get 2018 if format is 'yyyy'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "yyyy");
      expect("2018").to.be.eq(result);
    });

    it("should get 2018 if format is UTC 'yyyy'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "yyyy");
      expect("2018").to.be.eq(result);
    });

    it("should get 18 if format is 'yy'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "yy");
      expect("18").to.be.eq(result);
    });

    it("should get 18 if format is UTC 'yy'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "yy");
      expect("18").to.be.eq(result);
    });

    it("should get 06 if format is 'MM'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "MM");
      expect("06").to.be.eq(result);
    });

    it("should get 06 if format is UTC 'MM'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "MM");
      expect("06").to.be.eq(result);
    });

    it("should get 11 if format is UTC 'MM'", () => {
      const testDate = new Date("Tue, 19 Nov 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "MM");
      expect("11").to.be.eq(result);
    });

    it("should get 6 if format is 'M'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "M");
      expect("6").to.be.eq(result);
    });

    it("should get 6 if format is UTC 'M'", () => {
      const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "M");
      expect("6").to.be.eq(result);
    });

    it("should get 09 if format is 'dd'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "dd");
      expect("09").to.be.eq(result);
    });

    it("should get 09 if format is UTC 'dd'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "dd");
      expect("09").to.be.eq(result);
    });

    it("should get 9 if format is 'd'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "d");
      expect("9").to.be.eq(result);
    });

    it("should get 9 if format is UTC 'd'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 00:00:00 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "d");
      expect("9").to.be.eq(result);
    });

    it("should get currentzone + 1 if format is 'HH'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const offset = new Date().getTimezoneOffset();
      const result = (DateUtils as any).getTimeFormat(false, testDate, "HH");
      const expectvalue = 1 + Math.abs(offset / 60);
      expect(expectvalue > 10 ? expectvalue : `0${expectvalue}`).to.be.eq(
        result
      );
    });

    it("should get 01 if format is 'HH'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "HH");
      expect("01").to.be.eq(result);
    });

    it("should get 12 if format is 'HH'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 12:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "HH");
      expect("12").to.be.eq(result);
    });

    it("should get currentzone + 1 if format is 'H'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const offset = new Date().getTimezoneOffset();
      const result = (DateUtils as any).getTimeFormat(false, testDate, "H");
      const expectvalue = 1 + Math.abs(offset / 60);
      expect(expectvalue.toString()).to.be.eq(result);
    });

    it("should get 1 if format is UTC 'H'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "H");
      expect("1").to.be.eq(result);
    });

    it("should get 02 if format is 'mm'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "mm");
      expect("02").to.be.eq(result);
    });

    it("should get 02 if format is UTC 'mm'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "mm");
      expect("02").to.be.eq(result);
    });

    it("should get 13 if format is UTC 'mm'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:13:13 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "mm");
      expect("13").to.be.eq(result);
    });

    it("should get 2 if format is 'm'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "m");
      expect("2").to.be.eq(result);
    });

    it("should get 2 if format is UTC 'mm'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "m");
      expect("2").to.be.eq(result);
    });

    it("should get 03 if format is 'ss'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "ss");
      expect("03").to.be.eq(result);
    });

    it("should get 03 if format is UTC 'ss'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "ss");
      expect("03").to.be.eq(result);
    });

    it("should get 14 if format is UTC 'ss'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:14 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "ss");
      expect("14").to.be.eq(result);
    });

    it("should get 3 if format is 's'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "s");
      expect("3").to.be.eq(result);
    });

    it("should get 3 if format is UTC 's'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "s");
      expect("3").to.be.eq(result);
    });

    it("should get 004 if format is 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.004 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "SSS");
      expect("004").to.be.eq(result);
    });

    it("should get 004 if format is UTC 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.004 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "SSS");
      expect("004").to.be.eq(result);
    });

    it("should get 045 if format is 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.045 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "SSS");
      expect("045").to.be.eq(result);
    });

    it("should get 045 if format is UTC 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.045 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "SSS");
      expect("045").to.be.eq(result);
    });

    it("should get 145 if format is UTC 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.145 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "SSS");
      expect("145").to.be.eq(result);
    });

    it("should get 45 if format is 'S'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.045 GMT");
      const result = (DateUtils as any).getTimeFormat(false, testDate, "S");
      expect("45").to.be.eq(result);
    });

    it("should get 45 if format is UTC 'SSS'", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.045 GMT");
      const result = (DateUtils as any).getTimeFormat(true, testDate, "S");
      expect("45").to.be.eq(result);
    });

    it("should get '' if format is valid", () => {
      const testDate = new Date("Tue, 9 Jun 2018 01:02:03.045 GMT");
      const result = (DateUtils as any).getTimeFormat(
        true,
        testDate,
        "XXXXXXXXXXXXXX"
      );
      expect("").to.be.eq(result);
    });
  });
});
