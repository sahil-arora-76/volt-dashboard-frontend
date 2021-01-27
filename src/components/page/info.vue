<template>

    <div class="main"> 
        <div class="servers">
            <h2>Servers</h2>
            <span> {{ servers }} </span>
        </div>
        <div class="status"> 
            <h2> Status </h2>
            <span> <i class="fas fa-circle" :style="state()"></i> Online</span>
        </div>

    </div>
</template>
<script>
export default {
    data() { 
        return { 
            servers: 0, 
            speed: 200,
            target: 1700,
            status: 'online'
        }
    }, 
    created() { 
        window.addEventListener('scroll', () =>  {
            if (document.body.getClientRects()[0].y <  -300) { 
                this.updateServers();
            }
        })
    },
    methods: {  
        updateServers() {
            if (this.servers < this.target) {
                this.servers++;
                setTimeout(this.updateServers, 1);
            } else {  
                this.servers = this.target;
            }
        },
        state() { 
            if (this.status == 'online') {
                return { color: '#4ee44e' };
            }
            return { color: 'red' };
        }
    }
}
</script>
<style scoped>
.main { 
    width: 80%;
    height: 27vh;
    position: relative;
    top: 52vh;
    color: white;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 400;
    left: 10%;
}
.servers, .status {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    float: left;
    padding-left: 22%;
    padding-top: 5%;
    font-size: 1.5rem;
} 
.servers span, .status span, .badge { 
    font-size: 1.2rem;
    text-align: center;
    padding-top: 10px;
}
.servers h2, .status h2 { 
    font-weight: bold;
}
.status  { 
    float: right;
    padding-left: 0%;
    padding-top: 4.5%;
    padding-right: 20%;
}
@media screen and (max-width: 500px) { 
    .main { 
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 35vh;
    }
    .servers, .status { 
        padding-left: 0%;
        padding-right: 10%;
        padding-top: 9%;
    }
}
@media screen and (max-width: 400px) {
    .servers, .status { 
        padding-left: 7%;
        padding-right: 0%;
        padding-top: 9%;
    }
    .main {
        height: 40vh;
    }
}
</style>