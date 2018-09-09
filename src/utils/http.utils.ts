import { ObjectUtils } from "./object.utils";

export class HttpUtils {
  /**
   * Get all cookie values from cookie string;
   * @param cookie
   * @example HttpUtils.getCookies(document.cookie)
   */
  public static getCookies(cookie: string): { [key: string]: string } {
    return this.getParams(cookie, "; ");
  }

  /**
   * Get all query values from url;
   * @param cookie
   * @example HttpUtils.getQueryParams("http://www.google.com/?search=test&id=123")
   */
  public static getQueryParams(url: string): { [key: string]: string } {
    if (!ObjectUtils.isString(url)) {
      return {};
    }
    const urlItems = url.split("?");
    const queryString = urlItems.length === 1 ? urlItems[0] : urlItems[1];
    return this.getParams(queryString, "&");
  }

  // solve a=1[;|&]b=2[;|&]c=3
  private static getParams(
    paramStr: string,
    // tslint:disable-next-line:trailing-comma
    splitChar: string
  ): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    if (!ObjectUtils.isString(paramStr) || !ObjectUtils.isString(splitChar)) {
      return result;
    }

    const parts = paramStr.split(splitChar);
    for (const part of parts) {
      const firstEqualIndex = part.indexOf("=");
      if (firstEqualIndex > 0) {
        const key = part.substring(0, firstEqualIndex);
        const value = part.substring(firstEqualIndex + 1, part.length);
        result[key] = value;
      } else {
        // ignore invalid key to cookie map.
      }
    }
    return result;
  }
}
