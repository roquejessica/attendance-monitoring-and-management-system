<script setup>
// import CardComponents from '@/components/CardComponents.vue'
import PostItemComponents from '@/components/PostItemComponents.vue'

let posts = [
  {
    id: 1,
    title: 'Sample Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Pedro Penduco',
    created_at: '10/06/2024',
    is_saved: false,
  },
  {
    id: 2,
    title: 'Sample Post 2',
    body: 'Sed non velit velit. Integer nec odio metus. Donec ut turpis ac libero pharetra gravida. Fusce efficitur lectus quis ante dapibus, ut interdum lorem fermentum. Vivamus suscipit, turpis ut cursus tincidunt, elit augue tincidunt magna, ac scelerisque felis lorem non arcu.',
    author: 'Pedro Penduco',
    created_at: '10/06/2024',
    is_saved: false,
  },
  {
    id: 3,
    title: 'Sample Post 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Pedro Penduco',
    created_at: '10/08/2024',
    is_saved: false,
  },
  {
    id: 4,
    title: 'Sample Post 4',
    body: 'Mauris in nisl et tortor tempor accumsan in id felis. Curabitur tincidunt magna in augue luctus, sit amet gravida enim posuere. Sed non velit velit. Integer nec odio metus. Donec ut turpis ac libero pharetra gravida.',
    author: 'Pedro Penduco',
    created_at: '10/08/2024',
    is_saved: false,
  },
  {
    id: 5,
    title: 'Sample Post 5',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Pedro Penduco',
    created_at: '10/10/2024',
    is_saved: false,
  },
]

// methods
const deletePost = (id) => {
  posts = posts.filter((p) => p.id !== id)

  console.log(posts)
}
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <!-- <CardComponents>

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
    </CardComponents> -->

    <PostItemComponents :post="post" @get-id="deletePost" />
  </div>
</template>
