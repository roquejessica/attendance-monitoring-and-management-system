<script setup>
import CardComponents from '@/components/CardComponents.vue'
import { usePostsStore } from '@/stores/post'
import { ref } from 'vue'

// pinia
const postStore = usePostsStore()

// ref
const postFilter = ref('all') //reactive state

// methods
const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'bookmarked' : 'all'
}
</script>

<template>
  <div class="bg-slate-300 flex justify-between items-center shadow-md p-3 mb-4">
    <p>{{ postFilter === 'all' ? 'All posts' : 'Bookmarked posts' }}</p>
    <button @click="setPostFilter" class="bg-blue-300 p-2 rounded shadow-md">
      {{ postFilter === 'all' ? 'Show bookmarked posts' : 'Show all posts' }}
    </button>
  </div>

  <div v-if="postFilter === 'all'">
    <div v-for="post in postStore.sorted" :key="post.id">
      <CardComponents>
        <template v-slot:card-header>
          <div>
            <h1 class="text-slate-50">{{ post.title }}</h1>
            <p class="text-xs text-slate-200">{{ post.author }} - {{ post.created_at }}</p>
          </div>

          <div class="flex justify-between items-center gap-2">
            <button
              @click="postStore.savePost(post.id)"
              class="save material-icons text-blue-500 p-1 rounded-full bg-white"
            >
              {{ post.is_saved ? 'bookmark' : 'bookmark_border' }}
            </button>
            <button
              @click="postStore.deletePost(post.id)"
              class="del material-icons text-red-500 p-1 bg-white rounded-full"
            >
              delete
            </button>
          </div>
        </template>

        <div class="p-4">
          {{ post.body }}
        </div>
      </CardComponents>
    </div>
  </div>

  <div v-if="postFilter === 'bookmarked'">
    <div v-for="post in postStore.bookmarked" :key="post.id">
      <CardComponents>
        <template v-slot:card-header>
          <div>
            <h1 class="text-slate-50">{{ post.title }}</h1>
            <p class="text-xs text-slate-200">{{ post.author }} - {{ post.created_at }}</p>
          </div>

          <div class="flex justify-between items-center gap-2">
            <button
              @click="postStore.savePost(post.id)"
              class="save material-icons text-blue-500 p-1 rounded-full bg-white"
            >
              {{ post.is_saved ? 'bookmark' : 'bookmark_border' }}
            </button>
            <button
              @click="postStore.deletePost(post.id)"
              class="del material-icons text-red-500 p-1 bg-white rounded-full"
            >
              delete
            </button>
          </div>
        </template>

        <div class="p-4">
          {{ post.body }}
        </div>
      </CardComponents>
    </div>
  </div>
</template>
