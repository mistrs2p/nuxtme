const mutations = () => ({
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  }
})

export default mutations
