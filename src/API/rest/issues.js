import { makeRequest } from "../request";

export const getIssues = ({ owner, repo }) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues?`
  });
};
