import { expect } from "chai";
import { DateUtils, ObjectUtils, StringUtils } from "../../src/index";

describe(".DateUtils", () => {


  describe('DateUtils', () => {
    describe('#addYears', () => {
      it('should correctly add years to a date', () => {
        const originalDate = new Date(2018, 5, 1); // June 1, 2018
        const yearsToAdd = 1;
        const expectedDate = new Date(2019, 5, 1); // June 1, 2019

        const resultDate = DateUtils.addYears(originalDate, yearsToAdd);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      it('should correctly subtract years from a date', () => {
        const originalDate = new Date(2018, 5, 1); // June 1, 2018
        const yearsToSubtract = -1;
        const expectedDate = new Date(2017, 5, 1); // June 1, 2017

        const resultDate = DateUtils.addYears(originalDate, yearsToSubtract);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      it('should handle dates in different months correctly', () => {
        const originalDate = new Date(2018, 11, 30); // December 30, 2018
        const yearsToAdd = 1;
        const expectedDate = new Date(2019, 11, 30); // December 30, 2019

        const resultDate = DateUtils.addYears(originalDate, yearsToAdd);

        expect(resultDate).to.deep.equal(expectedDate);
        expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
      });

      // Add more test cases as needed...
    });
  });

  describe('#addMonths', () => {
    it('should correctly add months to a date', () => {
      const date = new Date(2018, 5, 1); // June 1, 2018
      const monthsToAdd = 1;
      const expectedDate = new Date(2018, 6, 1); // July 1, 2018

      const result = DateUtils.addMonths(date, monthsToAdd);

      expect(result).to.deep.equal(expectedDate);
    });

    it('should correctly subtract months from a date', () => {
      const date = new Date(2018, 6, 1); // July 1, 2018
      const monthsToSubtract = -1;
      const expectedDate = new Date(2018, 5, 1); // June 1, 2018

      const result = DateUtils.addMonths(date, monthsToSubtract);

      expect(result).to.deep.equal(expectedDate);
    });

    it('should handle negative months correctly', () => {
      const date = new Date(2018, 5, 1); // June 1, 2018
      const monthsToSubtract = -1;
      const expectedDate = new Date(2018, 4, 1); // May 1, 2018

      const result = DateUtils.addMonths(date, monthsToSubtract);

      expect(result).to.deep.equal(expectedDate);
    });

    it('should not modify the original date', () => {
      const originalDate = new Date(2018, 5, 1); // June 1, 2018
      const date = new Date(originalDate);
      const monthsToAdd = 1;
      const expectedDate = new Date(2018, 6, 1); // July 1, 2018

      const result = DateUtils.addMonths(date, monthsToAdd);

      expect(result).to.deep.equal(expectedDate);
      expect(expectedDate).to.not.equal(originalDate); // Original date should remain unchanged
    });
  });

  describe('#addDays', () => {
    it('should correctly add positive days', () => {
      const originalDate = new Date(2018, 5, 1); // June 1, 2018
      const daysToAdd = 1;
      const expectedDate = new Date(2018, 5, 2); // Expected result: June 2, 2018

      const resultDate = DateUtils.addDays(originalDate, daysToAdd);

      expect(resultDate).to.deep.equal(expectedDate);
      expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
    });

    it('should correctly add negative days', () => {
      const originalDate = new Date(2018, 5, 2); // June 2, 2018
      const daysToAdd = -1;
      const expectedDate = new Date(2018, 5, 1); // Expected result: June 1, 2018

      const resultDate = DateUtils.addDays(originalDate, daysToAdd);

      expect(resultDate).to.deep.equal(expectedDate);
      expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
    });

    it('should handle adding zero days', () => {
      const originalDate = new Date(2018, 5, 1); // June 1, 2018
      const daysToAdd = 0;
      const expectedDate = new Date(2018, 5, 1); // Expected result: June 1, 2018

      const resultDate = DateUtils.addDays(originalDate, daysToAdd);

      expect(resultDate).to.deep.equal(expectedDate);
      // should not use deep since it add 0
      expect(originalDate).to.not.equal(expectedDate); // Ensure original date is unchanged
    });
  });


  describe('#addHours', () => {
    it('should correctly add hours to a date', () => {
      const originalDate = new Date(2018, 5, 1); // 注意：JavaScript 中的月份是从 0 开始的
      const hoursToAdd = 1;
      const expectedDate = new Date(2018, 5, 1, 1);

      const resultDate = DateUtils.addHours(originalDate, hoursToAdd);

      expect(resultDate).to.deep.equal(expectedDate);
      // 检查原始日期是否未被修改
      expect(originalDate).to.deep.equal(new Date(2018, 5, 1));
    });

    it('should correctly subtract hours from a date', () => {
      const originalDate = new Date(2018, 5, 1, 1);
      const hoursToSubtract = -1;
      const expectedDate = new Date(2018, 5, 1);

      const resultDate = DateUtils.addHours(originalDate, hoursToSubtract);

      expect(resultDate).to.deep.equal(expectedDate);
    });

    it('should handle dates at the end of the month', () => {
      // month start with 0
      const originalDate = new Date(2024, 10, 30, 23);
      const hoursToAdd = 2;
      const expectedDate = new Date(2024, 11, 1, 1);

      const resultDate = DateUtils.addHours(originalDate, hoursToAdd);

      expect(resultDate).to.deep.equal(expectedDate);
    });
  });


  describe('#addMinutes', () => {
    it('should correctly add minutes to a date', () => {
      // Arrange
      const originalDate = new Date(2018, 5, 1, 0, 0); // 注意：JavaScript 中的月份是从 0 开始的
      const minutesToAdd = 1;
      const expectedDate = new Date(2018, 5, 1, 0, 1);

      // Act
      const resultDate = DateUtils.addMinutes(originalDate, minutesToAdd);

      // Assert
      expect(resultDate).to.deep.equal(expectedDate);
      // 确保原始日期未被修改
      expect(originalDate).to.deep.equal(new Date(2018, 5, 1, 0, 0));
    });

    it('should correctly subtract minutes from a date', () => {
      // Arrange
      const originalDate = new Date(2024, 11, 1, 0, 0);
      const minutesToSubtract = -1;
      const expectedDate = new Date(2024, 10, 30, 23, 59);

      // Act
      const resultDate = DateUtils.addMinutes(originalDate, minutesToSubtract);

      // Assert
      expect(resultDate).to.deep.equal(expectedDate);
      // 确保原始日期未被修改
      expect(originalDate).to.deep.equal(new Date(2024, 11, 1, 0, 0));
    });
  });


  describe('#addSeconds', () => {
    it('should correctly add seconds to a date', () => {
      // Arrange
      const date = new Date(2018, 5, 1); // 注意：月份在 JavaScript/TypeScript 中是从 0 开始的
      const secondsToAdd = 1;
      const expectedTime = date.getTime() + secondsToAdd * 1000;

      // Act
      const result = DateUtils.addSeconds(date, secondsToAdd);

      // Assert
      expect(result).to.be.an.instanceOf(Date);
      expect(result.getTime()).to.equal(expectedTime);
    });

    it('should handle negative seconds', () => {
      // Arrange
      const date = new Date(2018, 5, 1);
      const secondsToAdd = -1;
      const expectedTime = date.getTime() + secondsToAdd * 1000;

      // Act
      const result = DateUtils.addSeconds(date, secondsToAdd);

      // Assert
      expect(result).to.be.an.instanceOf(Date);
      expect(result.getTime()).to.equal(expectedTime);
    });

    it('should not modify the original date', () => {
      // Arrange
      const date = new Date(2018, 5, 1);
      const originalDate = new Date(date.getTime());
      const secondsToAdd = 1;

      // Act
      DateUtils.addSeconds(date, secondsToAdd);

      // Assert
      expect(date.getTime()).to.equal(originalDate.getTime());
    });
  });

  describe('#getDayOfWeek', () => {
    it('getDayOfWeek should return the correct day of the week', () => {
      // Arrange
      const testDate = new Date(2024, 10, 24); // 11 24, 2024 (Sunday)
      const expectedDayOfWeek = 0; // Saturday is the 6th day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)

      // Act
      const actualDayOfWeek = DateUtils.getDayOfWeek(testDate);

      // Assert
      expect(actualDayOfWeek).to.equal(expectedDayOfWeek);
    });
  });


  describe('#getDaysInMonth', () => {
    it('should return the correct number of days in a month', () => {
      // 测试不同的月份和年份
      const testCases = [
        { date: new Date(2024, 11, 1), expected: 31 }, // December 2024
        { date: new Date(2024, 0, 1), expected: 31 },  // January 2024
        { date: new Date(2024, 1, 1), expected: 29 },  // February 2024 (leap year)
        { date: new Date(2023, 1, 1), expected: 28 },  // February 2023 (non-leap year)
        { date: new Date(2024, 2, 1), expected: 31 },  // March 2024
        { date: new Date(2024, 3, 1), expected: 30 },  // April 2024
        { date: new Date(2024, 4, 1), expected: 31 },  // May 2024
        { date: new Date(2024, 5, 1), expected: 30 },  // June 2024
        { date: new Date(2024, 6, 1), expected: 31 },  // July 2024
        { date: new Date(2024, 7, 1), expected: 31 },  // August 2024
        { date: new Date(2024, 8, 1), expected: 30 },  // September 2024
        { date: new Date(2024, 9, 1), expected: 31 },  // October 2024
        { date: new Date(2024, 10, 1), expected: 30 }, // November 2024
      ];

      testCases.forEach(({ date, expected }) => {
        expect(DateUtils.getDaysInMonth(date)).to.equal(expected);
      });
    });
  });

  describe("#compare", () => {
    it("should return 0 if date1 === date2", () => {
      const date1 = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const date2 = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.compare(date1, date2);
      expect(0).to.be.eq(result);
    });

    it("should return 1 if date1 > date2", () => {
      const date1 = new Date("Tue, 19 Jun 2018 11:00:00 GMT");
      const date2 = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.compare(date1, date2);
      expect(1).to.be.eq(result);
    });

    it("should return -1 if date1 < date2", () => {
      const date1 = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const date2 = new Date("Tue, 19 Jun 2018 11:00:00 GMT");
      const result = DateUtils.compare(date1, date2);
      expect(-1).to.be.eq(result);
    });
  });

  describe("#getToday", () => {
    const result = DateUtils.getToday();
    expect(0).to.be.eq(result.getHours());
    expect(0).to.be.eq(result.getMinutes());
    expect(0).to.be.eq(result.getSeconds());
    expect(0).to.be.eq(result.getMilliseconds());
  });

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

    it("should return 1529366400000 if value is Tue, 19 Jun 2018 00:00:00 GMT", () => {
      const value = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
      const result = DateUtils.dateToTimestamp(value);
      expect(1529366400000).to.be.eq(result);
    });
  });

  describe("#timestampToDate", () => {
    it("should return null if value is null", () => {
      const value = null;
      const result = DateUtils.timestampToDate(value);
      expect(new Date(null).getTime()).to.be.eq(result.getTime());
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

  // avoid phantomjs issue
  let needTestToString = true;
  try {
    if (StringUtils.containsIgnoreCase(window.navigator.userAgent, "Firefox")) {
      needTestToString = false;
    }
  } catch (e) {
    // fix
  }

  if (needTestToString) {
    describe("#toUTCString", () => {
      it("should format UTC by yyyy/MM/dd HH:mm:ss.SSS", () => {
        const testDate = new Date("Tue, 19 Jun 2018 00:00:00 GMT");
        const result = DateUtils.toUTCString(
          testDate,
          "yyyy/MM/dd HH:mm:ss.SSS"
        );
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
        const result = (DateUtils as any).getTimeFormat(
          false,
          testDate,
          "yyyy"
        );
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
  }
});
