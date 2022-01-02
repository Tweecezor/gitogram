<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title">
        {{ title }}
      </h2>
    </div>
    <div class="card__desc_wrap mb-32">
      <div class="card__desc">
        {{ desc }}
      </div>
    </div>

    <div class="card__stats">
      <stats
        :stars="stars"
        :forks="forks"
      />
    </div>
  </div>
</template>

<script>
import { stats } from "@/components/stats";
export default {

  components: {
    stats
  },
  props: {
    desc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
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
.card {
  padding: 24px 20px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}
</style>
