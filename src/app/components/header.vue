<style scoped>
  .header-title {
    width: 100%;
    padding: 0.2rem;
  }

  .header-title {
    padding: 0;
    margin: 0;
    font-size: 3rem;
  }

  .menu-list {
    display: flex;
	flex-flow: row;
  }
</style>

<template>
  <div class="header">
      <h1 class="header-title">Header Menu</h1>

      <nav class="menu-nav">
        <ul class="menu-list">
            <li class="menu-list__item"><router-link to="/">Top</router-link></li>
            <li class="menu-list__item"><router-link to="/content2">content2</router-link></li>
        </ul>
      </nav>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
      };
    }
  }
</script>