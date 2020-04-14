<template>
  <ParentLayout>
      <template v-slot:page-top>
        <!-- <h1>Here might be a page title</h1> -->
        {{groups }}
        {{ test }}
        <slot/>
      </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

export default {
  components: {
    ParentLayout,
  },
  data: function(){
    return {
      groups: $page.frontmatter.teams,
      test: "hello world"
    }
  }
}
</script>

<style>

</style>