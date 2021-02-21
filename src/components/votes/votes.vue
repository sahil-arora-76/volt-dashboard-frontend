<template>
    <div  v-if="guilds.length === 0" class="main1"> 
        <p>{{ loading }} </p>
    </div>
    <div class="main2" >    
        <p> Wanna Vote Click <a href="https://top.gg/bot/710534645405581353">Here</a></p>
         <ul  v-if="guilds.length > 0 ">
            <li v-for="user in guilds " :key="user.id">
                <div class="content" >
                    <div class="card">
                    <div class="icon"><img class='imgs' :src="'https://cdn.discordapp.com/avatars/'+  user.id + '/' +  user.avatar + '.png'">
                    </div>
                    <p class="title">{{ user.username }} </p>
                    <p > {{ user.votes }} Votes </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: 'Loading...',
            guilds: []
        }
    },
    computed: { 
        f() { 
            return this.$store.state.pressed
        }
    },
    watch: { 
       f(val ) { 
           if (val) { 
               return document.querySelector('.main2').style.top = 50 + 'vh';
           }
           return document.querySelector('.main2').style.top = 0 + 'vh';
       }
   },
    async mounted() { 
        const body = { 
            query: `
                {
                    getVote { id username votes avatar }
                }            
            `
        }
        const res = await fetch('https://volt-back.herokuapp.com/graphql', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const response = await res.json(); 
        if (res.ok) { 
            this.guilds = response.data.getVote;
            for (const el of  this.guilds) {
                this.check(el.id).then(c => {
                    el.avatar = c;
                });
            }
            console.log(this.guilds)
            this.loading ='ok'; 
        } else { 
            return this.loading = 'Error Ocuured Try Again Later';
        }
    }, 
    methods: { 
        async check(id) { 
            let body =  {
                query: 
                `
                {
                    getAvatar(user: "${id}")
                }
                
                `
            }
            let c = await fetch('https://volt-back.herokuapp.com/graphql', {
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(body)
            })
            let k = await c.json();
            return  k.data.getAvatar;
        }
    }
    
}
</script>
<style scoped> 
.main2 { 
    width: 100%;
    height: 80vh;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 30px;
}
ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
p { 
    color: white;
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
    background: linear-gradient(90deg, #2c2f33; 0%, #2c2f33; 40%, rgba(0, 0, 0, 0.28) 60%);
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