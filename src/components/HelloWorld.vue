<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="search-box">
      <md-field>
        <label>Type Names To Search</label>
        <md-input v-model="searchInitValue"></md-input>
      </md-field>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    searchInitValue: 'yoshinoya'  
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
  margin-right: 20%;
  margin-left: 20%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
