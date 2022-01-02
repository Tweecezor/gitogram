<template>
  <div class="avatar">
    <img
      :src="avatar"
      alt="users avatar"
    >
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
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
.avatar {
  border-radius: 50%;
  overflow: hidden;
}
</style>
