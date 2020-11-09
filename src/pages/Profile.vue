<template>
  <div class="about container-fluid">
    <div class="row my-3">
      <div class="col-3 offset-1 d-flex">
        <img class="rounded-circle img-fluid" :src="profile.picture" alt="" />

        <h4 class="text-dark bg-light shadow-lg my-auto ml-2 box-border p-2">
          {{ profile.name }}
        </h4>
      </div>
      <div class="col-8"></div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <div class="row">
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
  max-width: 125px;

}

.box-border {

  border-radius: 25px;
}
</style>
