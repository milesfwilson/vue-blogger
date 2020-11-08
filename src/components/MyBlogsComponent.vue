<template>
  <div class="myBlogsComponent col-3">
    <div class="shadow-lg text-center m-2 p-1">
      <h3 class="">
        {{ blogProp.title }}
      </h3>
      <p>
        {{ blogProp.body }}
      </p>
    </div>
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

<style lang="scss" scoped>

</style>
