<style>

</style>

<template>
  <div>
    <header-view></header-view>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header.vue';

  export default {
    data() {
      return {
      };
    }, components: {
      'header-view': header
    }
  }
</script>