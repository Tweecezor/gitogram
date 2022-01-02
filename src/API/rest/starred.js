import { makeRequest } from "../request";
export const starRepo = ({ repo, owner }) =>
  makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "put"
  });

export const unStarRepo = ({ repo, owner }) =>
  makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "delete"
  });

export const getStarred = ({ limit }) => {
  const params = new URLSearchParams();
  if (limit) {
    params.append("per_page", limit);
  }

  return makeRequest({
    url: `/user/starred?${params}`
  });
};
