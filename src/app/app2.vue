<style scoped>
  .document {
	  text-shadow: 2px 2px 2px #333;
  }
</style>

<template>
  <div>
    <p class="document">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'This app2 component'
      };
    }
  }

</script>