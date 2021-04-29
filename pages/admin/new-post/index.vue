<template>
  <div class="admin-new-post-page">
    <sectoin class="new-post-form">
      <form @submit.prevent="onSave">
        <UIAppControlInput v-model="editedPost.author">Author Name</UIAppControlInput>
        <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>
        <UIAppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</UIAppControlInput>
        <UIAppControlInput
          control-type="textarea"
          v-model="editedPost.content">Content</UIAppControlInput>
        <UIAppButton type="submit">Save</UIAppButton>
        <UIAppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel">Cancel</UIAppButton>
      </form>
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