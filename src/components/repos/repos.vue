<template>
  <div>
    <div class="profile__repo">
      <h1 class="mb-36">Repositories</h1>
      <ul class="repo__list">
        <li
          v-for="item in userRepos"
          :key="item.id"
          class="repo__item repo mb-24"
        >
          <card
            :title="item.name"
            :desc="item.description || ''"
            :stars="item.stargazers_count"
            :forks="item.forks_count"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { feed } from "@/components/feed";
import { card } from "@/components/card";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: {
    // feed,
    card
  },

  setup() {
    const store = useStore();
    onMounted(async function() {
      await store.dispatch("getUserRepos");
    });
    const userRepos = computed(() => store.state.userRepos);
    return { userRepos };
  }
};
</script>

<style lang="scss" scoped></style>
