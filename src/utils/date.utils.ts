import { TIME_OF_DAY } from "../models/custom.type";
import { ObjectUtils } from "./object.utils";

export class DateUtils {
  private static timeFormatRegex = /yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|SSS|S/g;

  /**
   * Adds a number of years to a date returning a new object. The original Date is unchanged.
   * 
   * @param date the date, not null
   * @param years the years to add, may be negative
   * @returns the new Date with the amount added
   * @example DateUtils.addYears(new Date(2018, 5, 1), 1) = new Date(2019, 5, 1)
   */
  public static addYears(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
  }

  /**
   * Adds a number of months to a date returning a new object. The original Date is unchanged.
   * 
   * @param date the date, not null
   * @param months the months to add, may be negative
   * @returns the new Date with the months added
   * @example DateUtils.addMonths(new Date(2018, 5, 1), 1) = new Date(2018, 6, 1)
   */
  public static addMonths(date: Date, months: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  }

  /**
   * Adds a number of days to a date returning a new object. The original Date is unchanged.
   * 
   * @param date the date, not null
   * @param days the days to add, may be negative
   * @returns the new Date with the days added
   * @example DateUtils.addDays(new Date(2018, 5, 1), 1) = new Date(2018, 5, 2)
   */
  public static addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 86400000);
  }

  /**
   * Adds a number of hours to a date returning a new object. The original Date is unchanged.
   * 
   * @param date the date, not null
   * @param hours the hours to add, may be negative
   * @returns the new Date with the hours added
   * @example DateUtils.addHours(new Date(2018, 5, 1), 1) = new Date(2018, 5, 1, 1)
   */
  public static addHours(date: Date, hours: number): Date {
    return new Date(date.getTime() + hours * 3600000);
  }

  /**
   * Adds a number of minutes to a date returning a new object. The original Date is unchanged.
   * 
   * @param date date – the date, not null
   * @param minutes the minutes to add, may be negative
   * @returns the new Date with the minutes added
   * @example DateUtils.addMinutes(new Date(2018, 5, 1), 1) = new Date(2018, 5, 1, 0, 1)
   */
  public static addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }

  /**
   * Adds a number of seconds to a date returning a new object. The original Date is unchanged.
   * 
   * @param date the date, not null
   * @param seconds the seconds to add, may be negative
   * @returns the new Date with the seconds added
   * @example DateUtils.addSeconds(new Date(2018, 5, 1), 1) = new Date(2018, 5, 1, 0, 0, 1)
   */
  public static addSeconds(date: Date, seconds: number): Date {
    return new Date(date.getTime() + seconds * 1000);
  }

  /**
   * The day of week.
   * 
   * @param date the date, not null
   * @returns the day of week.
   * @example DateUtils.getDayOfWeek(new Date(2024, 11, 23)) = 6
   */
  public static getDayOfWeek(date: Date): number {
    return date.getDay();
  }

  /**
   * The day of month 
   * 
   * @param date the date, not null.
   * @returns the day of month.
   * @example DateUtils.getDayOfMonth(new Date(2024, 11, 23)) = 23
   */
  public static getDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }


  /**
   * Returns the number of milliseconds that have elapsed since 1970-01-01T00:00:00.000Z.
   * @param date
   * @example DateUtils.dateToTimestamp(null) = 0
   * @example DateUtils.dateToTimestamp(undefined) = 0
   * @example DateUtils.dateToTimestamp(new Date("Tue, 19 Jun 2018 00:00:00 GMT")) = 1529366400000
   */
  public static dateToTimestamp(date: Date): number {
    if (ObjectUtils.isNullOrUndefined(date)) {
      return 0;
    }
    return date.getTime();
  }

  /**
   * Get date from the number of milliseconds that have elapsed since 1970-01-01T00:00:00.000Z.
   * @param timestamp
   * @example DateUtils.timestampToDate(1529366400) = new Date("Tue, 19 Jun 2018 00:00:00 GMT")
   */
  public static timestampToDate(timestamp: number): Date {
    return new Date(timestamp);
  }

  /**
   * Get currnet date without hours, minutes and seconds.
   */
  public static getToday(): Date {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }

  /**
   * Converts the value of the current date to its equivalent string representation
   * using the specified format.
   * @param date
   * @param format
   * "yyyy" Year represented by four digits.
   * "yy" Year as last two digits; leading zero for years less than 10.
   * "MM" Month as digits; leading zero for single-digit months.
   * "M" Month as digits; no leading zero for single-digit months.
   * "dd" Day of the month as digits; leading zero for single-digit days.
   * "d" Day of the month as digits; no leading zero for single-digit days.
   * "HH" Hours; leading zero for single-digit hours (24-hour clock).
   * "H" Hours; no leading zero for single-digit hours (24-hour clock).
   * "mm" Minutes; leading zero for single-digit minutes.
   * "m" Minutes; no leading zero for single-digit minutes.
   * "ss" Seconds; leading zero for single-digit seconds.
   * "s" Seconds; no leading zero for single-digit seconds.
   * "SSS" Milliseconds; leading zero for single-digit seconds.
   * "S" Milliseconds; no leading zero for single-digit seconds.
   */
  public static toString(date: Date, format: string): string {
    return format.replace(this.timeFormatRegex, matched =>
      this.getTimeFormat(false, date, matched)
    );
  }

  /**
   * Converts the value of the current UTC date to its equivalent string representation
   * using the specified format.
   * @param date
   * @param format
   * "yyyy" Year represented by four digits.
   * "yy" Year as last two digits; leading zero for years less than 10.
   * "MM" Month as digits; leading zero for single-digit months.
   * "M" Month as digits; no leading zero for single-digit months.
   * "dd" Day of the month as digits; leading zero for single-digit days.
   * "d" Day of the month as digits; no leading zero for single-digit days.
   * "HH" Hours; leading zero for single-digit hours (24-hour clock).
   * "H" Hours; no leading zero for single-digit hours (24-hour clock).
   * "mm" Minutes; leading zero for single-digit minutes.
   * "m" Minutes; no leading zero for single-digit minutes.
   * "ss" Seconds; leading zero for single-digit seconds.
   * "s" Seconds; no leading zero for single-digit seconds.
   * "SSS" Milliseconds; leading zero for single-digit seconds.
   * "S" Milliseconds; no leading zero for single-digit seconds.
   */
  public static toUTCString(date: Date, format: string): string {
    return format.replace(this.timeFormatRegex, matched =>
      this.getTimeFormat(true, date, matched)
    );
  }

  /**
   *  Compares two date and returns a value indicating whether one is less than, equal to, or greater than the other.
   * @param date1
   * @param date2
   * @returns
   * - If less than 0, date1 is less than date2.
   * - If 0, date1 equals date2.
   * - If greater than 0, date1 is greater than date2.
   */
  public static compare(date1: Date, date2: Date): number {
    const date1Time = date1.getTime();
    const date2Time = date2.getTime();

    if (date1Time === date2Time) {
      return 0;
    } else if (date1Time < date2Time) {
      return -1;
    } else {
      return 1;
    }
  }

  /**
    * Checks if a given date falls within a specified time range (comparing only hours, minutes, and seconds)
    * @param timestamp The timestamp to check (in milliseconds)
    * @param startTime Start time containing hour, minute, second
    * @param endTime End time containing hour, minute, second
    * @returns true if the timestamp is within the specified range, false otherwise
    * @example TimestampUtils.isInTimeRange(new Date(2023, 0, 1, 10, 30, 0), { hour: 9, minute: 0, second: 0 }, { hour: 11, minute: 0, second: 0 }) = true
    * @example TimestampUtils.isInTimeRange(new Date(2023, 0, 1, 23, 30, 0), { hour: 23, minute: 0, second: 0 }, { hour: 1, minute: 0, second: 0 }) = true
    */
  public static isInTimeRange<T extends TIME_OF_DAY>(date: Date, startTime: T, endTime: T): boolean {
    const currentSeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    const startSeconds = startTime.hour * 3600 + startTime.minute * 60 + startTime.second;
    const endSeconds = endTime.hour * 3600 + endTime.minute * 60 + endTime.second;

    // Handle cross-day cases (e.g., 23:00 - 01:00)
    if (startSeconds > endSeconds) {
      return currentSeconds >= startSeconds || currentSeconds <= endSeconds;
    }
    return currentSeconds >= startSeconds && currentSeconds <= endSeconds;
  }

  /**
   * Checks if two dates are the same at the specified unit of granularity.
   * 
   * @param date1 The first date to compare
   * @param date2 The second date to compare
   * @param unit The unit to compare ('year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond')
   * @returns true if the dates are the same at the specified unit, false otherwise
   * @example DateUtils.isSame(new Date(2024, 0, 1), new Date(2024, 0, 1), 'day') = true
   * @example DateUtils.isSame(new Date(2024, 0, 1), new Date(2024, 0, 2), 'year') = true
   */
  public static isSame(date1: Date, date2: Date, unit?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'): boolean {
    if (ObjectUtils.isNullOrUndefined(date1) || ObjectUtils.isNullOrUndefined(date2)) {
      return false;
    }

    if (!unit) {
      return date1.getTime() === date2.getTime();
    }

    switch (unit) {
      case 'year':
        return date1.getFullYear() === date2.getFullYear();
      case 'month':
        return date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth();
      case 'day':
        return date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate();
      case 'hour':
        return date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate() &&
          date1.getHours() === date2.getHours();
      case 'minute':
        return date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate() &&
          date1.getHours() === date2.getHours() &&
          date1.getMinutes() === date2.getMinutes();
      case 'second':
        return date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate() &&
          date1.getHours() === date2.getHours() &&
          date1.getMinutes() === date2.getMinutes() &&
          date1.getSeconds() === date2.getSeconds();
      case 'millisecond':
        return date1.getTime() === date2.getTime();
      default:
        return false;
    }
  }

  // tslint:disable-next-line: cognitive-complexity
  private static getTimeFormat(
    isUTC: boolean,
    date: Date,
    formatKey: string
  ): string {
    switch (formatKey) {
      case "yyyy":
        return (isUTC ? date.getUTCFullYear() : date.getFullYear()).toString();
      case "yy":
        return (isUTC ? date.getUTCFullYear() : date.getFullYear())
          .toString()
          .substr(2);
      case "MM":
        const month = isUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1;
        return month >= 10 ? month.toString() : `0${month}`;
      case "M":
        return (isUTC
          ? date.getUTCMonth() + 1
          : date.getMonth() + 1
        ).toString();
      case "dd":
        const day = isUTC ? date.getUTCDate() : date.getDate();
        return day >= 10 ? day.toString() : `0${day}`;
      case "d":
        return (isUTC ? date.getUTCDate() : date.getDate()).toString();
      case "HH":
        const hour = isUTC ? date.getUTCHours() : date.getHours();
        return hour >= 10 ? hour.toString() : `0${hour}`;
      case "H":
        return (isUTC ? date.getUTCHours() : date.getHours()).toString();
      case "mm":
        const min = isUTC ? date.getUTCMinutes() : date.getMinutes();
        return min >= 10 ? min.toString() : `0${min}`;
      case "m":
        return (isUTC ? date.getUTCMinutes() : date.getMinutes()).toString();
      case "ss":
        const seconds = isUTC ? date.getUTCSeconds() : date.getSeconds();
        return seconds >= 10 ? seconds.toString() : `0${seconds}`;
      case "s":
        return (isUTC ? date.getUTCSeconds() : date.getSeconds()).toString();
      case "SSS":
        const milliseconds = isUTC
          ? date.getUTCMilliseconds()
          : date.getMilliseconds();
        return milliseconds >= 100
          ? milliseconds.toString()
          : milliseconds >= 10
            ? `0${milliseconds}`
            : `00${milliseconds}`;
      case "S":
        return (isUTC
          ? date.getUTCMilliseconds()
          : date.getMilliseconds()
        ).toString();
      default:
        return "";
    }
  }
}
