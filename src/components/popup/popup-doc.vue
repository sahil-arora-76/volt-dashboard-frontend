<template>
<div class="main" v-if="$store.state.docPopup" > 
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span @click="close" class="close">&times;</span>
            <h4> How To Use? </h4>
            <p>The endpoints requires a query parameter to be passed and  a api key in header of type bearer for authorization . You can get your api 
                key by clicking api in the navigation bar. <br> 
                base url is <strong> https://voltapi.notadevps.repl.co </strong>
                <br> 
                Example: <br>
                <strong> Text Endpoint  </strong><br>
                https://voltapi.notadevps.repl.co/chalk?text=sometexthere<br>
                
                <strong>  Endpoint </strong> <br>
                https://voltapi.notadevps.repl.co/heart?image=someimagelink<br>
                For More Info Click <a href="#"> HERE </a>
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        close() {
            return this.$store.state.docPopup = false;
        }
    }
}
</script>
<style scoped>
h4 {
    text-align: center;
}
.modal {
    display: block; 
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>