import { ObjectUtils } from "./object.utils";

export class StringUtils {
  public static isEmpty(cs: string): boolean {
    return ObjectUtils.isNullOrUndefined(cs) || cs.length === 0;
  }

  public static isNotEmpty(cs: string): boolean {
    return !this.isEmpty(cs);
  }

  public static isBlank(cs: string): boolean {
    return ObjectUtils.isNullOrUndefined(cs) || cs.trim() === "";
  }

  public static isNotBlank(cs: string): boolean {
    return !this.isBlank(cs);
  }

  public static trim(cs: string): string {
    if (ObjectUtils.isNullOrUndefined(cs)) {
      return cs;
    } else {
      return cs.replace("\b", "").trim();
    }
  }

  public static strip(cs: string): string {
    if (ObjectUtils.isNullOrUndefined(cs)) {
      return cs;
    } else {
      return cs.trim();
    }
  }
}
