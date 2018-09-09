export class RegexUtils {
  /**
   * Escapes all reserved characters for regular expressions by preceding them with a backslash.
   * @param str target string
   * @example * => \*
   * @example ? => \?
   * @example { => \{
   * @example } => \}
   */
  public static escapeRegExp(str: string): string {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  /**
   * 3 to 16 letters, numbers, underscores, or hyphens
   * @param username
   */
  public static validateUsername(username: string): boolean {
    const regex = /^[a-z0-9_-]{3,16}$/;
    return regex.test(username);
  }

  /**
   * Minimum eight characters, at least one letter and one number:
   * @param password
   */
  public static validatePassword(password: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }

  /**
   * valid current input is email format.
   */
  public static validateEmail(email: string): boolean {
    // from: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  }
}
