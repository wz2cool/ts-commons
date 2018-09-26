import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class DateUtils {
  private static timeFormatRegex = /yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|SSS|S/g;

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
    if (!NumberUtils.isSafeInteger(timestamp)) {
      return null;
    }

    if (timestamp > 1000000000000) {
      return new Date(timestamp);
    } else {
      return new Date(timestamp * 1000);
    }
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
    const result = format.replace(this.timeFormatRegex, matched =>
      this.getTimeFormat(false, date, matched)
    );
    return result;
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
    const result = format.replace(this.timeFormatRegex, matched =>
      this.getTimeFormat(true, date, matched)
    );
    return result;
  }

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
