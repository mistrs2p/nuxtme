import axios from 'axios'

const actions = () => ({
  nuxtServerInit(vuexContext, context) {
    return axios.get('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for(const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        vuexContext.commit('setPosts', postsArray)
      })
      .catch(e => context.error(e))
  },
  addPost(vuexContext, post) {
    const createdPost = {
      ...post, 
      updatedDate: new Date() 
    }
    axios
    .post('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts.json', createdPost)
    .then(res => {
      // vuexContext.commit('addPost', createdPost)
      vuexContext.commit('addPost', {...createdPost, id: res.data.name})
    })
    .catch(err => console.log(err))
  },
  editPost(vuexContext, editedPost) {
    return axios.put('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
    .then(res => {
      vuexContext.commit('editPost', editedPost)
    })
    .catch(err => console.log(err))
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  }
})

export default actions