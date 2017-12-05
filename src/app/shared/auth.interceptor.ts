import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted', req);


    return this.store.select('auth')
    // this.store.select setup a subscription so we have to take only one result to avoid errors
      .take(1)
      // switchMap not to have an observable wrapped in another observable
      .switchMap((authState: fromAuth.State) => {
        // getting the token is an asyncronous operation so returns an observable
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        // this fires a request
        return next.handle(copiedReq);
      });
  }
}
