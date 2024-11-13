<script setup>
// import PostItemComponents from '@/components/PostItemComponents.vue'
import CardComponents from '@/components/CardComponents.vue'
import { usePostsStore } from '@/stores/post'

const postStore = usePostsStore()
console.log(postStore)
// methods
// const deletePost = (id) => {
//   posts = posts.filter((p) => p.id !== id)

//   console.log(posts)
// }
</script>

<template>
  <div v-for="post in postStore.posts" :key="post.id">
    <CardComponents>
      <template v-slot:card-header>
        <div>
          <h1 class="text-slate-50">{{ post.title }}</h1>
          <p class="text-xs text-slate-200">{{ post.author }} - {{ post.created_at }}</p>
        </div>

        <div class="flex justify-between items-center gap-2">
          <button class="save material-icons text-blue-500 p-1 rounded-full bg-white">
            bookmark_border
          </button>
          <button class="del material-icons text-red-500 p-1 bg-white rounded-full">delete</button>
        </div>
      </template>

      <div class="p-4">
        {{ post.body }}
      </div>
    </CardComponents>

    <!-- <PostItemComponents :post="post" @get-id="deletePost" /> -->
  </div>
</template>
