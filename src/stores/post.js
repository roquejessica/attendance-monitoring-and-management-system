import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'Sample Post 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Pedro Penduco',
        created_at: '10/06/2024',
        is_saved: false,
      },
      {
        id: 2,
        title: 'Sample Post 2',
        body: 'Sed non velit velit. Integer nec odio metus. Donec ut turpis ac libero pharetra gravida.',
        author: 'Pedro Penduco',
        created_at: '10/06/2024',
        is_saved: false,
      },
      {
        id: 3,
        title: 'Sample Post 3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Pedro Penduco',
        created_at: '10/08/2024',
        is_saved: false,
      },
      {
        id: 4,
        title: 'Sample Post 4',
        body: 'Mauris in nisl et tortor tempor accumsan in id felis.',
        author: 'Pedro Penduco',
        created_at: '10/08/2024',
        is_saved: false,
      },
      {
        id: 5,
        title: 'Sample Post 5',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Pedro Penduco',
        created_at: '10/10/2024',
        is_saved: false,
      },
    ],
  }),
  actions: {
    // Create Post
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Juan Dela Cruz',
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      })
      alert('Post added successfully!')
    },

    // Delete Post
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id) //find is finding the object that has that id and returns true
      post.is_saved = !post.is_saved // changes state inside add posts and is_saved: false to true and vice versa
    },
  },
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
  },
})
