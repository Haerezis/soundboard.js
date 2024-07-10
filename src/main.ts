import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from 'pinia'


// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import './assets/index.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./AppDev.vue";
const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
myApp.use(createPinia())

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
