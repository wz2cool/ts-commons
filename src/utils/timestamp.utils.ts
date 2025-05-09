import { NumberUtils } from "./number.utils";

export class TimestampUtils {

    /** Milliseconds in various time units */
    private static readonly MS_PER_SECOND = 1000;
    private static readonly MS_PER_MINUTE = 60000;
    private static readonly MS_PER_HOUR = 3600000;
    private static readonly MS_PER_DAY = 86400000;

    /**
     * Compares two timestamp and returns a value indicating whether one is less than, equal to, or greater than the other.
     * 
     * @param t1 the first timestamp
     * @param t2 the second timestamp
     * @returns 
     * -If less than 0, timestamp1 is less than timestamp2.
     * - If 0, timestamp1 equals timestamp2.
     * - If greater than 0, timestamp1 is greater than timestamp2.
     * Compares two timestamps and returns their relative order
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if t1 < t2, 0 if t1 === t2, 1 if t1 > t2
     * @example TimestampUtils.compare(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compare(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compare(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compare(t1: number, t2: number): number {
        return NumberUtils.compare(t1, t2);
    }

    /**
     * Compares two timestamps at year precision (ignoring months and days)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if year1 < year2, 0 if year1 === year2, 1 if year1 > year2
     * @example TimestampUtils.compareYear(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareYear(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareYear(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareYear(t1: number, t2: number): number {
        const year1 = this.getYear(t1);
        const year2 = this.getYear(t2);
        return NumberUtils.compare(year1, year2);
    }

    /**
     * Compares two timestamp and returns a value indicating whether one is less than, equal to, or greater than the other.
     *
     * @param t1 the first timestamp
     * @param t2 the second timestamp
     * @returns
     * -If less than 0, timestamp1 is less than timestamp2.
     * - If 0, timestamp1 equals timestamp2.
     * - If greater than 0, timestamp1 is greater than timestamp2.
     */
    private static getYear(timestamp: number): number {
        return new Date(timestamp).getFullYear();
    }

    /**
     * Compares two timestamps at month precision (ignoring days)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if month1 < month2, 0 if month1 === month2, 1 if month1 > month2
     * @example TimestampUtils.compareMonth(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareMonth(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareMonth(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareMonth(t1: number, t2: number): number {
        const month1 = this.getMonth(t1);
        const month2 = this.getMonth(t2);
        return NumberUtils.compare(month1, month2);
    }

    private static getMonth(timestamp: number): number {
        return new Date(timestamp).getMonth();
    }

    /**
     * Compares two timestamps at day precision (ignoring hours)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if day1 < day2, 0 if day1 === day2, 1 if day1 > day2
     * @example TimestampUtils.compareDay(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareDay(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareDay(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareDay(t1: number, t2: number): number {
        const day1 = this.getDay(t1);
        const day2 = this.getDay(t2);
        return NumberUtils.compare(day1, day2);
    }

    private static getDay(timestamp: number): number {
        return new Date(timestamp).getDate();
    }

    /**
     * Compares two timestamps at hour precision (ignoring minutes and seconds)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if hour1 < hour2, 0 if hour1 === hour2, 1 if hour1 > hour2
     * @example TimestampUtils.compareHour(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareHour(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareHour(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareHour(t1: number, t2: number): number {
        const hour1 = Math.floor(t1 / this.MS_PER_HOUR);
        const hour2 = Math.floor(t2 / this.MS_PER_HOUR);
        return NumberUtils.compare(hour1, hour2);
    }

    /**
     * Compares two timestamp and returns a value indicating whether one is less than, equal to, or greater than the other.
     *
     * @param t1 the first timestamp
     * @param t2 the second timestamp
     * @returns
     * -If less than 0, timestamp1 is less than timestamp2.
     * - If 0, timestamp1 equals timestamp2.    
     * - If greater than 0, timestamp1 is greater than timestamp2.
     * Compares two timestamps at minute precision (ignoring seconds)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if minute1 < minute2, 0 if minute1 === minute2, 1 if minute1 > minute2
     * @example TimestampUtils.compareMinute(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareMinute(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareMinute(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareMinute(t1: number, t2: number): number {
        const minute1 = Math.floor(t1 / this.MS_PER_MINUTE);
        const minute2 = Math.floor(t2 / this.MS_PER_MINUTE);
        return NumberUtils.compare(minute1, minute2);
    }

    /**
     * Compares two timestamps at second precision (ignoring milliseconds)
     * @param t1 First timestamp in milliseconds
     * @param t2 Second timestamp in milliseconds
     * @returns -1 if second1 < second2, 0 if second1 === second2, 1 if second1 > second2
     * @example TimestampUtils.compareSecond(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 1).getTime()) = 0
     * @example TimestampUtils.compareSecond(new Date(2023, 0, 1).getTime(), new Date(2023, 0, 2).getTime()) = -1
     * @example TimestampUtils.compareSecond(new Date(2023, 0, 2).getTime(), new Date(2023, 0, 1).getTime()) = 1
     */
    public static compareSecond(t1: number, t2: number): number {
        const second1 = Math.floor(t1 / this.MS_PER_SECOND);
        const second2 = Math.floor(t2 / this.MS_PER_SECOND);
        return NumberUtils.compare(second1, second2);
    }

