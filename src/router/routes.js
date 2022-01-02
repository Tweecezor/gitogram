import { feeds } from "@/pages/feeds";
import { stories } from "@/pages/stories";
import { auth } from "@/pages/auth";
export default [
  {
    name: "Home",
    component: feeds,
    path: "/"
  },
  {
    name: "Stories",
    component: stories,
    path: "/stories"
  },
  {
    name: "Auth",
    component: auth,
    path: "/auth"
  }
];
