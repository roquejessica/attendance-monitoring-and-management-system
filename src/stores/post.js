import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  actions: {
    getPosts() {
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          // this.loading = false
        })
        .catch((err) => {
          // this.loading = false
          this.errMsg = 'Something went wrong'
          console.log(err)
        })
      // console.log('called')
    },
    // Create Post
    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Juan Dela Cruz',
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      }

      this.posts.push(newPost)
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost),
      }).catch((err) => {
        this.loading = false
        this.errMsg = 'Something went wrong'
        console.log(err)
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
    bookmarked: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
  },
})
