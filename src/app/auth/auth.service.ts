import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthAction from '../auth/store/auth.actions';

@Injectable()
export class AuthService {

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
  }

  signUpUser(email: string, password: string) {
    console.log(email + ' ' + password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          this.store.dispatch(new AuthAction.SignUp());
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) =>
                this.store.dispatch(new AuthAction.SetToken(token))
            );

        }
      )
      .catch(
      error => console.log(error)
    );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthAction.SignIn());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) =>
                this.store.dispatch(new AuthAction.SetToken(token))
            );
        }
      ).catch(
      error => console.log(error)
    );
  }

  logOut() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthAction.LogOut());
  }
}
