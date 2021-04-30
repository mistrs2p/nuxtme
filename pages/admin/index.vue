<template>
  <div class="admin-page">
    <section class="new-post">
      <UIAppButton @click="createNew">Create Post</UIAppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing post</h1>
      <PostsPostList isAdmin />
    </section>
  </div>
</template>

<script>
export default {
  name: 'admin',
  methods: {
    createNew() {
      this.$router.push('/admin/new-post')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>