<template>
  <div class="loader" />
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.loader {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-top: 3px solid transparent;
  border-right: 3px solid currentColor;
  border-left: 3px solid currentColor;
  border-bottom: 3px solid currentColor;
  background: transparent;
  transform: rotate(-45deg);
  transition: all 2s;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
