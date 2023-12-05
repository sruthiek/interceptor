import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import axios from 'axios';
import * as NProgress from 'nprogress';


@Injectable()
export class RequestResponseHandlingInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // start progrss bar
    NProgress.start();
    console.log(request);
    const token = 'sruthiwedgdfhfhhf';
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(authReq).pipe(
      tap((event: HttpEvent <any>) => {
        if (event instanceof HttpResponse) {
          // Successful response, stop the progress bar
          NProgress.done();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Stop the progress bar
        NProgress.done();

        // Handle failed responses
        console.error('Interceptor Error:', error);

        // Pass the error along to the calling service
        return throwError(error);
      })
    );
  }
}

