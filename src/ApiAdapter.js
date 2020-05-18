import * as cable from "actioncable";

const BASE_URL = "192.168.1.30:3000";
const BASE_HTTP = `http://${BASE_URL}`;
const BASE_WS = `ws://${BASE_URL}`;

const LOGIN_URL = `${BASE_HTTP}/login`;

const configObj = data => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

const parseResp = async resp => {
  const obj = await resp.json();

  if (!resp.ok) throw new Error(obj.exception);
  return obj;
};

const get = async url => {
  const resp = await fetch(url);
  return await parseResp(resp);
};

const post = async (url, data) => {
  const resp = await fetch(url, configObj(data));
  return await parseResp(resp);
};

export const loginUser = async loginData => {
  return await post(LOGIN_URL, loginData);
};

export const cableConnection = cable.createConsumer(`ws://${BASE_URL}/cable`);
