import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Cache } from './cache';
import { CacheEntry, MAX_CACHE_AGE } from './cache-entry';

@Injectable()
export class CacheMapService implements Cache {
  cacheMap = new Map<string, CacheEntry>();

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const entry = this.cacheMap.get(req.urlWithParams);
    if (!entry) {
      console.log('cached entry is not present in Application storage for cache-----cacheMap..........');
      return null;
    }
    const isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;  //no need
    return isExpired ? null : entry.response;   // no need
    //WRITE LOGIC RELATED TO --- NO:............................ WHEN TO EXPIRE the current storgae at entry
  }

  put(req: HttpRequest<any>, res: HttpResponse<any>): void {
    const entry: CacheEntry = {url: req.urlWithParams, response: res, entryTime: Date.now()};
    this.cacheMap.set(req.urlWithParams, entry);
    console.log('The new http request was made and the cached responsed came via CACHING INTERCEPTOR...for Application storage is:  '
      + this.cacheMap.get(req.urlWithParams));
    this.deleteExpiredCache();   //no need
  }

  private deleteExpiredCache() {   //no need
    this.cacheMap.forEach(entry => {
      if ((Date.now() - entry.entryTime) > MAX_CACHE_AGE) {
        this.cacheMap.delete(entry.url);
      }
    });
  }
}
