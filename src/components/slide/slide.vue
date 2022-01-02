<template>
  <div class="slide" :class="{ slide_active: active }">
    <div class="container slide__head mb-12">
      <Progress class="mb-12" active />
      <User :src="data.avatar" :name="data.username" />
    </div>
    <div class="primaryLine" />
    <div class="slide__content" :class="{ slide__content_loading: loading }">
      <div class="container">
        <div v-if="loading" class="loading">
          <loader />
          Загрузка...
        </div>
        <div v-else-if="data?.content?.length" v-html="data.content" />
        <div v-else>
          <skeleton class="mb-32" :height="140" :width="320" />
          <div class="mb-32">
            <skeleton class="mb-12" :height="14" :width="100" />
            <skeleton class="mb-12" :height="14" :width="200" />
            <skeleton class="mb-12" :height="14" :width="150" />
          </div>

          <div>
            <skeleton class="mb-12" :height="14" :width="100" />
            <skeleton class="mb-12" :height="14" :width="200" />
            <skeleton class="mb-12" :height="14" :width="150" />
          </div>
        </div>
      </div>
    </div>
    <div class="primaryLine mb-24" />
    <div class="slide__button_wrap">
      <div class="slide__button">
        <Button
          @click="
            $emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)
          "
          :loading="data.following.loading"
          :theme="data.following.status ? 'grey' : 'green'"
        >
          {{ data.following.status ? "unFollow" : "Follow" }}
        </Button>
      </div>
    </div>
    <!-- buttons -->
    <template v-if="active && !loading">
      <button
        v-if="btnsShow.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon icon-name="arrow" />
        </span>
      </button>
      <button
        v-if="btnsShow.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon icon-name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { progress as Progress } from "@/components/progress";
import { user as User } from "@/components/user";
import { button as Button } from "@/components/button";
import { icon } from "@/components/icon";
import { loader } from "@/components/loader";
import { skeleton } from "@/components/skeleton";

export default {
  components: {
    Progress,
    User,
    Button,
    icon,
    loader,
    skeleton
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean
    },
    data: {
      type: Object,
      default: () => {}
    },
    btnsShow: {
      type: Array,
      default: () => ["prev", "array"]
    }
  },
  emits: ["onNextSlide", "onPrevSlide", "onFollow", "onUnFollow"],
  setup(props) {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.slide {
  padding-top: 8px;
  padding-bottom: 30px;
  background-color: #fff;
  min-height: 664px;
  border: 1px solid red;
  border-radius: 10px;
  color: #000;
  position: relative;
  transform: scale(0.8);

  &__content {
    height: 500px;
    background-color: #fafafa;
    overflow-y: scroll;

    padding: 32px 16px;
    &_loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__button {
    width: 270px;
    &_wrap {
      display: flex;
      justify-content: center;
    }
  }
}
.slide_active {
  transform: scale(1);
}
.container {
  padding: 0px 18px;
}
.primaryLine {
  height: 1px;
  width: 100%;
  background: grey;
}

.btn {
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #000;
  position: absolute;
  transition: 0.2s;
  &-next {
    transform: rotate(180deg);
    top: 50%;
    right: -15%;
    &:hover {
      transform: scale(1.4) rotate(180deg);
    }
    /* transform: translate(-50%, 10%); */
  }
  &-prev {
    /* transform: rotate(180deg); */
    top: 50%;
    left: -15%;
    &:hover {
      transform: scale(1.4);
    }
    /* transform: translate(-50%, 0); */
  }
  &:hover {
    .icon {
      color: green;
    }
  }
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 18px;
  transition: 0.2s;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
