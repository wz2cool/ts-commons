import { NumberUtils } from "./number.utils";

export class TimestampUtils {

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
    public static compare(t1: number, t2: number): number {
        if (t1 === t2) {
            return 0;
        } else if (t1 < t2) {
            return -1;
        } else {
            return 1;
        }
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
    public static compareHour(t1: number, t2: number): number {
        let hour1 = Math.floor(t1 / 3600000);
        let hour2 = Math.floor(t2 / 3600000);
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
     */
    public static compareMinute(t1: number, t2: number): number {
        let minute1 = Math.floor(t1 / 60000);
        let minute2 = Math.floor(t2 / 60000);
        return NumberUtils.compare(minute1, minute2);
    }


    /**
     * 获取时间戳在当天的小时、分钟和秒
     * 
     * @param timestamp 时间戳
     * @returns 包含小时（0-23）、分钟（0-59）和秒（0-59）的对象
     */
    public static getTimeOfDay(timestamp: number): { hour: number; minute: number; second: number } {
        const totalSeconds = Math.floor(timestamp / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        const hour = totalHours % 24;
        const minute = totalMinutes % 60;
        const second = totalSeconds % 60;

        return { hour, minute, second };
    }
}