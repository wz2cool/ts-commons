import { ObjectUtils } from "./object.utils";

// isInteger and isSafeInteger cannot be found in IE
export class NumberUtils {
  public static readonly MAX_SAFE_INTEGER: number = 9007199254740991;
  public static readonly MIN_SAFE_INTEGER: number = -9007199254740991;

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
  public static isInteger(value: any): boolean {
    return (
      ObjectUtils.isNumber(value) &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  }

  /**
   * Number.isSafeInteger(3);                    // true
   * Number.isSafeInteger(Math.pow(2, 53));      // false
   * Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
   * Number.isSafeInteger(NaN);                  // false
   * Number.isSafeInteger(Infinity);             // false
   * Number.isSafeInteger('3');                  // false
   * Number.isSafeInteger(3.1);                  // false
   * Number.isSafeInteger(3.0);                  // true
   */
  public static isSafeInteger(value: any): boolean {
    return this.isInteger(value) && Math.abs(value) <= this.MAX_SAFE_INTEGER;
  }
}
