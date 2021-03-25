import {createRouter, createWebHistory } from 'vue-router';
import main from './components/page/main.vue'
import login from './components/login/login.vue';
import { store } from './components/store/main';
import send  from './components/embeds/send.vue';
import vote from './components/votes/votes.vue';
import { document, window } from 'globalthis/implementation';


//not to mention

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: login },
        { path: '/', component: main }, 
        { path: '/send/:Id', component: send, props: true }, 
        { path: '/votes', component: vote }, 
    ], 
    linkActiveClass: 'active'
}); 
export let isAuth  = () => {
    
}
router.beforeEach(async (to) => {
    if (to.fullPath.includes('/login')) { 
        if (to.fullPath.includes('token')) 
        {
            var getQuery = to.fullPath.split('?')[1]
            var params = getQuery.split('&') 
            let token = params[0].split("token=")[1];
            let user = params[1].split("userid=")[1];
            document.cookie = `userid=${user}`; 
            document.cookie = `token=${token}`;
        }
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
            let res = await fetch('https://volt-back-dash.herokuapp.com/graphql', { 
                method: 'POST',
                headers: { 
                'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(graphqlQuery)
            })
            let response = await res.json(); 
            if (response.errors) {
                console.log(response.errors)
            } else { 
                store.state.loginInfo = response; 
            }
        } else { 
            return window.location = '/';
        }
    }
})
export default router; 