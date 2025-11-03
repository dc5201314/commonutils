export interface DeviceInfo {
  brand: string;
  manufacturer: string;
  model: string;
  product: string;
  language: string;
  region: string;
  osFullName: string;
  sdkApiVersion: number;
}

export interface ScreenInfo {
  width: number;
  height: number;
  density: number;
  orientation: 'portrait' | 'landscape';
}

export interface NetworkStatus {
  isConnected: boolean;
  type: string;
  hasInternet: boolean;
}

export interface StorageOptions {
  encrypt?: boolean;
  expire?: number;
}

export interface NetworkConfig {
  baseURL: string;
  timeout: number;
  retryCount: number;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: any) => boolean;
}

export type PasswordStrength = 'weak' | 'medium' | 'strong';
