<template>
  <button @click="onToogle" class="button" :class="{ active: isOpen }">
    <span class="text mr-4">{{ isOpen ? "Hide issues" : "View issues" }}</span>
    <span class="icon">
      <icon iconName="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from "@/components/icon";
export default {
  setup() {
    return {};
  },

  data() {
    return {
      isOpen: false
    };
  },

  components: {
    icon
  },

  methods: {
    onToogle() {
      this.isOpen = !this.isOpen;
      this.$emit("onToogle", this.isOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  padding: 0;
}

.icon {
  width: 10px;
  transform: rotate(180deg);
  transition: 0.4s;
}

.active {
  .icon {
    transform: rotate(0deg);
  }
}
</style>
