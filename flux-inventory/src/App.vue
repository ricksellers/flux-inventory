<template>
  <div id="app">
    <h1><ui-icon icon="dashboard"></ui-icon>Flux Inventory</h1>
    <ui-fab type="mini" color="primary" icon="add"></ui-fab>
    <ui-tabs type="icon-and-text" fullwidth>
      <ui-tab icon="book" header="Cat1">
        <list></list>
      </ui-tab>
    
      <ui-tab icon="person" header="Cat2">
        <list></list>
      </ui-tab>
    </ui-tabs>
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
</style>
