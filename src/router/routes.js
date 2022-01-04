import { feeds } from "@/pages/feeds";
import { stories } from "@/pages/stories";
import { auth } from "@/pages/auth";
import { profile } from "@/pages/profile";
import { following } from "@/components/following";
import { repos } from "@/components/repos";

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
  },
  {
    name: "Profile",
    component: profile,
    path: "/profile/",
    children: [
      {
        name: "Repos",
        component: repos,
        path: ""
      },
      {
        name: "Following",
        component: following,
        path: "following"
      }
    ]
  }
];
