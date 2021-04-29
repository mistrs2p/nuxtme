<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
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
export default {}
</script>

<style>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  
</style>
