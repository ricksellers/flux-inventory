<template>
  <div id="app">
  <h1>Flux Inventory</h1>
    <list></list>
  </div>
</template>

<script>
import List from './components/List'

export default {
  components: {
    List
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

#app h1,h2,h3,h4,h5,h6 {
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
