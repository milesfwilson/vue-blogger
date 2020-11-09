<template>
  <div class="commentComponent">
    <div v-if="commentProp.creator && commentProp.creator.id != profile.id">
      <div class=" col-12">
        <div class="row">
          <div class="col-12 grow shadow bg-light radius-25 py-2 d-flex">
            <img :src="commentProp.creator.picture" class="small rounded-circle" alt="">
            <p class="pl-2 my-auto">
              {{ commentProp.body }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="col-12 shadow bg-dark text-light radius-25 ml-5 py-2 grow" data-toggle="collapse" :data-target="'#collapse'+commentProp.id">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-end">
              <p class="my-auto pr-2">
                {{ commentProp.body }}
              </p>
              <img :src="commentProp.creator.picture" class="small rounded-circle" alt="">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="collapse" :id="'collapse'+commentProp.id">
              <div class="d-flex" v-if="commentProp.creator">
                <div v-if="commentProp.creator.id == profile.id">
                  <button class="btn bg-transparent border-0 text-light" data-toggle="modal" :data-target="'#modal'+commentProp.id" type="button">
                    <i class="far fa-edit text-light"></i>
                  </button>
                  <button class="btn bg-transparent border-0 text-light" @click="deleteComment(commentProp.id, commentProp.blog)">
                    <i class="fas fa-trash text-light"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade"
         :id="'modal'+commentProp.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Comment
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editComment(commentProp.id, commentProp.blog)">
              <input class="form-control mb-2" type="text" v-model="state.newComment.body" :placeholder="commentProp.body">
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn bg-transparent">
                  <i class="fas fa-paper-plane text-dark"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { commentService } from '../services/CommentService'
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CommentComponent',
  props: ['commentProp'],
  setup() {
    const state = reactive({
      newComment: {

      }
    })

    return {
      state,
      profile: computed(() => AppState.profile),
      deleteComment(id, blog) {
        commentService.deleteComment(id, blog)
      },
      editComment(id, blog, newComment) {
        commentService.editComment(id, blog, state.newComment)
      }
    }
  },
  components: {}
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

.small {
  height: 30px;
}

</style>
