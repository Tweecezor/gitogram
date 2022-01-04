<template>
  <div>
    <div class="profile__following">
      <div class="following__header mb-36">
        <h1>Following</h1>
        <div class="following__count">{{ userFollowing.length }}</div>
      </div>

      <ul class="following__list">
        <li
          v-for="item in userFollowing"
          :key="item.id"
          class="repo__item following mb-32"
        >
          <div>
            <user size="m" />
          </div>
          <div>
            <Button>
              Following
            </Button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import { user } from "@/components/user";
import { button as Button } from "@/components/button";

export default {
  components: {
    user,
    Button
  },
  setup() {
    const store = useStore();
    onMounted(async function() {
      await store.dispatch("getUserFollowing");
    });
    const userFollowing = computed(() => store.state.userFollowing);
    return { userFollowing };
  }
};
</script>

<style lang="scss" scoped>
.following {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__count {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: #9e9e9e;
  }
}
</style>
