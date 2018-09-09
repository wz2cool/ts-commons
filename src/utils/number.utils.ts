import { ObjectUtils } from "./object.utils";

// isInteger and isSafeInteger cannot be found in IE
export class NumberUtils {
  public static readonly MAX_SAFE_INTEGER: number = 9007199254740991;
  public static readonly MIN_SAFE_INTEGER: number = -9007199254740991;

  /**
   * check whether current value is integer
   * @param value
   * @example Number.isInteger(0);         // true
   * @example Number.isInteger(1);         // true
   * @example Number.isInteger(-100000);   // true
   * @example Number.isInteger(99999999999999999999999); // true
   * @example Number.isInteger(0.1);       // false
   * @example Number.isInteger(Math.PI);   // false
   * @example Number.isInteger(NaN);       // false
   * @example Number.isInteger(Infinity);  // false
   * @example Number.isInteger(-Infinity); // false
   * @example Number.isInteger('10');      // false
   * @example Number.isInteger(true);      // false
   * @example Number.isInteger(false);     // false
   * @example Number.isInteger([1]);       // false
   */
  public static isInteger(value: any): boolean {
    return (
      ObjectUtils.isNumber(value) &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  }

  /**
   * check whether current value is safe integer
   * @param value
   * @example Number.isSafeInteger(3);                    // true
   * @example Number.isSafeInteger(Math.pow(2, 53));      // false
   * @example Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
   * @example Number.isSafeInteger(NaN);                  // false
   * @example Number.isSafeInteger(Infinity);             // false
   * @example Number.isSafeInteger('3');                  // false
   * @example Number.isSafeInteger(3.1);                  // false
   * @example Number.isSafeInteger(3.0);                  // true
   */
  public static isSafeInteger(value: any): boolean {
    return this.isInteger(value) && Math.abs(value) <= this.MAX_SAFE_INTEGER;
  }
}
