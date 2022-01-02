<template>
  <div class="user">
    <Avatar
      class="user__avatar mr-12"
      :avatar="src"
    />
    <span class="user__name">{{ name }}</span>
  </div>
</template>

<script>
import { avatar as Avatar } from "@/components/avatar";
export default {
  components: {
    Avatar
  },
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    name: {
      type: String,
      default: "John Doe"
    }
  },
  setup(props) {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  &__name {
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
  }

  &__avatar {
    width: 44px;
    height: 44px;
  }
}
</style>
