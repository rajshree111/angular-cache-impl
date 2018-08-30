import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheMapService } from '../services/cache-map.service';

const CACHABLE_URL = '/api/booksSearch';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: CacheMapService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRequestCachable(req)) {
            return next.handle(req);
        }
        const cachedResponse = this.cache.get(req);
        if (cachedResponse !== null) {
          console.log('just sending the cached response observable to the http request from INTERCEPT....of CachingInterceptor');
           return of(cachedResponse);
        }
        return next.handle(req).pipe(
            tap(event => {
              console.log('we are here for side effect of a http req.....');
              if (event instanceof HttpResponse) {
                console.log('The response came from http req....., heading to to cache-map-service to put it into cacheMap of it');
                this.cache.put(req, event);
              }
            })
        );
    }
    private isRequestCachable(req: HttpRequest<any>) {
        return (req.method === 'GET') && (req.url.indexOf(CACHABLE_URL) > -1);  //chane logic here to be cachable for our request for --- no.....
    }
}
