<style scoped>
  .red {
    color: #f00;
  }

  .box {
    border: #000 1px solid;
  }
</style>

<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <p>Test</p>
    <router-link to="/">Back</router-link>
  </div>

  
</template>

<script>
  export default {
    name: 'AppContent2',
    data() {
      return {
        msg: 'This is AppContent2!'
      };
    }
  }

</script>