<template>
  <div class="about text-center container-fluid">
    <div class="row">
      <div class="col-8 offset-2 d-flex justify-content-center">
        <div class="d-flex mt-5">
          <img class="rounded-circle img-fluid shadow-lg mr-3" :src="profile.picture" alt="" />

          <h1 class=" my-auto bg-dark text-light">
            Profile
          </h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <div class="row pt-5">
          <myBlogsComponent v-for="blog in blogs" :key="blog.id" :blog-prop="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
import MyBlogsComponent from '../components/MyBlogsComponent'
export default {
  name: 'Profile',
  components: { MyBlogsComponent },
  setup() {
    const state = reactive({

    })
    onMounted(() => {
      blogService.getMyBlogs()
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.myBlogs)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
