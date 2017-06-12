<template>
  <h3>{{message}}</h3>
</template>

<script>
  export default {
    name: 'sub-component',
    props: ['message'],
    data() {
      return {
      }
    }
  }
</script>

<style>
  h3 {
    color:blue;
  }
</style>