    /**
     * Adds the specified number of days to a timestamp
     * @param timestamp Base timestamp in milliseconds
     * @param days Number of days to add
     * @returns New timestamp with added days
     * @example TimestampUtils.addDays(1672502400000, 1) = 1672588800000
     */
    public static addDays(timestamp: number, days: number): number {
        return timestamp + (days * this.MS_PER_DAY);
    }

    /**
     * Adds the specified number of hours to a timestamp
     * @param timestamp Base timestamp in milliseconds
     * @param hours Number of hours to add
     * @returns New timestamp with added hours
     * @example TimestampUtils.addHours(1672502400000, 1) = 1672506000000
     */
    public static addHours(timestamp: number, hours: number): number {
        return timestamp + (hours * this.MS_PER_HOUR);
    }

    /**
     * Adds the specified number of minutes to a timestamp
     * @param timestamp Base timestamp in milliseconds
     * @param minutes Number of minutes to add
     * @returns New timestamp with added minutes
     * @example TimestampUtils.addMinutes(1672502400000, 1) = 1672502460000
     */
    public static addMinutes(timestamp: number, minutes: number): number {
        return timestamp + (minutes * this.MS_PER_MINUTE);
    }

    /**
     * Adds the specified number of seconds to a timestamp
     * @param timestamp Base timestamp in milliseconds
     * @param seconds Number of seconds to add
     * @returns New timestamp with added seconds
     * @example TimestampUtils.addSeconds(1672502400000, 1) = 1672502401000
     */
    public static addSeconds(timestamp: number, seconds: number): number {
        return timestamp + (seconds * this.MS_PER_SECOND);
    }



    /**
     * Checks if a given timestamp falls within a specified time range (comparing only hours, minutes, and seconds)
     * @param timestamp The timestamp to check (in milliseconds)
     * @param startTime Start time containing hour, minute, second
     * @param endTime End time containing hour, minute, second
     * @returns true if the timestamp is within the specified range, false otherwise
     * @example TimestampUtils.isInTimeRange(new Date(2023, 0, 1, 10, 30, 0).getTime(), { hour: 9, minute: 0, second: 0 }, { hour: 11, minute: 0, second: 0 }) = true
     * @example TimestampUtils.isInTimeRange(new Date(2023, 0, 1, 23, 30, 0).getTime(), { hour: 23, minute: 0, second: 0 }, { hour: 1, minute: 0, second: 0 }) = true
     */
    public static isInTimeRange<T extends { hour: number, minute: number, second: number }>(timestamp: number, startTime: T, endTime: T): boolean {
        const date = new Date(timestamp);
        const currentSeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
        const startSeconds = startTime.hour * 3600 + startTime.minute * 60 + startTime.second;
        const endSeconds = endTime.hour * 3600 + endTime.minute * 60 + endTime.second;

        // Handle cross-day cases (e.g., 23:00 - 01:00)
        if (startSeconds > endSeconds) {
            return currentSeconds >= startSeconds || currentSeconds <= endSeconds;
        }
        return currentSeconds >= startSeconds && currentSeconds <= endSeconds;
    }

}