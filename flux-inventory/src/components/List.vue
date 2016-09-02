<template>
  <div class="inv-list">
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
        },
        {
          itemID: 1,
          itemName: 'Supermoon Guitar Pedal2',
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
