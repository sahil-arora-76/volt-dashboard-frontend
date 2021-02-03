<template>
    <div id="myModal" class="modal" v-if="toShow">
    <div class="modal-content">
    <div class="modal-header">
        <i class="fas fa-times" @click="close"></i>
    </div>
    <div class="modal-body">
        <slot id="loading" >  </slot>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return  { 
            show: false,
        }
    },
    computed: { 
        toShow() { 
            return this.$store.state.popup; 
        }
    }, 
    watch: { 
        toShow(val) { 
            this.$store.state.popup = val;
        }
    },
    methods: { 
        close() { 
            this.$store.state.popup = false;
        }
    }
}
</script>
<style  scoped>
  .modal {
        display: flex;
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        -webkit-animation-name: fadeIn; /* Fade in the background */
        -webkit-animation-duration: 0.4s;
        animation-name: fadeIn;
        animation-duration: 0.4s
    }
    .modal-header { 
        border-radius: 0;
    }
    .modal-content {
        position: absolute;
        bottom: 0;
        background-color: #fefefe;
        width: 100%;
        -webkit-animation-name: slideIn;
        -webkit-animation-duration: 0.4s;
        animation-name: slideIn;
        animation-duration: 0.4s
    }
    .fa-times { 
        float: right;
        text-align: right;
        font-size: 1.5rem;
        justify-content: right;
        position: relative;
        left: 98%;
    }   
    @media screen and (max-width: 880px) { 
        .fa-times { 
            float: right;
            text-align: right;
            font-size: 1.5rem;
            justify-content: right;
            position: relative;
            left: 98%;
        }
        .modal-header { 
            height: 4vh;
            border-radius: 0;
        }
    }
    .fa-times { 
        float: right;
        text-align: right;
        font-size: 1.2rem;
        justify-content: right;
        position: relative;
        left: 98%;
    }    
    .fa-times:hover,
    .fa-times:focus {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    .modal-header {
        padding: 2px 16px;
        background-color: #2c2f33;
        color: white;
    }

    .modal-body {
    padding: 10px; 
    color: black;
    }
    
    .modal-footer {
        padding: 2px 16px;
        background-color: #5cb85c;
        color: white;
    }
    @-webkit-keyframes slideIn {
        from {bottom: -300px; opacity: 0} 
        to {bottom: 0; opacity: 1}
    }

    @keyframes slideIn {
        from {bottom: -300px; opacity: 0}
        to {bottom: 0; opacity: 1}
    }

    @-webkit-keyframes fadeIn {
        from {opacity: 0} 
        to {opacity: 1}
    }
    
    @keyframes fadeIn {
        from {opacity: 0} 
        to {opacity: 1}
    }
</style>