<template>
  <div class="createBlog container-fluid">
    <div class="row">
      <createBlogComponent />
    </div>
  </div>
</template>

<script>
import CreateBlogComponent from '../components/createBlogComponent'

export default {
  name: 'CreateBlog',
  components: { CreateBlogComponent },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
