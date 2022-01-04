<template>
  <div class="topline">
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
            <avatar
              :avatar="user.avatar_url"
              @click="$router.push({ name: 'Repos' })"
            />
          </div>
          <div class="topline__icon mt-4 icon">
            <icon icon-name="exit" @click="logout" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories__list">
          <li
            v-for="item in getUnStarredOnly"
            :key="item.id"
            class="stories__item"
            @click="
              $router.push({
                name: 'Stories',
                params: { initialSlide: Number(item.id) }
              })
            "
          >
            <!-- <pre>{{ item }}</pre> -->
            <userStoryItem
              :avatar="item.owner.avatar_url"
              :username="item.owner.login"
              @handlePress="onPressAvatar(item.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="feeds">
    <div class="x-container">
      <ul class="feeds__list">
        <li
          v-for="item in starred"
          :key="item.id"
          class="feeds__item feed mb-24"
        >
          <!-- <pre>{{ item }}</pre> -->
          <feed
            :username="item.owner.login"
            :avatar="item.owner.avatar_url"
            :repo-id="item.id"
            :issues="item.issues"
            :repo="item.name"
            :owner="item.owner.login"
            :date="item.updated_at"
          >
            <template #card>
              <card
                :title="item.name"
                :desc="item.description"
                :stars="item.stargazers_count"
                :forks="item.forks_count"
              />
            </template>
          </feed>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { trendings as trendingsModule } from "@/API";

import { topline } from "../../components/topline";
import { icon } from "../../components/icon";
import { userStoryItem } from "../../components/userStoryItem";
import { avatar } from "@/components/avatar";
import { feed } from "@/components/feed";
import { card } from "@/components/card";
// import { button as myButton } from "@/components/button";
// import { progress as Progress } from "@/components/progress";
// import { slide } from "@/components/slide";

import stories from "./data.json";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    topline,
    icon,
    userStoryItem,
    avatar,
    feed,
    card
    // myButton,
    // Progress
    // slide
  },
  data() {
    return {
      stories
      // repos: []
    };
  },

  computed: {
    ...mapState({
      trendings: state => state.trendings,
      user: state => state.user,
      starred: state => state.starred
    }),

    ...mapGetters(["getUnStarredOnly"])
  },

  async created() {
    await this.getStarred();
    await this.getUser();
    await this.getTrendings();
  },

  methods: {
    ...mapActions(["getTrendings", "getUser", "logout", "getStarred"]),
    onPressAvatar(id) {
      console.log(id);
    },
    handleClick() {
      console.log("evnt in feeds");
    }
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
.stories__list {
  display: flex;
  justify-content: space-between;
}
.feeds {
  &__list {
    padding: 0 9%;
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
</style>
