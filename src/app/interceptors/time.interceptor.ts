import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now();
    return next.handle(request).pipe(
      tap(() => {
        const time = (performance.now() - start) + 'ms';
        console.log(request.url, time);
      })
    );
  }
}
