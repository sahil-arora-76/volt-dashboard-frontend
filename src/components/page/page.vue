<template>
    <div class="main">
        <h2>Build Best Discord Servers!</h2>
        <span> Fun |  Image Embeds | Meme | Canvas And Much More! </span>
        <div class="buttons">
            <button class="btn1" @click="click('https://discord.com/oauth2/authorize?client_id=710534645405581353&permissions=1581251063&scope=bot')"><i class="fab fa-discord"></i>Add To Discord</button>
            <button class="btn2" @click="click('https://discord.gg/mwAXpMD')">Support Server</button>
        </div>
    </div>
</template>
<script>
export default {
    computed:  {
        f() { 
            return this.$store.state.pressed
        }
    },
    methods: {
        click(s) 
        {
            window.location = s; 
        }
    },
    watch: {
        f(news) { 
            if (news) { 
                return document.querySelector('.main').style.top = 50 + 'vh';
            }
            return document.querySelector('.main').style.top = 30 + 'vh';
        }
    }, 
}
</script>
<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        height: 40vh;
        width: 70%;
        text-align: center;
        position: relative;
        left: 15%;
        padding-top: 0rem;
        top: 30vh;
        color: white;
        font-family: 'Open Sans', Helvetica, arial, sans-serif; 
    }
    div h2 { 
        font-weight: 700;
        font-size: 4rem;
    }
    div span { 
        font-size: 1.4rem;
        font-weight: 400;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .fa-discord { 
        padding-right: 10px;
        font-size: 1.8rem;
    }
    button { 
        flex-direction: row;
        width: 30%;
        height: 9vh;
        font-size: 1.8rem;
        margin-top: 20px;
        border-radius: 10px; 
        font-weight: 600;
        border: none;
        color: white;
    }
    
    .btn1:hover { 
        transform: translateY(-10px) scale(1.05) translateZ(0px);
    }
    .btn2:hover { 
        transform: translateY(-10px) scale(1.05) translateZ(0px);
    }
    div .btn1 { 
        background-color: #6850ff;
        margin-right: 1.5rem;
    }
    div .btn2 { 
        background-color: inherit;
        border: 5px solid #8886FC;
    }
    @media screen and (max-width: 1200px) { 
        button  {
            width: 40%;
        }
    }
    @media screen and (max-width: 900px) { 
        button { 
            width: 55%;
        }
        .btn1 {
            margin-left: 20px;
        }
    }
    @media screen and (max-width: 750px) {
        .main h2 {
            font-size: 3.5rem; 
        }
        .main span {
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width: 666px) { 
        button { 
            width: 65%;
        }
        .main h2 { 
            font-size: 3rem;
        }
        .main span { 
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 550px ) { 
        button { 
            width: 85%;
        }
        .main h2 { 
            font-size: 2.5rem;
        }
        .main span { 
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width: 440px) { 
        button { 
            width: 90%;
            height: 7.5vh;
        }
        .btn2 { 
            margin-left: 13px;
        }
        .main h2 { 
            font-size: 2rem;
        }
        .main span { 
            font-size: 1rem;
        }
    }
    @media  screen and (max-width: 370px) { 
        button { 
            width: 100%;
            font-size: 1.5rem;
        }
        .btn1, .btn2 { 
            margin-left: -18px;
        }
        .btn2 { 
            margin-left: -32px;
        }
        .main h2 { 
            font-size: 2rem;
            margin-right: 30px;
        }
        .main span { 
            margin-right: 30px;
        }
        .main {
            width: 90%;;
        }
        button { 
            margin-top: 10px;
        }
    }
</style>