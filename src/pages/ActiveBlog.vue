<template>
  <div class="activeBlog container-fluid">
    <div class="row pt-5">
      <div class="col-8 offset-2 bg-light shadow-lg py-2 radius-25">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h3 class="p-3">
              {{ blog.title }}
            </h3>
            <div v-if="blog.creator">
              <div class="d-flex" v-if="blog.creator.id == profile.id">
                <editBlogComponent :blog-prop="blog" />
                <button class="btn bg-transparent border-0" @click="deleteBlog">
                  x
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="move d-flex">
              <img :src="blog.creator.picture" height="220" class="rounded-circle" alt="" v-if="blog.creator">
              <p class="ml-5">
                {{ blog.body }}
              </p>
            </div>

            <div class="collapse" id="contentId">
              <div class="d-flex justify-content-center">
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
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <button class="btn bg-transparent"
                    type="button"
                    data-toggle="collapse"
                    data-target="#contentId"
                    aria-expanded="false"
                    aria-controls="contentId"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8 offset-2">
        <commentComponent v-for="comment in comments" :key="comment.id" :comment-prop="comment" class="my-2" />
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
import EditBlogComponent from '../components/editBlogComponent'
import { profileService } from '../services/ProfileService'
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
      profileService.getProfile()
      blogService.getActiveBlog(route.params.blogId)
      commentService.getComments(route.params.blogId)
      console.log('profile', AppState.profile)
    })

    return {
      state,
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      profile: computed(() => AppState.profile),
      createComment() {
        commentService.createComment(state.newComment, route.params.blogId)
      },
      deleteBlog() {
        blogService.deleteBlog(route.params.blogId)
      }
    }
  },
  components: { CommentComponent, EditBlogComponent }
}
</script>

<style lang="css" scoped>
.radius-25 {
  border-radius: 25px;
}

.move {
  position: relative;
  top: 0px;
  left: -175px;
}
</style>
