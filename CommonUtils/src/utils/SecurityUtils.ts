/**
 * 安全工具类
 */
export class SecurityUtils {
  /**
   * Base64编码
   */
  static base64Encode(str: string): string {
    // 简化实现，实际应该使用更安全的Base64编码
    return btoa(str);
  }

  /**
   * Base64解码
   */
  static base64Decode(str: string): string {
    return atob(str);
  }

  /**
   * 简单（仅用于演示，生产环境请使用更安全的加密方式）
   */
  static simpleEncrypt(text: string, key: number = 5): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) + key);
    }
    return this.base64Encode(result);
  }

  /**
   * 简单解密
   */
  static simpleDecrypt(text: string, key: number = 5): string {
    const decoded = this.base64Decode(text);
    let result = '';
    for (let i = 0; i < decoded.length; i++) {
      result += String.fromCharCode(decoded.charCodeAt(i) - key);
    }
    return result;
  }

  /**
   * 生成MD5哈希（简化版）
   */
  static md5(str: string): string {
    // 简化实现，实际应该使用完整的MD5算法
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }
}

function btoa(str: string): string {
  throw new Error("Function not implemented.");
}

function atob(str: string): string {
  throw new Error("Function not implemented.");
}
