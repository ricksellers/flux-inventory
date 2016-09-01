<template>
  <div id="app">
  <h1><ui-icon icon="dashboard"></ui-icon>Flux Inventory</h1>
  <div class="group">
    <ui-toolbar type="colored" text-color="white" flat loading>
      <div slot="actions">
          <ui-icon-button type="clear" color="white" icon="arrow_back"></ui-icon-button>
    
          <ui-icon-button type="clear" color="white" icon="star_border"></ui-icon-button>
    
          <ui-icon-button
              type="clear" color="white" icon="more_vert" has-dropdown-menu
              :menu-options="menu" dropdown-position="bottom right"
              >
          </ui-icon-button>
      </div>
    
      Inbox
    </ui-toolbar>
    </div>
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
