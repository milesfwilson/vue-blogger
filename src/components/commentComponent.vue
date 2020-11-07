<template>
  <div class="commentComponent">
    <div class="shadow bg-light radius-25">
      <p class="p-1 ml-2">
        {{ commentProp.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: ['commentProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="css" scoped>

.radius-25 {
  border-radius: 25px;
}
</style>
