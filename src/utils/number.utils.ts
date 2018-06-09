import { ObjectUtils } from "./object.utils";

export class NumberUtils {
  /**
   * Number.isInteger(0);         // true
   * Number.isInteger(1);         // true
   * Number.isInteger(-100000);   // true
   * Number.isInteger(99999999999999999999999); // true
   *
   * Number.isInteger(0.1);       // false
   * Number.isInteger(Math.PI);   // false
   *
   * Number.isInteger(NaN);       // false
   * Number.isInteger(Infinity);  // false
   * Number.isInteger(-Infinity); // false
   * Number.isInteger('10');      // false
   * Number.isInteger(true);      // false
   * Number.isInteger(false);     // false
   * Number.isInteger([1]);       // false
   */
  public static isInteger(value: number): boolean {
    return (
      ObjectUtils.isNumber(value) &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  }
}
