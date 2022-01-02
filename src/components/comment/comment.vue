<template>
  <div class="comment">
    <p>
      <span class="comment__username"> {{ username }}: </span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.comment {
  &__username {
    font-weight: 600;
  }
}
</style>
