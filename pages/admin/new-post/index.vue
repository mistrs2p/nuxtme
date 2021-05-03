<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm  @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'new-post',
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      axios
        .post('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts.json', {
          ...postData, 
          updatedDate: new Date() 
        })
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
 

  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }

</style>