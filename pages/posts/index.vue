<template>
  <div class="posts-page">
    <section class="posts-list">
      <PostsPostPreview
        id="1"
        thumbnail="https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
        title="Hello There"
        previewText="This is my first post" />
      <PostsPostPreview
        id="2"
        thumbnail="https://www.dti.dk/_/media/73504&w=1460&h=808&r=cover&_filename=73504_Web_tech-mining.jpg"
        title="Hi Here"
        previewText="This is my Second post" />      
      <PostsPostPreview
        id="3"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-GzPP9Za0RMIcDruDbTgF25fKvEsTlbIWg&usqp=CAU"
        title="By Now"
        previewText="This is my Third post" />      
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>