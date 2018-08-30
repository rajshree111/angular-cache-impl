import { HttpRequest, HttpResponse } from '@angular/common/http';

export abstract class Cache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | null;   //get from the Apllication storage @cacheMapService which impl cache

  abstract put(req: HttpRequest<any>, res: HttpResponse<any>): void;  ////set the response to cacheMap of cacheMapService to be consumed later for caching
}
