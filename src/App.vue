<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePostsStore } from '@/stores/post'

const postStore = usePostsStore()
postStore.getPosts()
</script>

<template>
  <header>
    <div class="bg-slate-500 p-3 text-slate-100">
      <nav>
        <RouterLink to="/" class="nav-link">HOME</RouterLink>
        <RouterLink to="/post-create" class="nav-link">CREATE POST</RouterLink>
      </nav>
    </div>
  </header>
  <main class="container w-[80%] pt-8 mx-auto">
    <RouterView />
  </main>
</template>
