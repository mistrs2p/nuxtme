<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm  @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'new-post',
  layout: 'admin',
  methods: {
    onSubmitted(postData)
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