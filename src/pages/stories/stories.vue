<template>
  <div class="wrapper stories">
    <topline class="mb-32">
      <template #headline class="topline__wrap">
        <div class="topline__title_wrap">
          <h1 class="logo topline__title">
            Gitogram/
          </h1>
        </div>

        <div class="topline__icon mr-28">
          <icon icon-name="cross" @click="$router.push({ name: 'Home' })" />
        </div>
      </template>
      <template #content>
        <div class="content">
          <!-- <div class="x-container"> -->
          <div class="slider__list_wrap">
            <ul ref="slider" class="slider__list" :style="sliderStyle">
              <li
                v-for="(item, ndx) in unStarredTrendings"
                :key="item.id"
                class="slider__item"
              >
                <slide
                  :data="getSlideData(item)"
                  :active="ndx === index"
                  :loading="ndx === index && loading"
                  :btns-show="activeBtns"
                  @onNextSlide="handleSlide(ndx + 1)"
                  @onPrevSlide="handleSlide(ndx - 1)"
                  @onFollow="starRepo"
                  @onUnFollow="unStarRepo"
                />
              </li>
            </ul>
          </div>
        </div>
      </template>
    </topline>
  </div>
</template>

<script>
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { topline } from "@/components/topline";
import { slide } from "@/components/slide";
import { icon } from "../../components/icon";

export default {
  components: {
    slide,
    topline,
    icon
  },

  async setup(props) {
    const store = useStore();

    const route = useRoute();

    const initialSlide = Number(route.params.initialSlide);

    const slider = ref(null);

    const loading = ref(false);
    const unStarredTrendings = computed(() => store.getters.getUnStarredOnly);

    const initialIndex = unStarredTrendings.value.findIndex(
      item => item.id === initialSlide
    );

    const index = ref(0);

    const isFirstStory = ndx => Boolean(ndx === 0);
    const isLastStory = ndx =>
      Boolean(ndx === unStarredTrendings.value.length - 1);

    const fetchReadmeForActiveSlide = async function() {
      loading.value = true;
      const { id, owner, name } = unStarredTrendings.value[index.value];
      try {
        await store.dispatch("getReadme", {
          id,
          owner: owner.login,
          repo: name
        });
      } catch (error) {
      } finally {
        loading.value = false;
      }
    };

    const activeBtns = computed(() => {
      if (isFirstStory(index.value)) {
        return ["next"];
      }
      if (isLastStory(index.value)) {
        return ["prev"];
      }
      return ["prev", "next"];
    });

    const sliderStyle = reactive({
      transform: `translateX(-${375 * index.value}px)`,
      transition: `transform 0.8s`
    });

    await store.dispatch("getTrendings");

    await fetchReadmeForActiveSlide();

    const getSlideData = function(trend) {
      return {
        id: trend.id,
        username: trend.owner?.login,
        content: trend.readme,
        avatar: trend.owner?.avatar_url,
        following: trend.following
      };
    };

    const handleSlide = async function(newIndex) {
      if (newIndex < 0) {
        newIndex = 0;
      }

      index.value = newIndex;

      sliderStyle.transform = `translateX(-${(375 + 40) * index.value}px)`;
      await fetchReadmeForActiveSlide();
    };

    handleSlide(initialIndex);

    const starRepo = function(repoId) {
      store.dispatch("starRepo", repoId);
    };

    const unStarRepo = function(repoId) {
      store.dispatch("unStarRepo", repoId);
    };
    // await fetchTrendings();

    return {
      unStarredTrendings,
      slider,
      getSlideData,
      index,
      handleSlide,
      isFirstStory,
      isLastStory,
      sliderStyle,
      activeBtns,
      loading,
      starRepo,
      unStarRepo
    };
  }
};
</script>

<style lang="scss" scoped>
.stories {
  background: #000;
  color: #fff;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  height: 100vh;
}
.slide {
  width: 375px;
}
.header {
  margin-bottom: 30px;
}

.slider__list {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: transform 0.4s;
  /* transform: translateX(-200px); */
  &_wrap {
    overflow: hidden;
    /* width: 1200px; */
  }
}

.slider__item {
  margin-right: 40px;
}

.topline {
  background: #000;
  border-bottom: transparent;
  &__wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__icon {
    color: #fff;
    width: 22px;
    height: 22px;
    &:hover {
      cursor: pointer;
    }
  }
}

/* .logo {
  &:hover {
    cursor: pointer;
  }
} */
</style>
