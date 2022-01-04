<template>
  <div class="skeleton" :style="style" />
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
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let style = reactive({
      width: `${props.width}px`,
      height: `${props.height}px`
    });
    if (props.circle) {
      style = {
        ...style,
        "border-radius": "50%"
      };
    }

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
