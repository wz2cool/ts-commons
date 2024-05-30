import { ArrayUtils } from "./array.utils";
import { ObjectUtils } from "./object.utils";
import { NullableString, StringUtils } from "./string.utils";

export class ExtUtils {

    public static isEmpty<T>(value: T[]): boolean
    public static isEmpty(value: NullableString): boolean
    /**
     * Determines whether the given value is empty.
     * @param value The value which can be of type string or array.
     * @returns A boolean indicating true if the value is an empty string or an empty array; false otherwise.
     * @remarks This method dynamically calls the appropriate empty check method (StringUtils.isEmpty or ArrayUtils.isEmpty) based on the type of value.
     */
    public static isEmpty<T>(value: T[] | NullableString): boolean {
        // Checks for emptiness by invoking the relevant method depending on the type of value

        if (ObjectUtils.isArray(value)) {
            return ArrayUtils.isEmpty(value);
        } else {
            return StringUtils.isEmpty(value);
        }
    }

    public static isNotEmpty<T>(value: T[]): boolean
    public static isNotEmpty(value: NullableString): value is NonNullable<NullableString>
    /**
     * Checks whether the provided value is not empty.
     * This function accepts an array or a type that can be a string, null, or undefined (NullableString) and performs
     * the appropriate non-empty check based on the input type.
     * 
     * @param value - The array or string to be checked. It can be an array of any type or a string, null, or undefined.
     * @returns {boolean} - Returns true if the provided value is not empty; otherwise, returns false.
     */
    public static isNotEmpty<T>(value: T[] | NullableString): any {
        // Check if value is an array, and if so, use ArrayUtils.isNotEmpty for array's non-empty check
        if (ObjectUtils.isArray(value)) {
            return ArrayUtils.isNotEmpty(value);
        } else {
            // If value is not an array, treat it as a string and use StringUtils.isNotEmpty for string's non-empty check
            return StringUtils.isNotEmpty(value);
        }
    }

}