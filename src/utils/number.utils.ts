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

  /**
   * Returns a string representing a number in fixed-point notation.
   * @param value target value.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   * @param defaultValue default value if value is empty. 
   */
  public static toFixed(value: number | null | undefined, fractionDigits: number, defaultValue?: string): string {
    if (ObjectUtils.isNullOrUndefined(value)) {
      return ObjectUtils.getOrDefault(defaultValue, "");
    }
    return value.toFixed(fractionDigits);
  }

  /**
   * compare two numbers
   * @param num1 number 1
   * @param num2 number 2
   * @returns 0: num1 === num2, -1: num1 < num2, 1: num1 > num2
   */
  public static compare(num1: number, num2: number): number {
    if (num1 === num2) {
      return 0;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 1;
    }
  }
}
