<template>
<nav> 
    <div class="menu">
        <div class="desktop">  
            <router-link to="/" id="volt"> VOLT </router-link>
            <a href="https://top.gg/bot/710534645405581353">  Vote </a>
            <span>  Commands </span>
            <a href="https://www.youtube.com/watch?v=e6UR-CAYvPE">  Tutorial </a>
            <span>  Sponser </span>
            <a href="https://discord.gg/EYMDZ6E">  Support </a>
            <span @click="loginRedirect"> {{ username }} </span>
        </div>
         <div class="mobile"> 
            <div>
            <i @click="press" :class="state()"></i>
            <router-link id="volt-mob" to="/"> VOLT</router-link>
                <div class="mobile-menu"  v-if="pressed "> 
                    <span @click="click('https://top.gg/bot/710534645405581353') ">  Vote </span>
                    <span>  Commands </span>
                    <span>  Tutorial </span>
                    <span @click="click('https://www.youtube.com/watch?v=e6UR-CAYvPE')">  Sponser </span>
                   <span @click="loginRedirect"> {{ username }} </span>
                   <slot> </slot>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    computed: { 
        pressed() { 
            return this.$store.state.pressed;
        }, 
        username() { 
            if (this.$store.state.loginInfo.data) { 
                return this.$store.state.loginInfo.data.getUser.username;
            } else { 
                return 'Login'
            }
        },
    }, 
    methods: { 
        press() { 
           this.$store.dispatch('press');
        }, 
        click(data) { 
            window.location = data;
        },
        state() { 
            if (this.pressed) {
                return 'fas fa-times'
            }
            return 'fas fa-bars'
        }, 
        loginRedirect() { 

            if (!document.cookie) { 
                return window.location = 'http://localhost:3000/auth2';
            }
            let cookie = document.cookie.split(';');
            let index = cookie.findIndex(x => x.includes('token')); 
            let index2 = cookie.findIndex(x => x.includes('userid')); 
            if (index < 0 || index2 < 0) { 
                return window.location = 'http://localhost:3000/auth2';
            } else { 
                return window.location = 'http://localhost:8080/login';
            }
        }
    },  

}
</script>
<style scoped >
#volt, #volt-mob  { 
    font-size: 2rem;
    font-weight: 500;
    opacity: 0.9;
    font-family: Poppins;
    margin-left: 5%;
}
.desktop, .mobile  { 
    height: 6vh;
    width: 100%;
    background-color: inherit;
    color: white;
    cursor: pointer;
    text-align: left;
    padding-top: 3vh
}
.desktop span , a { 
    margin-left: 4%;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    width: 20%;
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.7;
    text-decoration: none;
    color: inherit;
}
.mobile {
    display: none;
}
@media screen and (max-width: 800px) { 
.mobile { 
    display: flex;
}
.desktop { 
    display: none;
}
.mobile-menu { 
    display: flex;
    flex-direction: column;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    line-height: 2rem;
    width: 103%;
    position: absolute;
    margin-top: 3%;
    background-color: rgba(255,255,255,0.7);
}
.mobile-menu span { 
    background-color: rgba(19, 20, 22, 0.933);
    color: white;
    height: 6vh;
    width: 100%;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    padding-top: 10px;
    padding-left: 10px;
}
.fa-times, .fa-bars { 
    font-size: 1.5rem;
    margin-left: 20px;
    margin-top: 10px;
} 
#volt-mob { 
    position: absolute;
    left: 35%;
    font-family: ;
}
}

</style>