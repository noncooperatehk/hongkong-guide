<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="search-box">
      <md-field>
        <label>Type Names To Search</label>
        <md-input v-model="searchValue" placeholder="type names to search... like yoshinoya" v-on:keyup.enter="doSearch($event)"></md-input>
      </md-field> 
    </div>
    <CompanyPreview v-for="(companyPreview,index) in companyPreviews" v-bind:preview="companyPreview" v-bind:key="index"></CompanyPreview>
  </div>
</template>

<script>
import CompanyPreview from './CompanyPreview.vue'
export default {
  name: 'SearchCompany',
  props: {
    msg: String
  },
  data: () => ({
    searchValue: null,
    companyPreviews: []
  }),
  methods: {
    doSearch: function(event) {
      if (event) event.preventDefault()
      let searchResult = this.$compDb.find(this.searchValue)
      this.companyPreviews = searchResult
    }
  },
  components: {
    CompanyPreview
  }
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
