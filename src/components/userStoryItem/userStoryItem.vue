<template>
  <div class="userStoryItem">
    <button class="userStoryItem__button" @click="onPress">
      <avatar :avatar="avatar" size="l" />
    </button>
    <div class="username">
      {{ username }}
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
export default {
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  },
  methods: {
    onPress() {
      this.$emit("handlePress");
    }
  }
};
</script>

<style lang="scss" scoped>
.userStoryItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__button {
    border: 2px solid #a6328d;
    border-radius: 50%;
    padding: 4px;
    /* max-width: 92px; */
    margin-bottom: 10px;
    transition: border-color 0.2s;

    &:hover {
      border-color: transparent;
    }
  }
}
</style>
