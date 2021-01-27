<template>
   <base-nav>  </base-nav>
    <base-page> </base-page>
    <base-info> </base-info>
    <base-page-down> </base-page-down>
    <base-footer> </base-footer>
</template>
<script>
import baseNav from "./nav.vue";
import basePage from './page.vue';
import baseInfo from './info.vue';
import basePageDown from './page-down.vue'; 
import baseFooter from './footer.vue'; 
export default {
    components: {
        baseNav, 
        basePage, 
        baseInfo, 
        basePageDown, 
        baseFooter, 
    },
    data() { 
        return  { 
            inputs: ''
        }
    }, 
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
* { 
    padding: 0;
    margin: 0;
}
body { 
    background-color: #2c2f33; 
}
</style>