<template>
    <div class="chart-container">
        <label>{{ label }}</label>
        <ChartJs></ChartJs>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ChartJs from "./ChartJs.vue";

    @Component({
        components: { ChartJs },
    })
    export default class ChartContainer extends Vue {
        @Prop() label: string = "no label";
    }
</script>

<style scoped>
   .chart-container {
       position: relative;
       width: 400px;
       height: 400px;
   }
</style>
