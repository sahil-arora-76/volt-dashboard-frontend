<template>
<div class="main">
    <div class="embeds"> 
        <div class="content"> 
            <h2> 
                Image Embeds
            </h2>
            <span> Embeds Makes Your Server Look Good. Volt Dashboard Gives You Full Control To Create And Send Embeds And Image Embeds! </span>
        </div>
        <div class="image">  
            <img src="../../../assets/em.png">
        </div>
    </div>
    <div class="memes"> 
        <div class="image">  
            <img src="../../../assets/embed.gif">
        </div>
        <div class="content"> 
            <h2> 
                Image Manipulation
            </h2>
            <span> 
                Looking For Some Fun Commands?
                Volt Has Over 100+ Image Manipulation And Meme Commands! 

            </span>
        </div>
    </div>
</div>
</template>
<script>
    export default { 
    }
</script>
<style scoped>
.main { 
    position: relative;
    top: 70vh;
    font-family: sans-serif; 
    line-height: 5vh;
}
.embeds, .memes { 
    display: flex;
    flex-direction: row;
    margin-left: 10%;
}
.embeds { 

}
.memes { 
    margin-left: 0%;
}
.embeds .image, .memes .image { 
    margin-left: 10%;
    margin-right: 14%;
    transform: translateY(5vh); 
    position: relative;
    box-shadow: 4px 5px 10px 2px rgba(38,36,41,.6);
}
img { 
    border-radius: 8px;
}
.embeds h2, .memes h2 { 
    font-size: 2.2rem;
    color: #fff;
    padding-top: 20vh;
}
.memes .content { 
    margin-right: 14%;
}
.memes { 
    padding-top: 10%;
}
.embeds span, .memes span { 
    font-size: 1.2rem;
    font-family: sans-serif;
    color: #969899;
    line-height: 3vh;
}
@media  screen and (max-width: 1070px){ 
    .main { 
        display: none;
    }
}
@keyframes move {
    0% {
        transform: translateY(5vh) 
    }
    25% { 
        transform: translateY(3vh) 
    }
    50% {
        transform: translateY(3vh)
    } 
    75% { 
        transform: translateY(5vh);
    }
}
</style> 