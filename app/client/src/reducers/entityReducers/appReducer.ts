import { createReducer } from "utils/AppsmithUtils";
import { ReduxAction, ReduxActionTypes } from "constants/ReduxActionConstants";
import { User } from "constants/userConstants";

export enum APP_MODE {
  EDIT = "EDIT",
  PUBLISHED = "PUBLISHED",
}

export type AuthUserState = {
  username: string;
  email: string;
  id: string;
};

export type UrlDataState = {
  queryParams: Record<string, string>;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  hash: string;
  fullPath: string;
};

export type AppDataState = {
  mode?: APP_MODE;
  user: AuthUserState;
  URL: UrlDataState;
  store: object;
};

const initialState: AppDataState = {
  user: {
    username: "",
    email: "",
    id: "",
  },
  URL: {
    queryParams: {},
    protocol: "",
    host: "",
    hostname: "",
    port: "",
    pathname: "",
    hash: "",
    fullPath: "",
  },
  store: {},
};

const appReducer = createReducer(initialState, {
  [ReduxActionTypes.SET_APP_MODE]: (
    state: AppDataState,
    action: ReduxAction<APP_MODE>,
  ) => {
    return {
      ...state,
      mode: action.payload,
    };
  },
  [ReduxActionTypes.FETCH_USER_DETAILS_SUCCESS]: (
    state: AppDataState,
    action: ReduxAction<User>,
  ) => {
    return {
      ...state,
      user: action.payload,
    };
  },
  [ReduxActionTypes.SET_URL_DATA]: (
    state: AppDataState,
    action: ReduxAction<UrlDataState>,
  ) => {
    return {
      ...state,
      URL: action.payload,
    };
  },
  [ReduxActionTypes.UPDATE_APP_STORE]: (
    state: AppDataState,
    action: ReduxAction<object>,
  ) => {
    return {
      ...state,
      store: action.payload,
    };
  },
});

export default appReducer;
