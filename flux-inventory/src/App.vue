<template>
  <div id="app">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <data-table
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </data-table>
  </div>
</template>

<script>
import DataTable from './components/DataTable'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      data: {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ]
      }
    }
  }
}
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  color: #2c3e50;
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
