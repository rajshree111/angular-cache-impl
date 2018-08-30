import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging-interceptor'; //no need
import { CachingInterceptor } from './caching-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },   //no need
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
];
