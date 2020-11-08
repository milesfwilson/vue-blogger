<template>
  <div class="createBlogComponent col-12 pt-5">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-8">
        <h3 class="text-center">
          Create Post
        </h3>
        <div class="">
          <form class="form-group" @submit.prevent="createBlog">
            <label for="">Title</label>
            <input type="text" class="form-control" placeholder="Title" v-model="state.newBlog.title">
            <label class="mt-3" for="">Blog Content</label>

            <input type="text" class="form-control" placeholder="Content" v-model="state.newBlog.body">

            <label class="mt-3" for="">Visible to all?</label>
            <input type="checkbox" class="ml-3" placeholder="" v-model="state.newBlog.published">

            <button class="btn bg-transparent" type="submit">
              Publish
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
