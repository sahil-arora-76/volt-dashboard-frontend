import {createRouter, createWebHistory } from 'vue-router';
import main from './components/page/main.vue'
import login from './components/login/login.vue';
import { store } from './components/store/main';
import send  from './components/embeds/send.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: login },
        { path: '/', component: main }, 
        { path: '/send/:Id', component: send, props: true }
    ], 
    linkActiveClass: 'active'
}); 
export let isAuth  = () => {
    
}
router.beforeEach(async (to) => {
    if (to.fullPath === '/login') { 
        let cookie = document.cookie.split(';'); 
        let index = cookie.findIndex(x => x.includes('token')); 
        if (index >= 0 ) {
            let index = cookie.findIndex(x => x.includes('userid')); 
            if (index < 0 ) { 
                return window.location = '/';
            }
            let userid = cookie[index]; 
            let id = userid.split('=')[1];
            const graphqlQuery = { 
                query: `
                    { 
                        getUser(id:"${id}") {_id id  discriminator avatar username guilds { id name owner permissions permissions_new icon  } } 
                    }
                `
            }
            let res = await fetch('http://localhost:3000/graphql', { 
                method: 'POST',
                headers: { 
                'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(graphqlQuery)
            })
            let response = await res.json(); 
            if (response.errors) {
                return window.location = '/'
            } else { 
                store.state.loginInfo = response;
                // next('/login'); 
            }
        } else { 
            window.location = '/';
        }
    }
})
export default router; 