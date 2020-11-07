<template>
  <div class="activeBlog container-fluid">
    <div class="row pt-5">
      <div class="col-8 offset-2 bg-light shadow-lg py-2 radius-25">
        <div class="row">
          <div class="col-12">
            <h3 class="text-center">
              {{ blog.title }}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <p class="pb-3">
              {{ blog.body }}
            </p>
            <div class="d-flex justify-content-around">
              <form class="" @submit.prevent="createComment">
                <input type="text" class="border-0 bg-light" placeholder="Add comment" v-model="state.newComment.body">
                <button class="btn bg-transparent" type="submit">
                  +
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8 offset-2">
        <commentComponent v-for="comment in comments" :key="comment.id" :comment-prop="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { blogService } from '../services/BlogService'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import CommentComponent from '../components/commentComponent'
export default {
  name: 'ActiveBlog',
  setup() {
    const route = useRoute()
    const state = reactive({
      newComment: {
        blog: route.params.blogId
      }
    })
    onMounted(() => {
      blogService.getActiveBlog(route.params.blogId)
      commentService.getComments(route.params.blogId)
    })

    return {
      state,
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      profile: computed(() => AppState.profile),
      createComment() {
        commentService.createComment(state.newComment)
      }
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="css" scoped>
.radius-25 {
  border-radius: 25px;
}
</style>
