import Layout from "@/layout";

const alh_devCenterRouter = {
  path: "/resourceShow",
  component: Layout,
  redirect: "/resourceShow/index",
  meta: { title: "开发中心", icon: "el-icon-s-check" },
  children: [
    {
      path: "serveApi",
      component: () => import("@/views/alh_devCenter/serveApi/index.vue"),
      name: "serveApi",
      meta: { title: "资源目录服务接口" },
    },
    {
      path: "tableServeApi",
      component: () => import("@/views/alh_devCenter/tableServeApi/index.vue"),
      name: "tableServeApi",
      meta: { title: "数据服务接口" },
    },
    {
      path: "functionApi",
      component: () => import("@/views/alh_devCenter/functionApi/index.vue"),
      name: "functionApi",
      meta: { title: "功能服务接口" },
    },
    {
      path: "webServeApi",
      component: () => import("@/views/alh_devCenter/webServeApi/index.vue"),
      name: "webServeApi",
      meta: { title: "WEB服务接口" },
    },
    {
      path: "classLibrary",
      component: () => import("@/views/alh_devCenter/classLibrary/index.vue"),
      name: "classLibrary",
      meta: { title: "类库参考" },
    },
    {
      path: "userTableServe",
      component: () => import("@/views/alh_devCenter/userTableServe/index.vue"),
      name: "userTableServe",
      meta: { title: "用户数据服务" },
    },
    {
      path: "developerGuide",
      component: () => import("@/views/alh_devCenter/developerGuide/index.vue"),
      name: "developerGuide",
      meta: { title: "开发指南" },
    },
    {
      path: "sharingAgreement",
      component: () =>
        import("@/views/alh_devCenter/sharingAgreement/index.vue"),
      name: "sharingAgreement",
      meta: { title: "共享协议扩展" },
    },
    {
      path: "tableServeExtend",
      component: () =>
        import("@/views/alh_devCenter/tableServeExtend/index.vue"),
      name: "tableServeExtend",
      meta: { title: "数据服务接口扩展" },
    },
    {
      path: "functionServe",
      component: () =>
        import("@/views/alh_devCenter/functionServe/index.vue"),
      name: "functionServe",
      meta: { title: "功能服务接口" },
    },
    {
      path: "support",
      component: () =>
        import("@/views/alh_devCenter/support/index.vue"),
      name: "support",
      meta: { title: "二次开发支持" },
    },
  ],
};

export default alh_devCenterRouter;
