<template>
    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img v-bind:src="getUrl(preview.imageUrl)" crossorigin="">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">{{preview.title}}</span>
            <span class="md-subhead">{{preview.shortSummary}}</span>
            <span class="md-subhead">{{preview.address}}</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>view_list</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
</template>

<script>
export default {
  name: 'CompanyPreview',
  props: {
    preview: Object
  },
  methods: {
    getUrl: function(fileName) {
        return require('./../assets/' + fileName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
