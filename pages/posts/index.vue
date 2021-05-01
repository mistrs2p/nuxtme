<template>
  <div class="posts-page">
    <PostsPostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              previewText: "This is First mYPost",
              thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is Second2 mYPost",
              thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
            },
            {
              id: "3",
              title: "Third Post",
              previewText: "This is 3threeee mYPost",
              thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
            },
            {
              id: "4",
              title: "Forth4 Post",
              previewText: "This is 4&4 mYPost",
              thumbnail: "https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
            }
          ]
        })
      }, 1500)
      // reject(new Error)
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e)
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>