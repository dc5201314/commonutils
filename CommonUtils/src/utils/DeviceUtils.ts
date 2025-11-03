import { DeviceInfo, ScreenInfo } from "../types";
import { deviceInfo } from "@kit.BasicServicesKit";


/**
 * 设备工具类
 */
export class DeviceUtils {
  /**
   * 获取设备信息
   */
  static getDeviceInfo(): DeviceInfo {
    return {
      brand: deviceInfo.brand,
      manufacturer: deviceInfo.manufacture,
      model: deviceInfo.productModel,
      product: deviceInfo.productSeries,
      language: deviceInfo.productModelAlias,
      region: deviceInfo.hardwareModel,
      osFullName: deviceInfo.osFullName,
      sdkApiVersion: deviceInfo.sdkApiVersion
    };
  }

  /**
   * 判断是否为平板
   */
  static isTablet(): boolean {
    return deviceInfo.deviceType === 'tablet';
  }

  /**
   * 判断是否为手机
   */
  static isPhone(): boolean {
    return deviceInfo.deviceType === 'phone';
  }

  /**
   * 获取屏幕信息
   */
  static getScreenInfo(): ScreenInfo {
    // 在实际应用中，这里应该获取真实的屏幕信息
    return {
      width: 1080,
      height: 2340,
      density: 3.0,
      orientation: 'portrait'
    };
  }
}
