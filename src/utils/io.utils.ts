export class IOUtils {
  /**
   * get externsion of path
   *
   * @param path url, filename or filepath
   * @returns the extension of path
   */
  public static getExtension(path: string): string {
    const i = path.lastIndexOf(".");
    if (i < 0) {
      return "";
    } else {
      return path.substring(i);
    }
  }
}
