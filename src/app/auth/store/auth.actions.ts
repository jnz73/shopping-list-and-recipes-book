import {Action} from '@ngrx/store';

// const to represent actions

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

// action represents an attemp to sign up, I use only for effects so is not present as a reducer
export class TrySignUp implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: { username: string, password: string }) {
  }
}

export class TrySignIn implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: { username: string, password: string }) {
  }
}

// class to define the actions
export class SignUp implements Action {
  readonly type = SIGNUP;
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class SignIn implements Action {
  readonly type = SIGNIN;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {
  }
}

// export actions as AuthaActions.*
export type AuthActions = SignUp | SignIn | LogOut | SetToken | TrySignUp | TrySignIn;
