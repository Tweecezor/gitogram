<template>
  <div class="progress " :class="{ active }">
    <div ref="indicator" class="indicator" />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  props: {
    // active: {
    //   type: Boolean,
    //   default: false
    // }
  },
  emits: ["onFinish"],

  setup(props, { emit }) {
    const indicator = ref(null);
    const active = ref(false);
    const emitOnFinish = function() {
      emit("onFinish");
    };

    onMounted(() => {
      indicator.value.addEventListener("transitionend", emitOnFinish);
    });

    setTimeout(() => {
      active.value = true;
    }, 1000);
    // nextTick(() => {
    //   active.value = true;
    // });

    onBeforeUnmount(() => {
      indicator.value.removeEventListener("transitionend", emitOnFinish);
    });

    return { indicator };
  }
};
</script>

<style lang="scss" scoped>
.progress {
  background: rgba(49, 174, 84, 0.3);
  border-radius: 10px;
  height: 2px;
  overflow: hidden;
  position: relative;
}

.active {
  .indicator {
    width: 100%;
  }
}

.indicator {
  background: var(--green);
  /* height: 2px; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  transition: 10s;
}
</style>
