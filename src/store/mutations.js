export default {
  SET_TRANDINGS(state, trendings) {
    if (trendings) {
      state.trendings = trendings.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ""
        };
        return item;
      });
    }
  },
  SET_README(state, payload) {
    if (payload) {
      state.trendings = state.trendings.map(item => {
        if (payload.id === item.id) {
          item.readme = payload.readme;
        }
        return item;
      });
    }
  },
  SET_USER(state, payload) {
    if (payload) {
      state.user = payload;
    }
  },
  SET_FOLLOWING(state, payload) {
    state.trendings = state.trendings.map(repo => {
      if (payload.id === repo.id) {
        repo.following = {
          ...repo.following,
          ...payload.data
        };
      }
      return repo;
    });
  },
  SET_STARRED(state, starred) {
    if (starred) {
      state.starred = starred;
    }
  },
  SET_ISSUES(state, payload) {
    // if (payload) {
    state.starred = state.starred.map(repo => {
      if (payload.repoId === repo.id) {
        repo.issues = {
          ...repo.issues,
          ...payload.data
        };
      }
      return repo;
    });
    // }
  },
  SET_USER_REPOS(state, payload) {
    if (payload) {
      state.userRepos = payload;
    }
  },

  SET_USER_FOLLOWING(state, payload) {
    if (payload) {
      state.userFollowing = payload;
    }
  }
};
