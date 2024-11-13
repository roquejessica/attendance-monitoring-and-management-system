import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  // Data
  state() {
    return {
      posts: [],
      loading: true,
      errMsg: '',
    }
  },

  // Computed Getters
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    bookmarked: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
  },

  // Methods/Actions
  actions: {
    getPosts() {
      this.loading = true
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false // Set loading to false after posts are fetched
        })
        .catch((err) => {
          this.loading = false
          this.errMsg = 'Something went wrong while fetching posts'
          console.log(err)
        })
    },

    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Juan Dela Cruz',
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      }

      // Optimistically add the post to the state
      this.posts.push(newPost)

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
          // Rollback post in case of error
          this.posts = this.posts.filter((p) => p.id !== newPost.id)
          this.errMsg = 'Something went wrong while adding the post'
          console.log(err)
        })
    },

    deletePost(id) {
      // Optimistically remove the post from the local state
      const deletedPost = this.posts.find((p) => p.id === id)
      this.posts = this.posts.filter((p) => p.id !== id)

      // Delete the post on the server
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      }).catch((err) => {
        // Rollback the delete in case of error
        this.posts.push(deletedPost)
        this.errMsg = 'Something went wrong while deleting the post'
        console.log(err)
      })
    },

    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ is_saved: post.is_saved }),
      }).catch((err) => {
        this.errMsg = 'Something went wrong while updating the post'
        console.log(err)
      })
    },
  },
})
