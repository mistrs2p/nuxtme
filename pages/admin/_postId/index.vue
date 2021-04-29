<template>
  <div class="admin-post-page">
    <div class="update-form">
      <AdminPostForm :post="loadedPost" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedPost: {
        author: 'Mahdi',
        title: 'Poste Man',
        content: 'Mikham Parvaz Konam',
        thumbnailLink: 'https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg'
      }
    }
  }
}
</script>

<style>

</style>