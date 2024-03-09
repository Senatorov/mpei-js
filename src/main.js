import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   

import Modal from 'simple-vue-modal';

createApp(App).use(router).use(Modal).mount('#app');
