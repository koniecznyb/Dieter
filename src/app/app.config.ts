import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
  sessionTimeout: number;
}

export const PRODUCT_WEBAPI: AppConfig = {
  apiEndpoint: 'http://localhost:8080',
  sessionTimeout: 30000
};

export let APP_CONFIG = new OpaqueToken('app.config');
