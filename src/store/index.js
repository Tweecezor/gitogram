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
  getIssues
} from "./actions";
import { getRepoById, getUnStarredOnly } from "./getters";
import mutations from "./mutations";

export default createStore({
  state: {
    trendings: [],
    user: {},
    starred: []
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
    getIssues
  },
  mutations,
  getters: { getRepoById, getUnStarredOnly }
});
