<template>
    <title> Embed </title>  
    <base-nav>
    <span id="img" @click="changemode('embed')" v-if="mode === 'imageembed'"> Embed </span>
    <span @click="changemode('imageembed')" v-if="mode === 'embed'"> Image Embed </span>
    <span id="login" @click="logout"> Logout </span>
    </base-nav>
        <div class="main">
            <div class="nav" > 
                    <span id="img" @click="changemode('embed')" v-if="mode === 'imageembed'"> Embed </span>
                    <span @click="changemode('imageembed')" v-if="mode === 'embed'"> Image Embed </span>
                    <span  id="login" @click="logout"> Logout </span>
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
                    <input type="text" name="title" v-model="title" placeholder="TITLE">  
                    <button type="sumbit" @click.prevent="sendEmbed" > Sumbit </button> 
                </form>
                <form class="imageembeds" v-if="mode === 'imageembed' ">
                    <input type="text" name="guildId" :value="Id" readonly>
                    <textarea placeholder="CONTENT" id="image-embed-content"> 
                    </textarea> 
                    <input type="text" name="channelId" v-model="channel" placeholder="CHANNEL">  
                    <p v-if="channel.length > 2 && channel.length < 9" > Invalid Channel Id </p>
                    <input type="text" name="title" v-model="title" placeholder="TITLE">  
                    <input type="text" name="color" v-model="color" placeholder="COLOR">
                     <p v-if="color.length > 1 && !color.includes('#') "> Invalid Color Should Be A Hex Code </p>
                    <input type="text" name="author" v-model="author" placeholder="AUTHOR" >
                    <p v-if="author.length > 2 &&  author.length > 10 ">Invalid Text. Minimum Length Should Be 10 Chars  </p>
                    <input type="text" name="footer" v-model="footer" placeholder="FOOTER"> 
                    <p v-if="footer.length > 2 &&  footer.length > 10 ">Invalid Text. Minimum Length Should Be 10 Chars  </p>
                    <input type="text" name="image" v-model="image" placeholder="IMAGE"> 
                    <p v-if="image.length > 2 &&  !image.includes('http')"> Invalid Image Link. </p>
                    <input type="text" name="footerImage" v-model="footerimage" placeholder="FOOTERIMAGE"> 
                    <p v-if="footerimage.length > 2 &&  !footerimage.includes('http') ">Invalid Image Link. </p>
                    <input type="text" name="thumbnail" v-model="thumb" placeholder="THUMBNAIL"> 
                    <p v-if="thumb.length > 2 &&  !thumb.includes('http')"> Invalid Image Link. </p>
                    <input type="text" name="authorlink" v-model="authorImage" placeholder="AUTHOR IMAGE"> 
                    <p v-if="authorImage.length > 2 &&  !authorImage.includes('http')"> Invalid Image Link. </p>
                    <button type="sumbit" @click.prevent="sendImageEmbed" > Sumbit </button> 
                </form> 
            </div>
        </div>
        <base-popup> {{ loading }} </base-popup>
</template>
<script>
import baseNav  from '../page/nav';
import basePopup  from '../popup/popup'; 
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
        baseNav, 
        basePopup
    },
    props: ['Id'], 
    data() { 
        return  { 
            val: this.Id, 
            mode: 'embed', 
            sending: false,
            channel: '', 
            color: '', 
            author: '', 
            footer: '', 
            thumb: '', 
            image: '', 
            footerimage: '', 
            loading: 'Sending...', 
            authorImage: '', 
            title: ''
        }
    }, 
    methods: { 
        changemode(mode) { 
            this.mode = mode;
            if (this.$store.state.pressed) {
                this.$store.dispatch('press');
            }
        }, 
        async logout() { 
            var allCookies = document.cookie.split(';');  
            for (var i = 0; i < allCookies.length; i++)
            {
                document.cookie = allCookies[i] + "=;expires=" 
                + new Date(0).toUTCString(); 
            }
        },
        async sendEmbed() { 
            let userId = document.cookie; 
            this.$store.state.popup = true;
            this.sending = true;
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
                    sendEmbed(userData: { guildId: "${this.Id}", channelId: "${this.channel}", color: "${this.color}", description: "${content}", title: "${this.title}", userId: "${loginUserId}"} )
                }
                
                `
            } 
            let res =  await fetch('https://volt-back.herokuapp.com/graphql', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
            })
            let response = await res.json(); 
            this.sending  = false;
            if (response.data.sendEmbed[0] === 'Ok') { 
                this.loading = 'Done!'; 
                setTimeout(() => {
                    this.$store.state.popup = false;
                    this.loading = 'Sending...';
                }, 2000)
            } else { 
                this.loading = response.data.sendEmbed[0];
                setTimeout(() => {
                    this.$store.state.popup = false;
                    this.loading = 'Sending...';
                }, 2000)
            }
        },
        async sendImageEmbed() { 
    
            let userId = document.cookie; 
            this.$store.state.popup = true;
            this.sending = true;
            if (!userId) {
                return console.log('No Cookies Found!')
            }
            let cookies = document.cookie.split(';');
            let user = cookies.findIndex(x => x.includes('userid')); 
            if(user.length < 0 ) { 
                return console.log('Length Smaller Than 0')
            } 
            let loginUserId = cookies[user].split('=')[1];
            const content = document.querySelector('#image-embed-content').value;  
            let body = { 
                query: `
                {
                    imageEmbed(imageData: { 
                        guildId: "${this.Id}", 
                        channelId: "${this.channel}", 
                        description: "${content}", 
                        userId: "${loginUserId}", 
                        image: "${this.image}", 
                        thumbnail: "${this.thumb}", 
                        footerImage: "${this.footerimage}", 
                        footer: "${this.footer}" , 
                        color: "${this.color}", 
                        author: "${this.author}", 
                        authorImage: "${this.authorImage}", 
                        title: "${this.title}"
                    }) 
                }
                `
            }
            let res = await fetch('https://volt-back.herokuapp.com/graphql', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(body)
            }); 
            let response = await res.json(); 
            console.log(response.data.imageEmbed[0])
            if (response.data.imageEmbed[0] === 'Ok') { 
                this.loading = 'Done!'; 
                setTimeout(() => {
                    this.$store.state.popup = false;
                    this.loading = 'Sending...';
                }, 2000)
            } else { 
                this.loading = response.data.imageEmbed[0];
                setTimeout(() => {
                    this.$store.state.popup = false;
                    this.loading = 'Sending...';
                }, 1000)
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
</style>