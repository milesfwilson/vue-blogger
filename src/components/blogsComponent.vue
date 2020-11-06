<template>
  <div class="blogsComponent">
    <blogComponent v-for="blog in blogs" :key="blog" :blog-prop="blog" class="my-5 shadow-lg p-2" />
  </div>
</template>

<script>
import BlogComponent from '../components/blogComponent'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'BlogsComponent',
  setup() {
    return {
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { BlogComponent }
}
</script>

<style lang="scss" scoped>

</style>
