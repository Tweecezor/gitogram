<template>
  <div class="topline">
    <topline class="mb-32">
      <template class="topline__wrap" #headline>
        <div class="topline__title_wrap">
          <h1 class="topline__title">Gitogram/</h1>
        </div>
        <div class="topline__actions">
          <div class="topline__icon mr-28">
            <icon iconName="home" />
          </div>
          <div class="topline__avatar mr-24">
            <avatar avatar="https://picsum.photos/300/300" />
          </div>
          <div class="topline__icon mt-4">
            <icon iconName="exit" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories__list">
          <li class="stories__item" v-for="item in stories" :key="item.id">
            <userStoryItem
              :avatar="item.avatar"
              :username="item.username"
              @handlePress="onPressAvatar(item.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="feeds">
    <div class="x-container">
      <div class="feeds__list">
        <div class="feeds__item feed">
          <feed>
            <template #card>
              <card
                title="Vue js"
                desc="lorem lorem lorem loremv lorem lorem lorem lorem"
                :stars="5"
                :forks="10"
              />
            </template>
          </feed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { topline } from "../../components/topline";
import { icon } from "../../components/icon";
import { userStoryItem } from "../../components/userStoryItem";
import { avatar } from "@/components/avatar";
import { feed } from "@/components/feed";
import { card } from "@/components/card";
import stories from "./data.json";
export default {
  components: {
    topline,
    icon,
    userStoryItem,
    avatar,
    feed,
    card
  },
  data() {
    return {
      stories
    };
  },
  methods: {
    onPressAvatar(id) {
      console.log(id);
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
</style>
