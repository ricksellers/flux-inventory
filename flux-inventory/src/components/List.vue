<template>
  <div class="inv-list">
    <ul>
        <li v-for="item in invItems"><i class="fa fa-square-o" aria-hidden="true"></i> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      invItems: ['Something', 'Other', 'Things']
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

li {
  text-align: left;
  list-style: none;
}

li .fa {
    margin-right: 5px;
}
</style>
