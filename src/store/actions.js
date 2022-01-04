import { trendings, readme, auth, user, starred, issuesModule } from "@/API";
import axios from "axios";

export const getTrendings = async function({ commit, getters, dispatch }) {
  try {
    const { data } = await trendings.getTrendings();
    commit("SET_TRANDINGS", data.items);
  } catch (error) {
    console.log(error);
  }
};

export const getReadme = async function(
  { commit, getters },
  { id, owner, repo }
) {
  const currentRepo = getters.getRepoById(id);
  if (currentRepo.readme !== undefined) return;
  try {
    const { data } = await readme.getReadme({ owner, repo });

    commit("SET_README", { id, readme: data });
  } catch (error) {
    console.log(error);
  }
};

export const authUserByCode = async function(store, code) {
  try {
    const { data } = await auth.getAccessTokenByPersonalCode(code);

    return data.token;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async function({ commit }) {
  try {
    const { data } = await user.getUserData();

    commit("SET_USER", data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const logout = function() {
  localStorage.removeItem("token");
  window.location.reload();
};

export const starRepo = async function({ commit, getters }, repoId) {
  commit("SET_FOLLOWING", {
    id: repoId,
    data: { loading: true, status: false, error: "" }
  });
  const { name: repo, owner } = getters.getRepoById(repoId);
  try {
    await starred.starRepo({ repo, owner: owner.login });
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { status: true }
    });
  } catch (error) {
    console.log(error);
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { status: false, error }
    });
  } finally {
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { loading: false }
    });
  }
};

export const unStarRepo = async function({ commit, getters }, repoId) {
  commit("SET_FOLLOWING", {
    id: repoId,
    data: { loading: true, status: true, error: "" }
  });
  const { name: repo, owner } = getters.getRepoById(repoId);
  try {
    await starred.unStarRepo({ repo, owner: owner.login });
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { status: false }
    });
  } catch (error) {
    console.log(error);
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { status: false, error }
    });
  } finally {
    commit("SET_FOLLOWING", {
      id: repoId,
      data: { loading: false }
    });
  }
};

export const getStarred = async function({ commit }) {
  const { data } = await starred.getStarred({ limit: 10 });
  commit("SET_STARRED", data);
};

export const getIssues = async function({ commit }, { owner, repo, repoId }) {
  commit("SET_ISSUES", {
    repoId,
    data: { loading: true }
  });
  try {
    const { data } = await issuesModule.getIssues({ owner, repo });

    commit("SET_ISSUES", {
      data: {
        data
      },
      repoId
    });
  } catch (error) {
    console.log(error);
  } finally {
    commit("SET_ISSUES", {
      repoId,
      data: { loading: false }
    });
  }
};

export const getUserRepos = async function({ commit }) {
  try {
    const { data } = await user.getUserRepos();
    commit("SET_USER_REPOS", data);
  } catch (error) {}
};

export const getUserFollowing = async function({ commit }) {
  try {
    const { data } = await user.getUserFollowing();
    commit("SET_USER_FOLLOWING", data);
  } catch (error) {
    console.log(error);
  }
};
