import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {fromPromise} from 'rxjs/observable/fromPromise';

import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import {Router} from '@angular/router';

// here I store the sideffects so i can delete auth.service.ts
// I have to register this class in the app.module
@Injectable()
export class AuthEffects {
  @Effect()
    // actions I want to listen to
  authSignup = this.actions$
  // if action is of type TRY_SIGNUP
    .ofType(AuthActions.TRY_SIGNUP)
    // retrive payload (observable)
    .map((action: AuthActions.TrySignUp) => {
      return action.payload;
    })
    // extract data (is an observable thou the switchmap)
    .switchMap((authdata: { username: string, password: string }) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authdata.username,
        authdata.password));
    })
    // retrive token
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    // in the end emit other actions ( if you don't want to do so: @Effect({dispatch: false})
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .map((action: AuthActions.TrySignUp) => {
      return action.payload;
    })
    .switchMap((authdata: { username: string, password: string }) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authdata.username,
        authdata.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      // navigate to home page once logged in
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .do(() => {
      this.router.navigate(['/']);
    });


// $ means an observable action$ is a list of all the actions of the app and we listen to it
  constructor(private actions$: Actions, private router: Router) {
  }
}
