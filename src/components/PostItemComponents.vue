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
  <div>
    <!--Card Header -->
    <div>
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
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
