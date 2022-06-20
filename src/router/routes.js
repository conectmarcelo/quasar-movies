
const routes = [
  {
    path: '/trending',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'trending', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
