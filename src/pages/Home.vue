<template>
  <div class="home container fluid">
    <div class="row">
      <div class="col-8 offset-2">
        <blogsComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { blogService } from '../services/BlogService'
import { onMounted } from 'vue'
import BlogsComponent from '../components/blogsComponent'
// import { AppState } from '../AppState'
export default {
  name: 'Home',
  components: { BlogsComponent },
  setup() {
    onMounted(() => {
      blogService.getAllBlogs()
    })
    return {
      // blogs: computed(() => AppState.blogs)
    }
  }
}
</script>
