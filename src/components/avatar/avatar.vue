<template>
  <div class="avatar">
    <img :src="avatar" alt="users avatar" />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
}
</style>
