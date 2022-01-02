<template>
  <div class="auth">
    <h1 class="mb-12">Gitogram/</h1>
    <h3 class="mb-32">
      More than just one repository. This is our digital world.
    </h3>
    <Button text="Authorize with github" @click="getCode"> </Button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { button as Button } from "@/components/button";
import env from "../../../env";
import axios from "axios";
export default {
  components: {
    Button
  },
  async setup() {
    const router = useRouter();
    const store = useStore();

    const getCode = () => {
      const githubAuthApi = "https://github.com/login/oauth/authorize";
      const params = new URLSearchParams();
      params.append("client_id", env.cliendId);
      params.append("scope", "repo:status public_repo read:user");
      window.location.href = `${githubAuthApi}?${params}`;
    };

    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);
    if (code) {
      const token = await store.dispatch("authUserByCode", code);
      console.log(token);
      localStorage.setItem("token", token);
      axios.defaults.headers.Authorization = `token ${token}`;
      router.push({ name: "Home" });
      // window.location = env.redirect_url;
    }

    return { getCode };
  }
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
