import * as cable from "actioncable";

const BASE_URL = "127.0.0.1:3000";
const BASE_HTTP = `http://${BASE_URL}`;

const BASE_WS = `ws://${BASE_URL}`;
const WS_CONNECTION = `${BASE_WS}/cable`;
const LOGIN_USER = `${BASE_HTTP}/login`;
const SIGNUP_USER = `${BASE_HTTP}/signup`;
const VERIFY_USER = `${BASE_HTTP}/verify`;
const LOGOUT_USER = `${BASE_HTTP}/logout`;

const configObj = (method, data) => {
  let obj = {
    method,
    credentials: "include",
  };

  data &&
    (obj.headers = {
      "Content-Type": "application/json",
    }) &&
    (obj.body = JSON.stringify(data));

  return obj;
};

const parseResp = async resp => {
  const obj = await resp.json();
  if (!resp.ok) throw new Error(obj.error ? obj.error : obj.exception);

  return obj;
};

const multiFetch = async (url, method = "GET", data) => {
  const resp = await fetch(url, configObj(method, data));
  return await parseResp(resp);
};

export const loginUser = async loginData => {
  return await multiFetch(LOGIN_USER, "POST", loginData);
};

export const signupUser = async signupData => {
  return await multiFetch(SIGNUP_USER, "POST", signupData);
};

export const verifyUser = async () => {
  return await multiFetch(VERIFY_USER);
};

export const logoutUser = async () => {
  return await multiFetch(LOGOUT_USER, "DELETE");
};

export const cableConnection = cable.createConsumer(WS_CONNECTION);
