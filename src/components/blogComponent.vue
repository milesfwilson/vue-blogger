<template>
  <div class="blogComponent row bg-light" v-if="blogProp.creator && blogProp.published">
    <div class="col-12">
      <div class="row">
        <div class="col-12 d-flex">
          <div v-if="blogProp.creator">
            <img :src="blogProp.creator.picture" class="rounded-circle img-fluid tiny shadow" alt="">
            <h6>{{ blogProp.creator.name }}</h6>
          </div>
          <h3 class="ml-auto">
            {{ blogProp.title }}
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="pb-3">
            {{ blogProp.body }}
          </p>
          <router-link :to="{name: 'ActiveBlog', params: {blogId: blogProp.id}}" class=" text-dark">
            <h6 class="text-right">
              Read Full Post
            </h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogComponent',
  props: ['blogProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
