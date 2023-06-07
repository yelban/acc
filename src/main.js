import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import Vuetify from 'vuetify/dist/vuetify.min.js';

import App from './App.vue';

const { createVuetify } = Vuetify;
const vuetify = createVuetify();
createApp(App).use(vuetify).mount('#app');
