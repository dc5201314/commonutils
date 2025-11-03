export const ERROR_CODES = {
  SUCCESS: 0,
  NETWORK_ERROR: 1001,
  STORAGE_ERROR: 1002,
  VALIDATION_ERROR: 1003,
  FILE_ERROR: 1004,
  UNKNOWN_ERROR: 9999,
} as const;

export const NETWORK_CONSTANTS = {
  TIMEOUT: 10000,
  MAX_RETRY_COUNT: 3,
  RETRY_DELAY: 1000,
} as const;

export const DATE_FORMATS = {
  DEFAULT: 'YYYY-MM-DD',
  FULL: 'YYYY-MM-DD HH:mm:ss',
  TIME: 'HH:mm:ss',
  CHINESE: 'YYYY年MM月DD日',
} as const;

export const STORAGE_KEYS = {
  USER_INFO: 'user_info',
  APP_CONFIG: 'app_config',
  CACHE_DATA: 'cache_data',
} as const;
