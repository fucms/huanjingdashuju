import Layout from "@/layout";

const alh_officeAutomationRouter = {
  path: "/alh_officeAutomation",
  component: Layout,
  redirect: "/myProject/index",
  meta: { title: "办公自动化系统", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_officemyProject",
      component: () =>
        import("@/views/alh_officeAutomation/myProject/index.vue"),
      name: "alh_officemyProject",
      meta: { title: "我的工作台" },
    },
    {
      path: "document_list",
      component: () =>
        import("@/views/alh_officeAutomation/document_list/index.vue"),
      name: "document_list",
      meta: { title: "公文管理" },
    },
    {
      path: "meeting",
      component: () => import("@/views/alh_officeAutomation/meeting/index.vue"),
      name: "meeting",
      meta: { title: "会议管理" },
    },
    {
      path: "cart_list",
      component: () => import("@/views/alh_officeAutomation/cart_list/index.vue"),
      name: "cart_list",
      meta: { title: "车辆管理" },
    },
    {
      path: "reception",
      component: () => import("@/views/alh_officeAutomation/reception/index.vue"),
      name: "reception",
      meta: { title: "接待管理" },
    },
    {
      path: "addressBook",
      component: () => import("@/views/alh_officeAutomation/addressBook/index.vue"),
      name: "addressBook",
      meta: { title: "通讯录" },
    },
    {
      path: "workCommunication",
      component: () => import("@/views/alh_officeAutomation/workCommunication/index.vue"),
      name: "workCommunication",
      meta: { title: "工作交流" },
    },
  ],
};

export default alh_officeAutomationRouter;
