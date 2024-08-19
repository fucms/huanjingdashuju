import Layout from "@/layout";

const alh_resourceShowRouter = {
  path: "/showTable",
  component: Layout,
  redirect: "/showTable/index",
  meta: { title: "资源展示", icon: "el-icon-s-check" },
  children: [
    {
      path: "showTable",
      component: () => import("@/views/alh_resourceShow/showTable/index.vue"),
      name: "showTable",
      meta: { title: "数据展示" },
    },
    {
      path: "moreWind",
      component: () => import("@/views/alh_resourceShow/moreWind/index.vue"),
      name: "moreWind",
      meta: { title: "多窗口对比" },
    },
    {
      path: "historyImage",
      component: () =>
        import("@/views/alh_resourceShow/historyImage/index.vue"),
      name: "historyImage",
      meta: { title: "历史图层对比" },
    },
    {
      path: "otherShow",
      component: () => import("@/views/alh_resourceShow/otherShow/index.vue"),
      name: "otherShow",
      meta: { title: "其他功能展示" },
    },
  ],
};

export default alh_resourceShowRouter;
