import { makeRequest } from "../request";
import env from "../../../env";

export const getAccessTokenByPersonalCode = code =>
  makeRequest({
    url: "https://webdev-api.loftschool.com/github",
    method: "post",
    data: {
      code,
      clientId: env.cliendId,
      clientSecret: env.clientSecret
    },
    headers: {
      "Content-Type": "application/json"
    }
  });
