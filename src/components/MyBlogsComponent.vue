<template>
  <div class="myBlogsComponent col-4">
    <router-link :to="{name: 'ActiveBlog', params: {blogId: blogProp.id}}" class="text-decoration">
      <div class="grow">
        <h4 class="shadow-lg bg-dark text-light text-center m-2 p-2 radius ">
          {{ blogProp.title }}
        </h4>

        <div class="shadow-lg text-left m-2 p-2 radius text-dark ">
          <p class="p-1">
            {{ blogProp.body }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'MyBlogsComponent',
  props: ['blogProp'],
  setup() {
    return {

    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.radius {
  border-radius: 20px;
}

.text-decoration {
  text-decoration: none;
}

.grow:hover {
  transform: scale(1.01);
  transition: all .25s ease-in-out;
  }
</style>
