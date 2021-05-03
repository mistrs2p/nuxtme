<template>
  <form @submit.prevent="onSave">
    <UIAppControlInput v-model="editedPost.author">Author Name</UIAppControlInput>
    <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>
    <UIAppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</UIAppControlInput>
    <UIAppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</UIAppControlInput>
    <UIAppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">previewText</UIAppControlInput>
    <UIAppButton type="submit">Save</UIAppButton>
    <UIAppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</UIAppButton>
  </form>
</template>

<script>
export default {
  name: 'PostForm',
  props: {
    post: {
      type: Object,
      reqired: false
    }
  },
  data() {
    return {
      editedPost: this.post 
        ? { ...this.post } 
        : {
          author: '',
          title: '',
          thumbnailLink: '',
          content: '',
          previewText: ''
      }
    }
  },
  methods: {
    onSave() {
      // Save the Post
      // console.log(this.editedPost)
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }

}
</script>

<style>

</style>