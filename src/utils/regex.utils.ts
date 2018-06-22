export class RegexUtils {
  /**
   * * => \*
   * ? => \?
   * { => \{
   * } => \}
   * @param str target string
   */
  public static escapeRegExp(str: string): string {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
}
