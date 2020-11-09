<template>
  <div class="blogsComponent">
    <blogComponent v-for="blog in blogs" :key="blog" :blog-prop="blog" class="radius-25 my-4 shadow-lg p-3 bg-light grow" />
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

<style lang="css" scoped>
.radius-25 {
  border-radius: 25px;
}
.grow:hover {
  transform: scale(1.01);
  transition: all .25s ease-in-out;
  }

</style>
