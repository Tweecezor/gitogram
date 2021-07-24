<template>
  <div class="feed">
    <div class="feed__user mb-16">
      <avatar
        class="feed__avatar mr-12"
        avatar="https://picsum.photos/300/300"
      />
      <span class="feed__username">John Doe</span>
    </div>
    <div class="feed__card mb-16">
      <slot name="card"></slot>
    </div>
    <toogler @onToogle="toogle" class="mb-12" />
    <div class="comments mb-12" v-if="show">
      <ul class="comments__list">
        <li class="comment__item" v-for="item in 5" :key="item">
          <comment text="Some Text" username="John Doe" />
        </li>
      </ul>
    </div>
    <div class="feed__date">25 May</div>
  </div>
</template>

<script>
import { comment } from "@/components/comment";
import { toogler } from "@/components/toogler";
import { avatar } from "@/components/avatar";
export default {
  setup() {
    return {};
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    comment,
    toogler,
    avatar
    // toogler: () => import("@/components/toogler"),
    // comment: () => import("@/components/comment")
  },
  methods: {
    toogle(isOpened) {
      this.show = isOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
.feed {
  &__date {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
  }
  &__user {
    display: flex;
    align-items: center;
  }
  &__avatar {
    width: 44px;
    height: 44px;
  }
  &__username {
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
