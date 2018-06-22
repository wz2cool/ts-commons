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

  public static validateEmail(email: string): boolean {
    // from: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  }
}
