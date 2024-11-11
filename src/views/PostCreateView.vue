<script setup>
import { reactive } from 'vue'
import CardCompoenents from '@/components/CardCompoenents.vue'

const post = reactive({
  title: 'Hello World',
  body: '',
})
</script>

<template>
  <CardCompoenents>
    <div class="px-3 py-4">
      <form action="">
        <h3 class="mb-8">Create new Post</h3>
        <div class="mb-3">
          <label class="block">Title</label>
          <input type="text" v-model="post.title" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="block">Body</label>
          <textarea v-model="post.title" class="form-control"></textarea>
        </div>
        <div class="mb-5">
          <button class="p-2 bg-slate-500 w-full rounded-md text-white">Add</button>
        </div>
      </form>
    </div>
  </CardCompoenents>
</template>
