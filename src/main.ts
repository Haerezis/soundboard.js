import { createApp } from "vue";
import { createPinia } from 'pinia'


import './assets/index.css'
import '@asika32764/vue-animate/dist/vue-animate.css';

// Assumes your root component is App.vue
// and placed in same folder as main.js
// import App from "./App.vue";
import App from "./AppDev.vue";
const myApp = createApp(App);

myApp.use(createPinia())

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
