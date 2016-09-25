<template>
  <div id="app">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <data-table
      :data="invItems"
      :columns="invColumns"
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
      searchQuery: '',
      invColumns: [
        'itemID',
        'itemName',
        'itemDateAdded'
      ],
      invItems: [
        {
          itemID: 0,
          itemName: 'Supermoon Guitar Pedal',
          itemModelNumber: 'MBSM1487',
          itemMaker: 'Mr. Black',
          itemDescription: 'Supermoon Modulated Reverberator guitar pedal. This pedal is handmade by Mr. Black in Portland, Oregon, USA.',
          itemPurchasePrice: 249.00,
          itemPurchaseDate: '09/24/2016',
          itemSerialNumber: 'N/A',
          itemImages: ['test.jpg', 'test2.jpg'],
          itemDateAdded: '04/12/16',
          category: 'instruments',
          itemTags: ['music', 'guitar', 'pedal', 'supermoon', 'mr. black']
        },
        {
          itemID: 1,
          itemName: 'Thunderclaw Guitar Pedal',
          itemModelNumber: 'MBSM1487',
          itemMaker: 'Mr. Black',
          itemDescription: 'Thunderclaw Highgain Distortion Machine. This pedal is handmade by Mr. Black in Portland, Oregon, USA.',
          itemPurchasePrice: 249.00,
          itemPurchaseDate: '09/24/2016',
          itemSerialNumber: 'N/A',
          itemImages: ['test.jpg', 'test2.jpg'],
          itemDateAdded: '04/12/16',
          category: 'instruments',
          itemTags: ['music', 'guitar', 'pedal', 'thunderclaw', 'mr. black']
        }
      ]
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
#search {
  margin-bottom: 20px;
}
</style>
