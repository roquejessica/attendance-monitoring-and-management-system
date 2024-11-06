<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- Card -->
  <div class="bg-slate-100 rounded-t-lg overflow-hidden shadow-md mb-8">
    <!--Card Header -->
    <div class="bg-slate-500 flex justify-between items-center p-2">
      <div>
        <h1 class="text-slate-50">{{ post.title }}</h1>
        <p class="text-xs text-slate-200">{{ post.author }} - {{ post.created_at }}</p>
      </div>
      <!-- action -->
      <div class="flex justify-between items-center gap-2">
        <button class="save material-icons text-blue-500 p-1 rounded-full bg-white">
          bookmark_border
        </button>
        <button class="del material-icons text-red-500 p-1 bg-white rounded-full">delete</button>
      </div>
    </div>

    <!--Card Body -->
    <div class="p-4">
      {{ post.body }}
    </div>
  </div>
  <button
    class="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-800 hover:text-white"
  >
    Button
  </button>
</template>

<style lang="scss" scoped></style>
