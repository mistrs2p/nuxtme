<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>