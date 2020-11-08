<template>
  <div class="editBlogComponent">
    <button type="button" class="btn bg-transparent border-0" data-toggle="modal" data-target="#modelId">
      e
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
            <form class="" @submit.prevent="editBlog(blogProp.id)">
              <input type="text" class="border-0 bg-light" :placeholder="blogProp.title" v-model="state.newBlog.title">
              <input type="text" class="border-0 bg-light" :placeholder="blogProp.body" v-model="state.newBlog.body">
              <input type="checkbox" class="border-0 bg-light" v-model="state.newBlog.published">
              <button class="btn bg-transparent" type="submit">
                +
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save
            </button>
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
