<template>
  <div class="feed">
    <div class="feed__user mb-16">
      <avatar class="feed__avatar mr-12" :avatar="avatar" />
      <span class="feed__username">{{ username }}</span>
    </div>
    <div class="feed__card mb-16">
      <slot name="card" />
    </div>
    <toogler class="mb-12" @onToogle="toogle" />
    <div v-if="show" class="comments mb-12">
      <div v-if="issues.loading">
        <skeleton class="mb-12" :height="15" :width="320" />
        <skeleton class="mb-12" :height="15" :width="220" />
        <skeleton class="mb-12" :height="15" :width="120" />
      </div>
      <ul v-else-if="issues.data.length" class="comments__list">
        <li v-for="item in issues.data" :key="item" class="comment__item">
          <comment :text="item.body" :username="item.user.login" />
        </li>
      </ul>
      <div v-else>
        Issues is empty
      </div>
    </div>
    <div class="feed__date">
      25 May
    </div>
  </div>
</template>

<script>
import { comment } from "@/components/comment";
import { toogler } from "@/components/toogler";
import { avatar } from "@/components/avatar";
import { skeleton } from "@/components/skeleton";

import { mapActions } from "vuex";
export default {
  components: {
    comment,
    toogler,
    avatar,
    skeleton
    // toogler: () => import("@/components/toogler"),
    // comment: () => import("@/components/comment")
  },
  props: {
    username: {
      type: String,
      default: "John Doe"
    },
    avatar: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    repoId: {
      type: Number,
      required: true
    },
    issues: {
      type: Array,
      default: () => []
    },
    repo: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
    hasIssues: {
      type: Boolean
      // required: true
    }
  },
  setup() {
    return {};
  },
  data() {
    return {
      show: false,
      currentId: ""
    };
  },
  methods: {
    ...mapActions(["getIssues"]),
    toogle(isOpened) {
      this.show = isOpened;
      if (this.show && !this.issues.length && this.repoId !== this.currentId) {
        const params = {
          owner: this.owner,
          repo: this.repo,
          repoId: this.repoId
        };
        this.currentId = this.repoId;
        this.getIssues(params);
      }
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
