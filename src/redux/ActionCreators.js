import {
  TEST,
  SET_UID,
  SET_NAME,
  SET_EMAIL,
  SEARCH_STRING,
} from "./Actions";

export const testRedux = text => ({
  type: TEST,
  text
});

export const setGlobalUid = uid => ({
  type: SET_UID,
  uid
});

export const setGlobalName = name => ({
  type: SET_NAME,
  name
});

export const setGlobalEmail = email => ({
  type: SET_EMAIL,
  email
});

export const searchString = query => ({
  type: SEARCH_STRING,
  query
});
