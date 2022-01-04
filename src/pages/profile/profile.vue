<template>
  <div>
    <topline class="mb-32">
      <template #headline class="topline__wrap">
        <div class="topline__title_wrap">
          <h1 class="topline__title">
            Gitogram/
          </h1>
        </div>
        <div class="topline__actions">
          <div class="topline__icon mr-28 icon">
            <icon icon-name="home" @click="$router.push({ name: 'Home' })" />
          </div>
          <div class="topline__avatar mr-24 icon">
            <avatar v-if="userInfo.avatar_url" :avatar="userInfo.avatar_url" />
            <Skeleton v-else :width="44" :height="44" circle />
          </div>
          <div class="topline__icon mt-4 icon">
            <icon icon-name="exit" @click="logout" />
          </div>
        </div>
      </template>
    </topline>
    <div class="x-container profile__container">
      <div class="profile__user">
        <h1 class="mb-36">My profile</h1>
        <div class="profile__info">
          <avatar
            v-if="userInfo.avatar_url"
            class="profile__avatar mr-20"
            :avatar="userInfo.avatar_url"
            size="l"
          />
          <Skeleton v-else :width="90" :height="90" circle />
          <div class="profile__user__info ">
            <h2 class="profile__user_login mb-6">
              {{ userInfo.login }}
            </h2>
            <div class="fl">
              <div class="mr-12" @click="$router.push({ name: 'Repos' })">
                <span class="count mr-4"> {{ userRepos.length }}</span>
                <span class="pointer">repos</span>
              </div>
              <div @click="$router.push({ name: 'Following' })">
                <span class="count mr-4"> {{ userFollowing.length }}</span>
                <span class="pointer">following</span>
              </div>
              <div v-if="userInfo.name">{{ userInfo.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="profile__repo">
        <Router-view />
        <!-- <h1 class="mb-36">Repositories</h1>
        <ul class="repo__list">
          <li
            v-for="item in userRepos"
            :key="item.id"
            class="repo__item repo mb-24"
          >
            <card
              :title="item.name"
              :desc="item.description"
              :stars="item.stargazers_count"
              :forks="item.forks_count"
            />
          </li>
        </ul> -->
      </div>
    </div>
    <!-- <pre>{{ userRepos }}</pre> -->
  </div>
</template>

<script>
import { topline } from "@/components/topline";
import { avatar } from "@/components/avatar";
import { icon } from "@/components/icon";
import { skeleton as Skeleton } from "@/components/skeleton";
// import { feed } from "@/components/feed";
// import { card } from "@/components/card";

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    topline,
    icon,
    avatar,
    Skeleton
    // feed,
    // card
  },
  async setup() {
    const store = useStore();
    await store.dispatch("getUser");
    await store.dispatch("getUserRepos");
    await store.dispatch("getUserFollowing");

    const userRepos = computed(() => store.state.userRepos);
    const userInfo = computed(() => store.state.user);
    const userFollowing = computed(() => store.state.userFollowing);

    const logout = function() {};
    return { userRepos, userInfo, logout, userFollowing };
  }
};
</script>

<style lang="scss" scoped>
.topline {
  &__wrap {
    display: flex;
    justify-content: space-around;
  }
  &__icon {
    color: #000;
    width: 25px;
    height: 25px;
  }
  &__actions {
    display: flex;
    align-items: center;
  }
  &__avatar {
    width: 37px;
    height: 37px;
  }
}

.icon {
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    color: var(--green);
    transition: all 0.3s;
  }
}

.primary_line {
  height: 100%;
  width: 2px;
  color: var(--grey);
}

.profile {
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__user {
    width: 40%;
    border-right: 1px solid #d3d3d3;
    margin-right: 74px;
    &_login {
      font-size: 24px;
    }
  }
  &__repo {
    width: 60%;
  }
  &__info {
    display: flex;
    align-items: center;
  }

  &__avatar {
    width: 90px;
    height: 90px;
  }
}

.count {
  font-weight: 700;
}
</style>
