<template>
  <div class="createBlogComponent col-12 pt-5">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-8">
        <h3 class="text-center">
          Create Post
        </h3>
        <div class="d-flex justify-content-around">
          <form class="" @submit.prevent="createBlog">
            <input type="text" class="border-0 bg-light" placeholder="Add comment" v-model="state.newBlog.title">
            <input type="text" class="border-0 bg-light" placeholder="Add comment" v-model="state.newBlog.body">
            <input type="checkbox" class="border-0 bg-light" placeholder="Add comment" v-model="state.newBlog.published">
            <button class="btn bg-transparent" type="submit">
              +
            </button>
          </form>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
export default {
  name: 'CreateBlogComponent',
  setup() {
    const state = reactive({
      newBlog: {

      }
    })
    return {
      state,
      createBlog(newBlog) {
        blogService.createBlog(state.newBlog)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
