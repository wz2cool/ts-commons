import { NumberUtils } from "./number.utils";

export class TimestampUtils {

    /**
     * Compares two date and returns a value indicating whether one is less than, equal to, or greater than the other.
     * 
     * @param t1 第一个时间戳
     * @param t2 第二个时间戳
     * @returns 
     * -If less than 0, date1 is less than date2.
     * - If 0, date1 equals date2.
     * - If greater than 0, date1 is greater than date2.
     */
    public static compare(t1: number, t2: number): number {
        if (t1 === t2) {
            return 0;
        } else if (t1 < t2) {
            return -1;
        } else {
            return 1;
        }
    }

    

    public static compareHour(t1: number, t2: number): number {
        let hour1 = Math.floor(t1 / 3600000);
        let hour2 = Math.floor(t2 / 3600000);
        return NumberUtils.compare(hour1, hour2);
    }

    public static compareMinute(t1: number, t2: number): number {
        let minute1 = Math.floor(t1 / 60000);
        let minute2 = Math.floor(t2 / 60000);
        return NumberUtils.compare(minute1, minute2);
    }
}