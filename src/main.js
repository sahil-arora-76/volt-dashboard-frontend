import { createApp } from 'vue'; 
import App from './App.vue'
import router from './routes';
import { store } from './components/store/main';

const app = createApp(App); 
app.use(router);
app.use (store);
app.mount('#app'); 