import Layout from '@/layout'

const environmentalRouter = {
  path: '/environmentalAll',
  component: Layout,
  redirect: '/environmental/index',
  meta: { title: '综合应用管理系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'environmental',
      component: () =>
        import('@/views/alh_application/environmental/index.vue'),
      name: 'environmental',
      meta: { title: '环保信息查询' }
    },
    {
      path: 'environmental_ff',
      component: () =>
        import('@/views/alh_application/environmental_ff/index.vue'),
      name: 'environmental_ff',
      meta: { title: '环保信息分发' }
    },
    {
      path: 'schedule',
      component: () => import('@/views/alh_application/schedule/index.vue'),
      name: 'schedule',
      meta: { title: '日程管理' }
    },
    {
      path: 'myProject',
      component: () => import('@/views/alh_application/myProject/index.vue'),
      name: 'myProject',
      meta: { title: '我的工作台' }
    }
  ]
}

export default environmentalRouter
