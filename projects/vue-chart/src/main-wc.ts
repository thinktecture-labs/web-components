import ChartJs from '@/components/ChartJs.vue';
import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';

const CustomElement = wrap(Vue, ChartJs);

window.customElements.define('vue-chart-js', CustomElement);
