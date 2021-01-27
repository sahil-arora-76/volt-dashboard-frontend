<template>
    <div class="main">
        <p v-if="!Id">  Loading...  </p>
        <p v-else> THOR </p>
    </div>
</template>
<script>
export default {
    props: ['Id'], 
    data() { 
        return  { 
            val: this.Id 
        }
    }, 
    mounted() { 
        console.log(this.val);
    }, 
}
</script>
<style scoped>
    .main { 
        width: 70%; 
        height: 50vh;
        color: #fff; 
        position: relative; 
        top: 40vh;
        left: 12%;
        text-align: center;
        font-size: 2rem;
        font-family: sans-serif;
    }
</style>