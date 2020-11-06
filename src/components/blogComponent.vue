<template>
  <div class="blogComponent row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 d-flex">
          <div>
            <img :src="blogProp.creator.picture" class="rounded-circle img-fluid tiny" alt="">
            <p>{{ blogProp.creator.name }}</p>
          </div>
          <h4 class="ml-auto">
            {{ blogProp.title }}
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
            {{ blogProp.body }}
          </p>
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
