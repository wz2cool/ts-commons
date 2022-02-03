export class ActionUtils {
    /**
     * if test is true, execute action
     * @param test whether is true
     * @param action action
     */
    public static ifTrue(test: boolean, action: () => void): void {
        if (test) {
            action();
        }
    }

    /**
     * if test is false, execute action
     * @param test whether is false
     * @param action action
     */
    public static ifFalse(test: boolean, action: () => void): void {
        if (!test) {
            action();
        }
    }
}