<template>
  <div class="stats">
    <div class="stats__border stats__right">
      <div class="stats__icon mr-4">
        <icon icon-name="stars" />
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border ">
      <div class="stats__icon mr-4">
        <icon icon-name="forks" />
      </div>
      <span>Forks</span>
    </div>
    <div class="stats__border stats__left">
      {{ forks }}
    </div>
  </div>
</template>

<script>
import { icon } from "@/components/icon";
export default {
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  &__border {
    border: 1px solid rgba(27, 31, 35, 0.15);
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  &__center {
    background: #ffffff;
  }
  &__right {
    border-radius: 6px 0px 0px 6px;
    background: #fafbfc;
  }
  &__left {
    border-radius: 0px 6px 6px 0px;
    background: #fafbfc;
  }
  &__icon {
    width: 14px;
    height: 14px;
  }
}
</style>
