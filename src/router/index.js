import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostCreateView from '@/views/PostCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //array of object
    {
      path: '/', //forward slash for name home when clicked go to HomeView.vue views
      name: 'home', //home name
      component: HomeView, //on views by default HomeView
    },
    {
      path: '/post-create', //forward slash for name home when clicked go to HomeView.vue views
      name: 'post-create', //home name
      component: PostCreateView, //on views by default HomeView
    },
  ],
})

export default router
