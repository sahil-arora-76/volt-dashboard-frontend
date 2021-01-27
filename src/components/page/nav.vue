<template>
<nav> 
    <div class="menu">
        <div class="desktop">  
            <router-link to="/" id="volt"> VOLT </router-link>
            <span>  Vote </span>
            <span>  Commands </span>
            <span>  Tutorial </span>
            <span>  Sponser </span>
            <span>  Support </span>
            <span @click="loginRedirect"> Login </span>
        </div>
         <div class="mobile"> 
            <div>
            <i @click="press" :class="state()"></i>
            <span id="volt-mob"> VOLT</span>
                <div class="mobile-menu"  v-if="pressed "> 
                    <span>  Vote </span>
                    <span>  Commands </span>
                    <span>  Tutorial </span>
                    <span>  Sponser </span>
                    <span> Login</span>
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
        }
    }, 
    methods: { 
        press() { 
           this.$store.dispatch('press');
        }, 
        state() { 
            if (this.pressed) {
                return 'fas fa-times'
            }
            return 'fas fa-bars'
        }, 
        loginRedirect() { 
            window.location = 'http://localhost:3000/auth2';
        }
    }
}
</script>
<style scoped>
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