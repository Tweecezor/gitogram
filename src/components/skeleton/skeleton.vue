<template>
  <div
    class="skeleton"
    :style="style"
  />
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },

    height: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const style = reactive({
      width: `${props.width}px`,
      height: `${props.height}px`
    });

    return { style };
  }
};
</script>

<style lang="scss" scoped>
.skeleton {
  background: #dedede;
  border-radius: 4px;
}
</style>
