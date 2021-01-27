<template>
    <title> Embed </title>  
    <base-nav>
    <span id="img" @click="changemode('embed')" v-if="mode === 'imageembed'"> Embed </span>
    <span @click="changemode('imageembed')" v-if="mode === 'embed'"> Image Embed </span>
    </base-nav>
        <div class="main">
            <div class="nav" > 
                    <span id="img" @click="changemode('embed')" v-if="mode === 'imageembed'"> Embed </span>
                    <span @click="changemode('imageembed')" v-if="mode === 'embed'"> Image Embed </span>
            </div>
            <div class="forms"> 
                <form class="embed" v-if="mode === 'embed' "> 
                    <input type="text" name="guildId" :value="Id" > 

                    <textarea > 
                    </textarea>
                    <input type="text" name="channelId" >   
                    <input type="text" name="color" >   
                    <button type="sumbit"> Sumbit </button> 
                </form>
                <form class="imageembeds" v-if="mode === 'imageembed' ">
                    <input type="text" name="guildId" :value="Id" >
                    <textarea > 
                    </textarea> 
                    <input type="text" name="channelId" >  
                    <input type="text" name="color" >
                    <input type="text" name="author" >
                    <input type="text" name="footer" > 
                    <input type="text" name="footerImage" > 
                    <input type="text" name="thumbnail" > 
                    <button type="sumbit"> Sumbit </button> 
                </form> 
            </div>
        </div>
</template>
<script>
import baseNav  from '../page/nav';
export default {
    computed:  {
        f() { 
            return this.$store.state.pressed
        }
    },
    watch: {
        f(news) { 
            if (news) { 
                return document.querySelector('.main').style.top = 50 + 'vh';
            }
            return document.querySelector('.main').style.top = 10 + 'vh';
        }
    }, 
    components: {
        baseNav
    },
    props: ['Id'], 
    data() { 
        return  { 
            val: this.Id, 
            mode: 'embed', 
        }
    }, 
    methods: { 
        changemode(mode) { 
            this.mode = mode;
            if (this.$store.state.pressed) {
                this.$store.dispatch('press');
            }
        }
    }
}
</script>
<style scoped>
    .main { 
        position: relative;
        text-align: center;
        top: 10vh;
        width: 90%;
        left: 4%;
        height: 80vh;
    }
    .nav {
        display: flex;
        flex-direction: column;
        font-size: 1.7rem;
        position: relative; 
        float: left;
        top: 20vh;
        width: 20%;
        left: 10%;
    }
    #img { 
        padding-right: 5px;
    }
    .nav span { 
        padding-top: 10px;
        color: #fff;
        text-align: center;
        padding-bottom: 10px;
    }
    .nav span:hover { 
        background-color: #333539;
        cursor: pointer;
    }
    form { 
        display: flex; 
        flex-direction: column;
        padding-left: 26%;
        width: 70%;
        padding-top: 4%;
    }
    input[type=text] { 
        border-top: 0;
        color: white;
        background-color: inherit;
        padding: 5px;
        border-left: none;
        border-right: none;
        margin-top: 20px;
    }
    input[type=text]:focus { 
        border-left: none;
        outline: none;
        border-right: none;
        border-bottom: 1px solid #565659;
    }
    input[type=text]:blur { 
        border-left: 0;
        border-right: 0;
    }
    textarea { 
        background-color: #1b1b1d72;
        outline: 0;
        resize: none;
        color: white;
        margin-top: 30px;
        height: 20vh;
        padding: 10px;
    } 
    button { 
        width: 20%;
        position: relative;
        margin-top: 14px;
        color: #fff; 
        background-color: #6850ff;
        border-radius: 5px;
        font-family: sans-serif;
        border: 0; 
        height: 5vh;
        left: 35%;
    }
    .embed { 
        position: relative;
        text-align: center;
    }
    @media screen and (max-width: 900px) { 
        .nav { 
            display: none;
        }
        span { 
            background-color: rgba(19, 20, 22, 0.933);
            color: white;
            height: 6vh;
            width: 100%;
            font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
            padding-top: 10px;
            padding-left: 10px;
        }
        button { 
            width: 40%;
            left: 28%;
        }
    }
    @media screen and (max-width: 480px) { 
        input[type=text] { 
            width: 170%;
            right: 20%;
            position: relative;
        }
        textarea { 
            width: 170%;
            right: 20%;
            position: relative;
        }
        button { 
            width: 60%;
        }
    }
</style>