/**
 * 字符串工具类
 */
export class StringUtils {
  /**
   * 检查字符串是否为空
   */
  static isEmpty(str: string): boolean {
    return !str || str.trim().length === 0;
  }

  /**
   * 格式化字符串（支持模板变量）
   */
  static format(template: string, ...args: any[]): string {
    return template.replace(/{(\d+)}/g, (match, index) => {
      return typeof args[index] !== 'undefined' ? args[index] : match;
    });
  }

  /**
   * 截断字符串
   */
  static truncate(str: string, length: number, suffix: string = '...'): string {
    if (str.length <= length) return str;
    return str.substring(0, length) + suffix;
  }

  /**
   * 生成随机字符串
   */
  static random(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * 驼峰命名转下划线命名
   */
  static camelToSnake(str: string): string {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  }

  /**
   * 下划线命名转驼峰命名
   */
  static snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  /**
   * 隐藏手机号中间四位
   */
  static maskPhone(phone: string): string {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }

  /**
   * 验证邮箱格式
   */
  static isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
