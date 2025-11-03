import { preferences } from "@kit.ArkData";


/*
 * 存储工具类
 */
export class StorageUtils {
  private static preferences: preferences.Preferences | null = null;

  /**
   * 初始化存储
   */
  static async initStorage(context: any, name: string = 'common_utils'): Promise<void> {
    try {
      this.preferences = await preferences.getPreferences(context, name);
    } catch (error) {
      console.error('Storage initialization failed:', error);
    }
  }

  /**
   * 设置存储值
   */
  static async set(key: string, value: any): Promise<boolean> {
    if (!this.preferences) return false;

    try {
      await this.preferences.put(key, value);
      await this.preferences.flush();
      return true;
    } catch (error) {
      console.error('Storage set failed:', error);
      return false;
    }
  }

  /**
   * 获取存储值
   */
  static async get<T>(key: string, defaultValue?: T): Promise<T | null> {
    if (!this.preferences) return defaultValue || null;

    try {
      const value = await this.preferences.get(key, typeof defaultValue);
      return value as T;
    } catch (error) {
      console.error('Storage get failed:', error);
      return defaultValue || null;
    }
  }

  /**
   * 删除存储值
   */
  static async delete(key: string): Promise<boolean> {
    if (!this.preferences) return false;

    try {
      await this.preferences.delete(key);
      await this.preferences.flush();
      return true;
    } catch (error) {
      console.error('Storage delete failed:', error);
      return false;
    }
  }

  /**
   * 清空存储
   */
  static async clear(): Promise<boolean> {
    if (!this.preferences) return false;

    try {
      await this.preferences.clear();
      return true;
    } catch (error) {
      console.error('Storage clear failed:', error);
      return false;
    }
  }
}
