import Layout from "@/layout";

const alh_CloudDataRouter = {
  path: "/alh_CloudData",
  component: Layout,
  redirect: "/dataList/index",
  meta: { title: "云数据处理中心", icon: "el-icon-s-check" },
  children: [
    // {
    //   path: "message",
    //   component: () => import("@/views/alh_CloudData/message"),
    //   name: "message",
    //   meta: { title: "信息资源标准" },
    // },
    {
      path: "dataList",
      component: () => import("@/views/alh_CloudData/dataList"),
      name: "dataList",
      meta: { title: "数据标准体系" },
    },
    {
      path: "dataStroge",
      component: () => import("@/views/alh_CloudData/dataStroge"),
      name: "dataStroge",
      meta: { title: "数据加工存储" },
    },
    {
      path: "getDataList",
      component: () => import("@/views/alh_CloudData/getDataList"),
      name: "getDataList",
      meta: { title: "源数据获取" },
    },
    {
      path: "dataListServe",
      component: () => import("@/views/alh_CloudData/dataListServe"),
      name: "dataListServe",
      meta: { title: "数据清洗转换" },
    },
    {
      path: "dataImponent",
      component: () => import("@/views/alh_CloudData/dataImponent"),
      name: "dataImponent",
      meta: { title: "数据导入" },
    },
    {
      path: "dataExchange",
      component: () => import("@/views/alh_CloudData/dataExchange"),
      name: "dataExchange",
      meta: { title: "数据交换目标" },
    },
    {
      path: "huanjinData",
      component: () => import("@/views/alh_CloudData/huanjinData"),
      name: "huanjinData",
      meta: { title: "环保数据交换" },
    },
  ],
};

export default alh_CloudDataRouter;
