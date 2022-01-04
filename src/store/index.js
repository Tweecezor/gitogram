import { createStore } from "vuex";

import {
  getTrendings,
  getReadme,
  authUserByCode,
  getUser,
  logout,
  starRepo,
  unStarRepo,
  getStarred,
  getIssues,
  getUserRepos,
  getUserFollowing
} from "./actions";
import { getRepoById, getUnStarredOnly } from "./getters";
import mutations from "./mutations";

export default createStore({
  state: {
    trendings: [],
    user: {},
    starred: [],
    userRepos: [],
    userFollowing: []
  },
  actions: {
    getTrendings,
    getReadme,
    authUserByCode,
    getUser,
    logout,
    starRepo,
    unStarRepo,
    getStarred,
    getIssues,
    getUserRepos,
    getUserFollowing
  },
  mutations,
  getters: { getRepoById, getUnStarredOnly }
});
