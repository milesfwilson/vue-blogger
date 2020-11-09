<template>
  <div class="createBlogComponent col-12 pt-5">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-8 box-border p-5 shadow-lg">
        <h3 class="text-center box-border p-2 text-light bg-dark">
          Create Post
        </h3>
        <div class="">
          <form class="form-group" @submit.prevent="createBlog">
            <label for="">Title</label>
            <input type="text" class="form-control box-border" placeholder="Title" v-model="state.newBlog.title" required>
            <label class="mt-3" for="">Blog Content</label>

            <input type="text" class="form-control box-border" placeholder="Content" v-model="state.newBlog.body" required>

            <div class="d-flex justify-content-center mt-3">
              <i class="fas fa-eye text-dark"></i>

              <input type="checkbox" class="ml-3" placeholder="" v-model="state.newBlog.published">
            </div>

            <div class="d-flex justify-content-end">
              <button class="btn bg-transparent" type="submit">
                <i class="fas fa-paper-plane fa-2x text-dark"></i>
              </button>
            </div>
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

<style lang="css" scoped>
.taller {
  height: 100px;
}
.box-border {
  border: 1px solid black;
}

</style>
