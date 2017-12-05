import * as AuthActions from './auth.actions';

// interface to model state
export interface State {
  token: string;
  authenticated: boolean;
}

// const to define initial state
const initialState: State = {
  token: null,
  authenticated: false,
};

// reducer function
export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    default:
      return state;
  }


}
