<template>
  <div class="inv-list">
    <ul>
        <li v-for="item in invItems">
          <p><b>ID:</b> {{ item.itemID }}</p>
          <p><b>Item Name:</b> {{ item.itemName }}</p>
          <p><b>Model Number:</b> {{ item.itemModelNumber }}</p>
          <p><b>Make/Model: </b>{{ item.itemMaker }}</p>
          <p><b>Item Description: </b>{{ item.itemDescription }}</p>
          <p><b>Purchase Price: </b>{{ item.itemPurchasePrice }}</p>
          <p><b>Purchse Date: </b>{{ item.itemPurchaseDate }}</p>
          <p><b>Serial Number: </b>{{ item.itemSerialNumber }}</p>
          <p><b>Images: </b>{{ item.itemImages }}</p>
          <p><b>Categories: </b>{{ item.category}}</p>
          <p><b>Tags: </b>{{ item.itemTags}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      invItems: [
        {
          itemID: 0,
          itemName: 'Supermoon Guitar Pedal',
          itemModelNumber: 'MBSM1487',
          itemMaker: 'Mr. Black',
          itemDescription: 'Supermoon Modulated Reverberator guitar pedal. This pedal is handmade by Mr. Black in Portland, Oregon, USA.',
          itemPurchasePrice: 249.00,
          itemPurchaseDate: '06/14/2015',
          itemSerialNumber: 'N/A',
          itemImages: ['test.jpg', 'test2.jpg'],
          category: 'instruments',
          itemTags: ['music', 'guitar', 'pedal', 'supermoon', 'mr. black']
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

b {
    font-family: 'Raleway', sans-serif;
}

li {
  text-align: left;
  list-style: none;
}

  li .fa {
      margin-right: 5px;
  }
  
  li p {
    margin: 0;
  }
  
.tags {
  display: inline;
  background: gainsboro;
  padding: 3px;
}
</style>
