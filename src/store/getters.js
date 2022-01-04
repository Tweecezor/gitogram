export const getRepoById = state => id => {
  return state.trendings.find(item => item.id === id);
};

export const getUnStarredOnly = state => {
  return state.trendings.filter(
    trendingRepo =>
      !state.starred.some(starredRepo => starredRepo.id === trendingRepo.id)
  );
};
