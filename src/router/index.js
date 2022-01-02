import { createRouter, createWebHashHistory } from "vue-router";
import { user } from "@/API";
import routes from "./routes.js";
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// async function beforeRouter(to, from, next) {
//   const authRoute = to.name === "Auth";
//   console.log(to);
//   try {
//     await user.getUserData();
//     next(authRoute ? { name: "Home" } : null);
//   } catch (e) {
//     next(authRoute ? null : { name: "Auth" });
//   }
// }

// eslint-disable-next-line space-before-function-paren
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === "Auth";
  console.log(to);
  try {
    await user.getUserData();
    next(authRoute ? { name: "Home" } : null);
  } catch (e) {
    next(authRoute ? null : { name: "Auth" });
  }
});

export default router;
