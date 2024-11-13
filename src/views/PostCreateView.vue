<script setup>
import { reactive, computed } from 'vue'
import CardComponents from '@/components/CardComponents.vue'

// reactive
const post = reactive({
  title: '',
  body: '',
})
// computed
const isFormInvalid = computed(() => {
  return post.title === '' || post.body === ''
})

// methods
const formSubmit = () => {
  console.log(post)
}
</script>

<template>
  <CardComponents>
    <div class="px-3 py-4">
      <form @submit.prevent="formSubmit">
        <h3 class="mb-8">Create new Post</h3>
        <div class="mb-3">
          <label class="block">Title</label>
          <input type="text" v-model="post.title" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="block">Body</label>
          <!-- Corrected v-model binding -->
          <textarea v-model="post.body" class="form-control"></textarea>
        </div>
        <div class="mb-5">
          <button
            class="p-2 bg-slate-500 w-full rounded-md text-white"
            :disabled="isFormInvalid"
            :class="isFormInvalid && 'bg-slate-400 cursor-not-allowed'"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </CardComponents>
</template>
