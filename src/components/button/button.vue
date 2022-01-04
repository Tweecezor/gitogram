<template>
  <div
    class="button"
    :class="[{ disabled }, theme == 'green' ? 'button__green' : 'button__grey']"
    @click="handleClick"
  >
    <loader v-if="loading" class="button__loader" />

    <button v-else class="button__text" disabled>
      <div v-if="text">{{ text }}</div>
      <div v-else>
        <slot />
      </div>
    </button>
  </div>
</template>

<script>
import { loader } from "@/components/loader";
export default {
  components: {
    loader
  },
  props: {
    text: {
      type: String
    },
    hoverText: {
      type: String
    },
    color: {
      type: String,
      default: "#31ae54"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "green"
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };
    return { handleClick };
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: #fff;

  border-radius: 5px;
  padding: 10px 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  &__green {
    background-color: #31ae54;
  }

  &__grey {
    background-color: grey;
  }
  &__text {
    color: white;
    font-weight: 600;
  }
  &__loader {
    width: 10px;
    height: 10px;
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
}
.disabled {
  background-color: grey;
}
</style>
