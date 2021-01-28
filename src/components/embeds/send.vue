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
                    <input type="text" name="guildId" :value="Id" readonly/> 
                    <textarea placeholder="CONTENT" id="embed-content"> 
                    </textarea>
                    <input type="text" name="channelId" v-model="channel" placeholder="CHANNEL ID ">   
                    <p v-if="channel.length > 2 && channel.length < 9" > Invalid Channel Id </p>
                    <input type="text" name="color" v-model="color" placeholder="COLOR">
                    <p v-if="color.length > 1 && !color.includes('#') "> Invalid Color Should Be A Hex Code </p>
                    <button type="sumbit" @click.prevent="sendEmbed" > Sumbit </button> 
                </form>
                <form class="imageembeds" v-if="mode === 'imageembed' ">
                    <input type="text" name="guildId" :value="Id" readonly>
                    <textarea placeholder="CONTENT"> 
                    </textarea> 
                    <input type="text" name="channelId" v-model="channel" placeholder="CHANNEL">  
                    <p v-if="channel.length > 2 && channel.length < 9" > Invalid Channel Id </p>
                    <input type="text" name="color" v-model="color" placeholder="COLOR">
                     <p v-if="color.length > 1 && !color.includes('#') "> Invalid Color Should Be A Hex Code </p>
                    <input type="text" name="author" v-model="author" placeholder="AUTHOR" >
                    <p v-if="author.length > 2 &&  author.length > 10 ">Invalid Text. Minimum Length Should Be 10 Chars  </p>
                    <input type="text" name="footer" v-model="footer" placeholder="FOOTER"> 
                    <p v-if="footer.length > 2 &&  footer.length > 10 ">Invalid Text. Minimum Length Should Be 10 Chars  </p>
                    <input type="text" name="footerImage" v-model="footerimage" placeholder="FOOTERIMAGE"> 
                    <p v-if="footerimage.length > 2 &&  !footerimage.includes('http') ">Invalid Image Link. </p>
                    <input type="text" name="thumbnail" v-model="thumb" placeholder="THUMBNAIL"> 
                    <p v-if="thumb.length > 2 &&  !thumb.includes('http')"> Invalid Image Link. </p>
                    <button type="sumbit" > Sumbit </button> 
                </form> 
            </div>
        </div>
            <div id="myModal" class="modal" v-if="show">
            <div class="modal-content">
            <div class="modal-header">
                <i class="fas fa-times" @click="close"></i>
            </div>
            <div class="modal-body">
                <p id="loading"> {{ loading }} </p>
            </div>
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
            show: false, 
            channel: '', 
            color: '', 
            author: '', 
            footer: '', 
            thumb: '', 
            image: '', 
            footerimage: '', 
            loading: 'Sending...'
        }
    }, 
    methods: { 
        changemode(mode) { 
            this.mode = mode;
            if (this.$store.state.pressed) {
                this.$store.dispatch('press');
            }
        }, 
        close() {
            this.show = false;
                this.loading = 'Sending...';
        },
        async sendEmbed() { 
            let userId = document.cookie; 
            this.show = true;
            if (!userId) {
                return console.log('No Cookies Found!')
            }
            let cookies = document.cookie.split(';');
            let user = cookies.findIndex(x => x.includes('userid')); 
            if(user.length < 0 ) { 
                return console.log('Length Smaller Than 0')
            } 
            let loginUserId = cookies[user].split('=')[1];
            const content = document.querySelector('#embed-content').value;  
            let body = { 
                query: 
                `
                {
                    sendEmbed(userData: { guildId: "${this.Id}", channelId: "${this.channel}", color: "${this.color}", description: "${content}", userId: "${loginUserId}"} )
                }
                
                `
            } 
            let res =  await fetch('http://localhost:3000/graphql', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
            })
            let response = await res.json(); 
            if (response.data.sendEmbed[0] === 'Ok') { 
                this.loading = 'Done!'; 
                setTimeout(() => {
                    this.show = false;
                    this.loading = 'Sending...';
                }, 2000)
            } else { 
                this.loading = response.data.sendEmbed[0]
            }
        }
    },
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
    p { 
        color: red;
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
    .modal {
        display: flex;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        -webkit-animation-name: fadeIn; /* Fade in the background */
        -webkit-animation-duration: 0.4s;
        animation-name: fadeIn;
        animation-duration: 0.4s
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
        }
    }
    .fa-times { 
        float: right;
        text-align: right;
        font-size: 1.5rem;
        justify-content: right;
        position: relative;
        left: 98%;
    }    
    .fa-times:hover,
    .fa-times:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    #loading { 
        color: black;
    }
    .modal-header {
        padding: 2px 16px;
        background-color: #2c2f33;
        color: white;
    }

    .modal-body {padding: 2px 16px;}
    
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