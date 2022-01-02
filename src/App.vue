<template>
  <suspense>
    <Router-view />
  </suspense>
</template>

<script>
// import { feeds } from "./pages/feeds";
export default {
  name: "App",
  components: {
    // feeds
  }
};
</script>
<style src="./global.scss" lang="scss">
p {
  color: red;
}
</style>
