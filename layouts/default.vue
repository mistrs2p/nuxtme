<template>
  <div>
    <NavigationTheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <NavigationTheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
<style>
html {
  font-family: 'Ubuntu', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
