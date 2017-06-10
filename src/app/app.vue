<style>
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
    <input v-model="subMsg" placeholder="edit me">
    <div class="box">
      <p class="document">SubComponent</p>
      <sub-chan v-bind:message="subMsg"></sub-chan>
    </div>
    
  </div>
</template>

<script>
  import sub from './sub';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello world!',
        subMsg: 'input to child component.',
        textdata: "data"
      };
    }, components: {
      'sub-chan': sub
    }
  }

</script>