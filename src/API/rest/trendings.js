import { makeRequest } from "../request";
import addStartingZero from "@/helpers/addStartingZero";

export const getTrendings = (lang = "javascript", page = "1") => {
  const params = new URLSearchParams();
  const weekMS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekMS);
  const formatedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate())
  ].join("-");
  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("per_page", 10);
  params.append("page", page);
  params.append("q", `language:${lang} created:>${formatedDate}`);
  return makeRequest({
    url: `/search/repositories?${params}`
  });
};
