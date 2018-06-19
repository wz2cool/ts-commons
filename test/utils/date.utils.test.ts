import { DateUtils } from "../../src";
import { expect } from "chai";

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

    it("should return 0 if value is undefined", () => {
      const value = new Date("2018-6-19");
      const result = DateUtils.dateToTimestamp(value);
      expect(1529337600).to.be.eq(result);
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

    it("should return 0 if value is undefined", () => {
      const value = 1529337600;
      const result = DateUtils.timestampToDate(value);
      expect(new Date("2018-6-19").getTime()).to.be.eq(result.getTime());
    });
  });
});
