<template>
  <div class="topline">
    <div class="x-container">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.topline {
  background: #fafafa;
  border-bottom: 1px solid #c6c6c8;
  padding: 42px 0px 32px;
}
.content {
  margin-top: 37px;
}

.headline {
  display: flex;
  justify-content: space-between;
}
</style>
