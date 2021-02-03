<template>
    <base-nav> </base-nav>
    <div class="main">
        <p class="log" v-if="loggedIn === false">You Are Not Logged In!</p>
        <div v-if="loggedIn === true" class="buttons">
            <button @click="generateKey"> Generate Key </button>
            <button @click="getKey"> My Keys </button>
        </div>
        <base-popup> {{ api }} </base-popup>
    </div>
</template>
<style scoped>
    .main { 
        color: white; 
        text-align: center;
        position: relative;
        top: 30vh;
    }
    .log { 
        font-size: 2.5rem;
    }
    .buttons { 
        display: flex ;
        width: 40%;
        height: 30vh;
        flex-direction: column;
        position: relative;
        left: 30%;
    }
    button { 
        width: 70%;
        height: 6vh;
        border-radius: 10px;
        margin-left: 60px;
        margin-top: 20px;
    }
    @media screen and (max-width: 500px) { 
        .buttons { 
            width: 60%;
            left: 20%;
        }
    }
    @media screen and (max-width: 400px) { 
        .buttons { 
            width: 80%;
            left: 8%;
        }
        button { 
            height: 7vh;
        }
    }
</style>
<script>
import baseNav from "../page/nav";
import basePopup from '../popup/popup';
export default {
    components: {
        baseNav,
        basePopup
    },
    data() {
        return {
            loggedIn: false,
            output: '',
            userId: '', 
            api: 'loading...'
        };
    },
    mounted() {
        let c = document.cookie;
        if (!c) {
            return this.loggedIn = false;
        }
        let k = c.split(";");
        let tokenIndex = k.findIndex((el) => el.includes("token"));
        let userIndex = k.findIndex((el) => el.includes("userid"));

        if (tokenIndex < 0) { 
            return this.loggedIn = false;
        }
        if (userIndex < 0) { 
            return this.loggedIn = false;
        }
        this.userId = k[userIndex].split('=')[1];
        return this.loggedIn = true;
    },
    methods: {
        async generateKey() { 
            this.$store.state.popup = true;
            const body = { 
                query: `
                {
                    createAuthKey(id: "${this.userId}") 
                }
                `
            }
            let res = await fetch('http://localhost:3000/graphql', 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(body)
            }) 
            let response = await res.json(); 
            if (res.ok) {
                this.api = response.data.createAuthKey;
            } else {
                this.api = response;
            }
        }, 
        async getKey() { 
            this.$store.state.popup = true;
            const body = { 
                query: `
                {
                    getAuthKey(id: "${this.userId}") 
                }
                `
            }
            let res = await fetch('http://localhost:3000/graphql', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(body)
            }); 
            let response = await res.json(); 
            if (res.ok) { 
                this.api = response.data.getAuthKey;
            } else {
                this.api = response;
            }
        }
    },
};
</script>