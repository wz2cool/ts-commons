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

  public static trimToNull(cs: string): string {
    const tmp = this.trim(cs);
    return this.isBlank(tmp) ? null : tmp;
  }

  public static trimToEmpty(cs: string): string {
    const tmp = this.trim(cs);
    return this.isBlank(tmp) ? "" : tmp;
  }
}
