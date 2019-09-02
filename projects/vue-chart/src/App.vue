<template>
  <div id="app">
    <ChartJs></ChartJs>
  </div>
</template>

<script lang="ts">
import ChartJs from '@/components/ChartJs.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ChartJs,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
