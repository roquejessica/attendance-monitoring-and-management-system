import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false, // Add a loading state to manage the loading indicator
    errMsg: '', // Store error message
  }),
  actions: {
    // Get Posts
    getPosts() {
      this.loading = true
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          this.errMsg = 'Something went wrong while fetching posts'
          console.log(err)
        })
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

      // Optimistically update the UI by adding the new post to the state
      this.posts.push(newPost)

      // Send the new post to the server
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add post')
          }
          alert('Post added successfully!')
        })
        .catch((err) => {
          this.posts = this.posts.filter((p) => p.id !== newPost.id) // Rollback in case of error
          this.errMsg = 'Something went wrong while adding the post'
          console.log(err)
        })
    },

    // Delete Post
    deletePost(id) {
      // Optimistically remove the post from the local state
      this.posts = this.posts.filter((p) => p.id !== id)

      // Send the delete request to the server
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      }).catch((err) => {
        // Rollback the delete in case of error
        this.posts.push(this.posts.find((p) => p.id === id))
        this.errMsg = 'Something went wrong while deleting the post'
        console.log(err)
      })
    },

    // Save or Unsave Post
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      if (post) {
        post.is_saved = !post.is_saved
      }
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
