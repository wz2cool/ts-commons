import { ObjectUtils } from "./object.utils";
import { NumberUtils } from "./number.utils";

export class DateUtils {
  public static dateToTimestamp(date: Date): number {
    if (ObjectUtils.isNullOrUndefined(date)) {
      return 0;
    }
    return Math.round(date.getTime() / 1000);
  }

  public static timestampToDate(timestamp: number): Date {
    if (!NumberUtils.isSafeInteger(timestamp)) {
      return null;
    }
    return new Date(timestamp * 1000);
  }
}
