import { HttpResponse } from '@angular/common/http';

export interface CacheEntry {
    url: string;
    response: HttpResponse<any>;
    entryTime: number;
}

export const MAX_CACHE_AGE = 20000; // in milliseconds   //no need , have to accomodate --- no: or get it from response....
