/**
 * 性能工具类
 */
export class PerformanceUtils {
  private static timers: Map<string, number> = new Map();

  /**
   * 开始性能计时
   */
  static startTimer(name: string): void {
    this.timers.set(name, Date.now());
  }

  /**
   * 结束性能计时并返回耗时
   */
  static endTimer(name: string): number {
    const startTime = this.timers.get(name);
    if (!startTime) return 0;

    this.timers.delete(name);
    return Date.now() - startTime;
  }

  /**
   * 测量函数执行时间
   */
  static measureExecution<T>(fn: () => T): { result: T; duration: number } {
    const startTime = Date.now();
    const result = fn();
    const duration = Date.now() - startTime;

    return { result, duration };
  }

  /**
   * 防抖函数
   */
  static debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | undefined;

    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, wait) as unknown as number;
    };
  }

  /**
   * 节流函数
   */
  static throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false;

    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(null, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
}
