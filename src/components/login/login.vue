<template>
<base-nav> </base-nav>
            <div v-if="guilds.length <= 0" class="noguilds" > 
            <p> You Should Have MANAGE_SERVERS Perms  With Volt In It </p>
            <span> Found Guild: 0 </span>
        </div>
    <div class="main">
        <ul  v-if="guilds.length > 0 ">
            <li v-for="guild in guilds " :key="guild.id" @click="redirect(guild.id)">
                <div class="content" >
                    <div class="card">
                    <div class="icon"><img class='imgs' :src="guild.icon ? 'https://cdn.discordapp.com/icons/' + guild.id + '/' + guild.icon + '.webp': ' '">
                    </div>
                    <p class="title">{{ guild.name }} </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
import baseNav from '../page/nav'; 
export default {
    components: {
        baseNav
    }, 
    computed: { 
        f() { 
            return this.$store.state.pressed
        }
    },
    methods: { 
        redirect(id) { 
            return window.location = '/send/' + id;  
        }
    },
    data() {
        return  {    
            guilds: this.$store.state.loginInfo.data.getUser.guilds
        }
   }, 
   watch: { 
       f(val ) { 
           if (val) { 
               return document.querySelector('.main').style.top = 50 + 'vh';
           }
           return document.querySelector('.main').style.top = 0 + 'vh';
       }
   }
}
</script>
<style scoped>
.main { 
    position: relative
}
ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.content {
    width: 40%;
    padding: 0 4%;
    padding-top: 50px;
    justify-content: left;
    align-items: left;
    display: flex;
}
.noguilds { 
    display: block; 
    color: white;
    position: relative;
    text-align: center; 
    top: 20vh;
    font-size: 2.5rem;
}
@media screen and (max-width: 1400px) {
  .ul {
        width: 100%;
        flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .content {
        padding-top: 70px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  }
  ul {
        flex-direction: column;
  }
}

.card {
    width: 50vw;
    max-width: 200px;
    min-width: 200px;
    height: 210px;
    background-color: #292929;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    border: 2px solid rgba(7, 7, 7, 0.12);
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
}

.imgs {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width: 80px;
    background: linear-gradient(90deg, #FF7E7E 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
}

.material-icons.md-36 {
    font-size: 36px;
}

.card .title {
    width: 80%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
}

.title {
    font-family: Inter, sans-serif;
}

.card .text {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
}

.card:hover {
    height: 270px;
}

.card:hover .info {
    height: 90%;
}

.card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height: 40px;
}

.card:hover .icon {
    background-position: -120px;
    transition: all 0.3s ease;
}

.card:hover .icon i {
    background: linear-gradient(90deg, #FF7E7E, #FF4848);
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transition: all 0.3s ease;
}

.fa-caret-down {
    position: relative;
    left: 10px;
}
</style>