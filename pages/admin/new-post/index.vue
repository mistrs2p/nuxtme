<template>
  <div class="admin-new-post-page">
    <sectoin class="new-post-form">

    </sectoin>
  </div>
</template>

<script>
export default {
  name: 'new-post',
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      // Save the Post
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }

}
</script>

<style>

</style>