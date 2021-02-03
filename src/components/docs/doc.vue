<template>
    <div class="main">
        <div class="image"> 
            <p> Endpoints</p>
        </div>
        <div class="flip-card"  id="image" v-for="api in apis" :key="api.api">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img :src="api.image" alt="Avatar" style="width:300px;height:300px;">
                </div>
            <div class="flip-card-back">
            <h5> {{ api.api }}</h5>
            </div>
        </div>
    </div>
        <div class="flip-card"  id="text-a" v-for="api in textapis" :key="api.api">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img :src="api.image" alt="Avatar" style="width:300px;height:300px;">
                </div>
            <div class="flip-card-back">
            <h5> {{ api.api }}</h5>
            </div>
        </div>
    </div>
    </div>
    <div class="use"> 
        <button> How To Use? </button>
    </div>
</template>
<script>
import apis from '../../api';
export default {
    data() {
        return{ 
            link: 'https://someLink/api', 
            apis: apis.image, 
            textapis: apis.text
        }
    },
}
</script>
<style scoped>

.baseUrl { 
    color: white;
    text-align: center;
    margin-top: 5%;
}
.baseUrl span {
    font-size: 1.5rem;
    text-decoration: underline;
}
#image, #text-a { 
    padding-top: 5vh;
}
.image { 
    width: 80%;
    height: 8vh;
    color: white;
    position: absolute;
    font-size: 2rem;
    top: -5vh;
    font-family: sans-serif;
    text-align: center;
    padding-right: 20px;
}
#text  {
    position: relative;
    top: 20vh;
}
.text { 
    width: 20%;
    height: 8vh;
    color: white;
    font-family: sans-serif;
    font-size: 2rem;
    position: relative;
    top: 40vh;
    text-align: center;
    right: 37%;
}
.main { 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 8vw;
    position: relative;
    top: 15vh;
}
img { 
    max-height: 100%;
    max-width: 100%;
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
}
.flip-card {
    background-color: transparent;
    width: 250px;
    height: 200px;
    margin-top: 20px;
    margin-left: 20px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
h5 { 
    padding-top: 7vh;
}
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    color: white;
    background-color: #bbb;
}

.flip-card-back {
    background-color: inherit;
    color: white;
    transform: rotateY(180deg);
}
.use { 
    position: relative;
    top: 25vh;
    text-align: center;
    height: 20vh;
    padding-top: 50px;
}
button { 
    width: 20%;
    font-family: sans-serif;
    border-radius: 5px;
    height: 5vh;
    border: none;
}
button:hover { 
    cursor: pointer;
}

</style>