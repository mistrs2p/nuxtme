<template>
  <div class="admin-post-page">
    <div class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  asyncData(context) {
    return axios.get('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts/' + context.route.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))  
  },
  methods: {
    onSubmitted(editedPost) {
      return axios.put('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts/' + this.$route.params.postId + '.json', editedPost)
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
 .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>