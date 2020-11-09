<template>
  <div class="editBlogComponent">
    <button type="button" class="btn bg-transparent border-0" data-toggle="modal" data-target="#modelId">
      <i class="far fa-edit text-dark"></i>
    </button>

    <div class="modal fade"
         id="modelId"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Blog
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editBlog(blogProp.id)">
              <input type="text" class="form-control my-2" :placeholder="blogProp.title" v-model="state.newBlog.title">
              <input type="text" class="form-control my-2" :placeholder="blogProp.body" v-model="state.newBlog.body">
              <div class="d-flex justify-content-center">
                <i class="fas fa-eye text-dark"></i>
                <input type="checkbox" class="ml-3" v-model="state.newBlog.published">
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn bg-transparent" type="submit">
                  <i class="fas fa-paper-plane text-dark"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { blogService } from '../services/BlogService'
export default {
  name: 'EditBlogComponent',
  props: ['blogProp'],
  setup() {
    const state = reactive({
      newBlog: {

      }
    })
    return {
      state,
      editBlog(blogId, newBlog) {
        blogService.editBlog(blogId, state.newBlog)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
