<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="add-item col-md-6">
          <i class="fa fa-plus-circle" aria-hidden="true"> Add Item</i>
        </div>
        <div class="col-md-6">
          <form id="search">
            <input name="query" placeholder="Search your inventory..." v-model="searchQuery">
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        <data-table
          :data="invItems"
          :columns="invColumns"
          :filter-key="searchQuery"
          :edit-table="editTable">
        </data-table>
        </div>
      </div>
    </div>
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
      editTable: true,
      invColumns: [
        'itemID',
        'itemName',
        'category',
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
  color: #6D9D90;
  text-decoration: none;
}

#app a:hover {
  color: #2B6B59;
}

#app h1,h2,h3,h4,h5,h6 {
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
}

#search {
  text-align: right;
  margin-top: 20px;
  margin-bottom: 20px;
}

  #search input {
    padding: 5px;
  }
  
.add-item {
  margin-top: 20px;
  text-align: left;
}
</style>
