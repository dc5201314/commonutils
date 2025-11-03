import { PasswordStrength } from "../types";

/**
 * 验证工具类
 */
export class ValidationUtils {
  /**
   * 验证手机号格式
   */
  static isPhoneNumber(phone: string): boolean {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  }

  /**
   * 验证身份证格式
   */
  static isIdCard(idCard: string): boolean {
    const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return idCardRegex.test(idCard);
  }

  /**
   * 验证邮箱格式
   */
  static isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * 验证URL格式
   */
  static isURL(url: string): boolean {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  }

  /**
   * 验证密码强度
   */
  static checkPasswordStrength(password: string): PasswordStrength {
    let score = 0;

    // 长度检查
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // 包含数字
    if (/\d/.test(password)) score++;

    // 包含小写字母
    if (/[a-z]/.test(password)) score++;

    // 包含大写字母
    if (/[A-Z]/.test(password)) score++;

    // 包含特殊字符
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;

    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    return 'strong';
  }
}
