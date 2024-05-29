declare var setTimeout: any;
declare var clearInterval: any;

export class ThreadUtils {
  

  public static sleep(interval: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const windowHandle = setTimeout(() => {
        clearInterval(windowHandle);
        resolve();
      }, interval);
    });
  }
}
