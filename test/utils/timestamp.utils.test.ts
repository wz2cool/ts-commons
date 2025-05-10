import { expect } from 'chai';
import { TimestampUtils } from '../../src';
import { TIME_OF_DAY } from '../../src';

describe('TimestampUtils', () => {
    // 辅助函数：创建指定日期时间的时间戳
    const createTimestamp = (
        year: number,
        month: number,
        day: number,
        hour = 0,
        minute = 0,
        second = 0,
        millisecond = 0
    ): number => {
        return new Date(year, month - 1, day, hour, minute, second, millisecond).getTime();
    };

    describe('compare', () => {
        it('should return 0 for equal timestamps', () => {
            const timestamp = new Date(2023, 1, 1).getTime();
            expect(TimestampUtils.compare(timestamp, timestamp)).to.equal(0);
        });

        it('should return -1 for earlier timestamp', () => {
            const t1 = createTimestamp(2024, 1, 1);
            const t2 = createTimestamp(2024, 1, 2);
            expect(TimestampUtils.compare(t1, t2)).to.equal(-1);
        });

        it('should return 1 for later timestamp', () => {
            const t1 = createTimestamp(2024, 1, 2);
            const t2 = createTimestamp(2024, 1, 1);
            expect(TimestampUtils.compare(t1, t2)).to.equal(1);
        });
    });

    describe('compareYear', () => {
        it('should return 0 for same year', () => {
            const t1 = createTimestamp(2024, 1, 1);
            const t2 = createTimestamp(2024, 12, 31);
            expect(TimestampUtils.compareYear(t1, t2)).to.equal(0);
        });

        it('should return -1 for earlier year', () => {
            const t1 = createTimestamp(2023, 12, 31);
            const t2 = createTimestamp(2024, 1, 1);
            expect(TimestampUtils.compareYear(t1, t2)).to.equal(-1);
        });

        it('should return 1 for later year', () => {
            const t1 = createTimestamp(2024, 1, 1);
            const t2 = createTimestamp(2023, 12, 31);
            expect(TimestampUtils.compareYear(t1, t2)).to.equal(1);
        });
    });

    describe('compareMonth', () => {
        it('should return 0 for same month in same year', () => {
            const t1 = createTimestamp(2024, 1, 1);
            const t2 = createTimestamp(2024, 1, 31);
            const result = TimestampUtils.compareMonth(t1, t2);
            expect(result).to.equal(0);
        });

        it('should return -1 for earlier month', () => {
            const t1 = createTimestamp(2024, 1, 31);
            const t2 = createTimestamp(2024, 2, 1);
            expect(TimestampUtils.compareMonth(t1, t2)).to.equal(-1);
        });

        it('should compare months across years', () => {
            const t1 = createTimestamp(2023, 12, 31);
            const t2 = createTimestamp(2024, 1, 1);
            // t1.month = 12, t2.month= 1
            const result = TimestampUtils.compareMonth(t1, t2);
            expect(result).to.equal(1);
        });
    });

    describe('compareDay', () => {
        it('should return 0 for same day', () => {
            const t1 = createTimestamp(2024, 1, 1, 0, 0);
            const t2 = createTimestamp(2024, 1, 1, 23, 59);
            const result = TimestampUtils.compareDay(t1, t2)
            expect(result).to.equal(0);
        });

        it('should return -1 for earlier day', () => {
            const t1 = createTimestamp(2024, 1, 1);
            const t2 = createTimestamp(2024, 1, 2);
            const result = TimestampUtils.compareDay(t1, t2)
            expect(result).to.equal(-1);
        });

        it('should compare days across months', () => {
            const t1 = createTimestamp(2024, 1, 31);
            const t2 = createTimestamp(2024, 2, 1);
            expect(TimestampUtils.compareDay(t1, t2)).to.equal(1);
        });
    });

    describe('compareHour', () => {
        it('should return 0 when timestamps are in the same hour', () => {
            const t1 = new Date(2023, 0, 1, 12, 30).getTime();
            const t2 = new Date(2023, 0, 1, 12, 45).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(0);
        });

        it('should return -1 when first hour is earlier', () => {
            const t1 = new Date(2023, 0, 1, 12, 0).getTime();
            const t2 = new Date(2023, 0, 1, 13, 0).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(-1);
        });

        it('should return 1 when first hour is later', () => {
            const t1 = new Date(2023, 0, 1, 13, 0).getTime();
            const t2 = new Date(2023, 0, 1, 12, 59).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(1);
        });

        it('should handle hour transitions across days', () => {
            const t1 = new Date(2023, 0, 1, 23, 59).getTime();
            const t2 = new Date(2023, 0, 2, 0, 1).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(-1);
        });

        it('should handle hour transitions across months', () => {
            const t1 = new Date(2023, 0, 31, 23, 59).getTime();
            const t2 = new Date(2023, 1, 1, 0, 1).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(-1);
        });

        it('should ignore minutes and seconds', () => {
            const t1 = new Date(2023, 0, 1, 12, 0, 0).getTime();
            const t2 = new Date(2023, 0, 1, 12, 59, 59).getTime();
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(0);
        });
    });

    describe('compareMinute', () => {
        it('should return 0 when comparing same minute', () => {
            // Same minute, different seconds
            const t1 = new Date(2023, 0, 1, 12, 30, 0).getTime();
            const t2 = new Date(2023, 0, 1, 12, 30, 45).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(0);
        });

        it('should return -1 when first minute is earlier', () => {
            const t1 = new Date(2023, 0, 1, 12, 30).getTime();
            const t2 = new Date(2023, 0, 1, 12, 31).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(-1);
        });

        it('should return 1 when first minute is later', () => {
            const t1 = new Date(2023, 0, 1, 12, 31).getTime();
            const t2 = new Date(2023, 0, 1, 12, 30).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(1);
        });

        it('should handle hour boundaries correctly', () => {
            const t1 = new Date(2023, 0, 1, 12, 59).getTime();
            const t2 = new Date(2023, 0, 1, 13, 0).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(-1);
        });

        it('should handle day boundaries correctly', () => {
            const t1 = new Date(2023, 0, 1, 23, 59).getTime();
            const t2 = new Date(2023, 0, 2, 0, 0).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(-1);
        });

        it('should handle milliseconds correctly', () => {
            const t1 = new Date(2023, 0, 1, 12, 30, 0, 0).getTime();
            const t2 = new Date(2023, 0, 1, 12, 30, 0, 999).getTime();
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(0);
        });

        // 使用 Chai 的链式断言
        it('should return valid comparison values', () => {
            const base = new Date(2023, 0, 1, 12, 30).getTime();
            const earlier = new Date(2023, 0, 1, 12, 29).getTime();
            const later = new Date(2023, 0, 1, 12, 31).getTime();

            expect(TimestampUtils.compareMinute(base, earlier))
                .to.be.a('number')
                .and.to.equal(1);

            expect(TimestampUtils.compareMinute(base, later))
                .to.be.a('number')
                .and.to.equal(-1);

            expect(TimestampUtils.compareMinute(base, base))
                .to.be.a('number')
                .and.to.equal(0);
        });
    });

    describe('Example cases', () => {
        it('should handle example case 1: same day comparison', () => {
            const now = createTimestamp(2024, 3, 14, 10, 30);
            const sameDay = createTimestamp(2024, 3, 14, 15, 45);
            expect(TimestampUtils.compareDay(now, sameDay)).to.equal(0);
        });

        it('should handle example case 2: different days comparison', () => {
            const today = createTimestamp(2024, 3, 14, 10, 30);
            const tomorrow = createTimestamp(2024, 3, 15, 10, 30);
            expect(TimestampUtils.compareDay(today, tomorrow)).to.equal(-1);
        });

        it('should handle example case 3: month comparison', () => {
            const january = createTimestamp(2024, 1, 15);
            const february = createTimestamp(2024, 2, 1);
            expect(TimestampUtils.compareMonth(january, february)).to.equal(-1);
        });

        it('should handle example case 4: year comparison', () => {
            const year2023 = createTimestamp(2023, 12, 31);
            const year2024 = createTimestamp(2024, 1, 1);
            expect(TimestampUtils.compareYear(year2023, year2024)).to.equal(-1);
        });
    });

    describe('Edge cases', () => {
        it('should handle leap year day', () => {
            const leapDay = createTimestamp(2024, 2, 29);
            const nextDay = createTimestamp(2024, 3, 1);
            expect(TimestampUtils.compareDay(leapDay, nextDay)).to.equal(1);
        });

        it('should handle year boundary', () => {
            const lastDayOf2023 = createTimestamp(2023, 12, 31, 23, 59, 59, 999);
            const firstDayOf2024 = createTimestamp(2024, 1, 1, 0, 0, 0, 0);
            expect(TimestampUtils.compareDay(lastDayOf2023, firstDayOf2024)).to.equal(1);
            expect(TimestampUtils.compareMonth(lastDayOf2023, firstDayOf2024)).to.equal(1);
            expect(TimestampUtils.compareYear(lastDayOf2023, firstDayOf2024)).to.equal(-1);
        });
    });

    describe('addDays', () => {
        it('should add positive days correctly', () => {
            // Jan 1, 2023 00:00 + 1 day = Jan 2, 2023 00:00
            const baseTime = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            const expected = new Date(2023, 0, 2).getTime(); // Jan 2, 2023 00:00
            expect(TimestampUtils.addDays(baseTime, 1)).to.equal(expected);
        });

        it('should add negative days correctly', () => {
            // Jan 2, 2023 00:00 - 1 day = Jan 1, 2023 00:00
            const baseTime = new Date(2023, 0, 2).getTime(); // Jan 2, 2023 00:00
            const expected = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            expect(TimestampUtils.addDays(baseTime, -1)).to.equal(expected);
        });

        it('should handle crossing month boundary', () => {
            // Jan 31, 2023 00:00 + 1 day = Feb 1, 2023 00:00
            const baseTime = new Date(2023, 0, 31).getTime(); // Jan 31, 2023 00:00
            const expected = new Date(2023, 1, 1).getTime(); // Feb 1, 2023 00:00
            expect(TimestampUtils.addDays(baseTime, 1)).to.equal(expected);
        });

        it('should handle crossing year boundary', () => {
            // Dec 31, 2022 00:00 + 1 day = Jan 1, 2023 00:00
            const baseTime = new Date(2022, 11, 31).getTime(); // Dec 31, 2022 00:00
            const expected = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            expect(TimestampUtils.addDays(baseTime, 1)).to.equal(expected);
        });

        it('should handle multiple days addition', () => {
            // Jan 1, 2023 00:00 + 7 days = Jan 8, 2023 00:00
            const baseTime = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            const expected = new Date(2023, 0, 8).getTime(); // Jan 8, 2023 00:00
            expect(TimestampUtils.addDays(baseTime, 7)).to.equal(expected);
        });
    });

    describe('addHours', () => {
        it('should add positive hours correctly', () => {
            // Jan 1, 2023 00:00 + 2 hours = Jan 1, 2023 02:00
            const baseTime = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            const expected = new Date(2023, 0, 1, 2).getTime(); // Jan 1, 2023 02:00
            expect(TimestampUtils.addHours(baseTime, 2)).to.equal(expected);
        });

        it('should add negative hours correctly', () => {
            // Jan 1, 2023 02:00 - 2 hours = Jan 1, 2023 00:00
            const baseTime = new Date(2023, 0, 1, 2).getTime(); // Jan 1, 2023 02:00
            const expected = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            expect(TimestampUtils.addHours(baseTime, -2)).to.equal(expected);
        });

        it('should handle crossing day boundary', () => {
            // Jan 1, 2023 23:00 + 2 hours = Jan 2, 2023 01:00
            const baseTime = new Date(2023, 0, 1, 23).getTime(); // Jan 1, 2023 23:00
            const expected = new Date(2023, 0, 2, 1).getTime(); // Jan 2, 2023 01:00

            expect(TimestampUtils.addHours(baseTime, 2)).to.equal(expected);
        });
    });

    describe('addMinutes', () => {
        it('should add positive minutes correctly', () => {
            // Jan 1, 2023 00:00 + 30 minutes = Jan 1, 2023 00:30
            const baseTime = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            const expected = new Date(2023, 0, 1, 0, 30).getTime(); // Jan 1, 2023 00:30
            expect(TimestampUtils.addMinutes(baseTime, 30)).to.equal(expected);
        });

        it('should add negative minutes correctly', () => {
            // Jan 1, 2023 00:30 - 30 minutes = Jan 1, 2023 00:00
            const baseTime = new Date(2023, 0, 1, 0, 30).getTime(); // Jan 1, 2023 00:30
            const expected = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00
            expect(TimestampUtils.addMinutes(baseTime, -30)).to.equal(expected);
        });

        it('should handle crossing hour boundary', () => {
            // Jan 1, 2023 00:45 + 30 minutes = Jan 1, 2023 01:15
            const baseTime = new Date(2023, 0, 1, 0, 45).getTime(); // Jan 1, 2023 00:45
            const expected = new Date(2023, 0, 1, 1, 15).getTime(); // Jan 1, 2023 01:15
            expect(TimestampUtils.addMinutes(baseTime, 30)).to.equal(expected);
        });
    });

    describe('compareHour', () => {
        it('should return 0 for same hour', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 0);
            const t2 = createTimestamp(2024, 1, 1, 10, 59);
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(0);
        });

        it('should return -1 for earlier hour', () => {
            const t1 = createTimestamp(2024, 1, 1, 10);
            const t2 = createTimestamp(2024, 1, 1, 11);
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(-1);
        });

        it('should return 1 for later hour', () => {
            const t1 = createTimestamp(2024, 1, 1, 11);
            const t2 = createTimestamp(2024, 1, 1, 10);
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(1);
        });

        it('should handle crossing day boundary', () => {
            const t1 = createTimestamp(2024, 1, 1, 23);
            const t2 = createTimestamp(2024, 1, 2, 0);
            expect(TimestampUtils.compareHour(t1, t2)).to.equal(-1);
        });
    });

    describe('compareMinute', () => {
        it('should return 0 for same minute', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30, 0);
            const t2 = createTimestamp(2024, 1, 1, 10, 30, 59);
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(0);
        });

        it('should return -1 for earlier minute', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30);
            const t2 = createTimestamp(2024, 1, 1, 10, 31);
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(-1);
        });

        it('should return 1 for later minute', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 31);
            const t2 = createTimestamp(2024, 1, 1, 10, 30);
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(1);
        });

        it('should handle crossing hour boundary', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 59);
            const t2 = createTimestamp(2024, 1, 1, 11, 0);
            expect(TimestampUtils.compareMinute(t1, t2)).to.equal(-1);
        });
    });

    describe('compareSecond', () => {
        it('should return 0 for same second', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30, 45);
            const t2 = createTimestamp(2024, 1, 1, 10, 30, 45);
            expect(TimestampUtils.compareSecond(t1, t2)).to.equal(0);
        });

        it('should return -1 for earlier second', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30, 45);
            const t2 = createTimestamp(2024, 1, 1, 10, 30, 46);
            expect(TimestampUtils.compareSecond(t1, t2)).to.equal(-1);
        });

        it('should return 1 for later second', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30, 46);
            const t2 = createTimestamp(2024, 1, 1, 10, 30, 45);
            expect(TimestampUtils.compareSecond(t1, t2)).to.equal(1);
        });

        it('should handle crossing minute boundary', () => {
            const t1 = createTimestamp(2024, 1, 1, 10, 30, 59);
            const t2 = createTimestamp(2024, 1, 1, 10, 31, 0);
            expect(TimestampUtils.compareSecond(t1, t2)).to.equal(-1);
        });
    });

    describe('addSeconds', () => {
        it('should add positive seconds correctly', () => {
            // Jan 1, 2023 00:00:00 + 45 seconds = Jan 1, 2023 00:00:45
            const baseTime = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00:00
            const expected = new Date(2023, 0, 1, 0, 0, 45).getTime(); // Jan 1, 2023 00:00:45
            expect(TimestampUtils.addSeconds(baseTime, 45)).to.equal(expected);
        });

        it('should add negative seconds correctly', () => {
            // Jan 1, 2023 00:00:45 - 45 seconds = Jan 1, 2023 00:00:00
            const baseTime = new Date(2023, 0, 1, 0, 0, 45).getTime(); // Jan 1, 2023 00:00:45
            const expected = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 00:00:00
            expect(TimestampUtils.addSeconds(baseTime, -45)).to.equal(expected);
        });

        it('should handle crossing minute boundary', () => {
            // Jan 1, 2023 00:00:45 + 30 seconds = Jan 1, 2023 00:01:15
            const baseTime = new Date(2023, 0, 1, 0, 0, 45).getTime(); // Jan 1, 2023 00:00:45
            const expected = new Date(2023, 0, 1, 0, 1, 15).getTime(); // Jan 1, 2023 00:01:15
            expect(TimestampUtils.addSeconds(baseTime, 30)).to.equal(expected);
        });
    });

    describe('isInTimeRange', () => {
        it('should return true for timestamp within normal time range', () => {
            const timestamp = createTimestamp(2024, 1, 1, 10, 30, 0); // 10:30:00
            const startTime: TIME_OF_DAY = { hour: 9, minute: 0, second: 0 }; // 09:00:00
            const endTime: TIME_OF_DAY = { hour: 11, minute: 0, second: 0 }; // 11:00:00
            expect(TimestampUtils.isInTimeRange(timestamp, startTime, endTime)).to.be.true;
        });

        it('should return false for timestamp outside normal time range', () => {
            const timestamp = createTimestamp(2024, 1, 1, 12, 0, 0); // 12:00:00
            const startTime: TIME_OF_DAY = { hour: 9, minute: 0, second: 0 }; // 09:00:00
            const endTime: TIME_OF_DAY = { hour: 11, minute: 0, second: 0 }; // 11:00:00
            expect(TimestampUtils.isInTimeRange(timestamp, startTime, endTime)).to.be.false;
        });

        it('should handle cross-day time range correctly (23:00-01:00)', () => {
            const timestamp1 = createTimestamp(2024, 1, 1, 23, 30, 0); // 23:30:00
            const timestamp2 = createTimestamp(2024, 1, 1, 0, 30, 0); // 00:30:00
            const startTime: TIME_OF_DAY = { hour: 23, minute: 0, second: 0 }; // 23:00:00
            const endTime: TIME_OF_DAY = { hour: 1, minute: 0, second: 0 }; // 01:00:00

            expect(TimestampUtils.isInTimeRange(timestamp1, startTime, endTime)).to.be.true;
            expect(TimestampUtils.isInTimeRange(timestamp2, startTime, endTime)).to.be.true;
        });

        it('should handle exact boundary times', () => {
            const startTime: TIME_OF_DAY = { hour: 9, minute: 0, second: 0 }; // 09:00:00
            const endTime: TIME_OF_DAY = { hour: 17, minute: 0, second: 0 }; // 17:00:00

            const startBoundary = createTimestamp(2024, 1, 1, 9, 0, 0); // 09:00:00
            const endBoundary = createTimestamp(2024, 1, 1, 17, 0, 0); // 17:00:00

            expect(TimestampUtils.isInTimeRange(startBoundary, startTime, endTime)).to.be.true;
            expect(TimestampUtils.isInTimeRange(endBoundary, startTime, endTime)).to.be.true;
        });

        it('should handle edge cases with seconds precision', () => {
            const timestamp1 = createTimestamp(2024, 1, 1, 9, 0, 1); // 09:00:01
            const timestamp2 = createTimestamp(2024, 1, 1, 16, 59, 59); // 16:59:59
            const startTime: TIME_OF_DAY = { hour: 9, minute: 0, second: 0 }; // 09:00:00
            const endTime: TIME_OF_DAY = { hour: 17, minute: 0, second: 0 }; // 17:00:00

            expect(TimestampUtils.isInTimeRange(timestamp1, startTime, endTime)).to.be.true;
            expect(TimestampUtils.isInTimeRange(timestamp2, startTime, endTime)).to.be.true;
        });
    });

    describe('Performance tests', () => {
        it('should handle large number of comparisons efficiently', () => {
            const startTime = Date.now();
            const iterations = 100000;

            for (let i = 0; i < iterations; i++) {
                const t1 = createTimestamp(2024, 1, 1);
                const t2 = createTimestamp(2024, 1, 2);
                TimestampUtils.compare(t1, t2);
                TimestampUtils.compareYear(t1, t2);
                TimestampUtils.compareMonth(t1, t2);
                TimestampUtils.compareDay(t1, t2);
            }

            const endTime = Date.now();
            const duration = endTime - startTime;

            // 确保性能在可接受范围内（例如：100k次操作应在1秒内完成）
            expect(duration).to.be.lessThan(1000);
        });

        it('should perform consistently with different time ranges', () => {
            const timestamps = [
                createTimestamp(2020, 1, 1),
                createTimestamp(2021, 6, 15),
                createTimestamp(2022, 12, 31),
                createTimestamp(2023, 3, 1),
                createTimestamp(2024, 9, 30)
            ];

            const startTime = Date.now();

            // 对不同时间范围进行比较测试
            for (let i = 0; i < timestamps.length; i++) {
                for (let j = 0; j < timestamps.length; j++) {
                    TimestampUtils.compare(timestamps[i], timestamps[j]);
                    TimestampUtils.compareYear(timestamps[i], timestamps[j]);
                    TimestampUtils.compareMonth(timestamps[i], timestamps[j]);
                    TimestampUtils.compareDay(timestamps[i], timestamps[j]);
                }
            }

            const endTime = Date.now();
            const duration = endTime - startTime;

            // 确保不同时间范围的比较操作性能稳定
            expect(duration).to.be.lessThan(100);
        });

        it('should handle isInTimeRange performance efficiently', () => {
            const iterations = 10000;
            const testCases: Array<{
                timestamp: number;
                startTime: TIME_OF_DAY;
                endTime: TIME_OF_DAY;
            }> = [
                    {
                        timestamp: createTimestamp(2024, 1, 1, 10, 30),
                        startTime: { hour: 9, minute: 0, second: 0 },
                        endTime: { hour: 17, minute: 0, second: 0 }
                    },
                    {
                        timestamp: createTimestamp(2024, 1, 1, 23, 30),
                        startTime: { hour: 23, minute: 0, second: 0 },
                        endTime: { hour: 1, minute: 0, second: 0 }
                    },
                    {
                        timestamp: createTimestamp(2024, 1, 1, 0, 30),
                        startTime: { hour: 23, minute: 0, second: 0 },
                        endTime: { hour: 1, minute: 0, second: 0 }
                    }
                ];

            const startTime = Date.now();

            // 执行多次测试，包括普通时间范围和跨天时间范围
            for (let i = 0; i < iterations; i++) {
                testCases.forEach(({ timestamp, startTime: start, endTime: end }) => {
                    TimestampUtils.isInTimeRange(timestamp, start, end);
                });
            }

            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`================ duration: ${duration}`); // 2023-08-02T15:38:21.178Z:duration: 199
            // 确保1万次调用在可接受的时间范围内完成（例如：200ms内）
            expect(duration).to.be.lessThan(200);
        });
    });
});