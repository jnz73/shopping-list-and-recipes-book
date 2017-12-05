import {Action} from '@ngrx/store';

// const to represent actions
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


// class to define the actions
export class SignUp implements Action {
  readonly type = SIGNUP;
}

export class SignIn implements Action {
  readonly type = SIGNIN;
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {
  }
}
// export actions as AuthaActions.*
export type AuthActions = SignUp | SignIn | LogOut | SetToken;
