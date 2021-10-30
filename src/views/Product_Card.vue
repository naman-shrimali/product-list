<template>
  <div class="v-dialog__ title content v-dialog__ title content--active mainDiv" >
    <v-layout class="v-dialog v-dialog--active v-dialog--fullscreen ">
      <nav>
    <Navbar class="navbar"></Navbar>
      </nav >
      <v-flex sm8 offset-sm2 md6 offset-md3 md4 offset-md4 mt-6 >
        <br>
        <v-card color="primary" class="card text">
          <v-img
            contain
            class="white--text img-size"
            height="40vh"
            :src= "product_Detail.product_Image_URL"
            style="background-color:white"
          >
            <v-container fill-height fluid color="primary">
              <v-layout fill-height>
                <v-flex sm12 align-end flexbox >
                  <div class="off" style="background-color:#b1eff0; position:fixed">
                    <h3 class="discount">{{ product_Detail.product_Discount +"%"}}</h3>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title class="mt-2 ml-4 mr-4 card-details" >
            <div >
              <span class=" title content">
                <v-row >
                  <v-row class="ml-2 mr-2">
                    <p class="section-1" color="text">{{product_Detail.product_Name.substring(0,15)}}</p>
                  </v-row>
                  <v-spacer></v-spacer>
                  <v-row>
                    <span class=" title " style="color:#008037;"><p class="section-1" > ₹{{product_Detail.product_Discounted_Price}}</p></span>
                    <p style="color:grey;" class="section-1"> / </p> <del style="color:grey;" class="section-1">₹{{product_Detail.product_MRP}}</del>
                  </v-row>
                </v-row>
              </span>
              <v-divider class="mt-2"></v-divider>
              <span class=" title content">
                <v-row class="mt-1 ml-2 mr-2 mb-1" justify="center" align="center" >
                  <v-col style="padding:0;" cols="6">
                    <span>
                    <v-row >
                      <v-col style="padding:0;">
                        <v-rating readonly mdall dense size="18" class="mr-1" v-model.number = 'product_Detail.product_Rating' color="#38b6ff" background-color="#008037" half-increments></v-rating>
                      </v-col>
                      <v-col style="padding:0;" class="mt-1"><p class="review-number" align="center">({{product_Detail.product_Reviews_Number}})</p></v-col>
                    </v-row>
                    <v-row v-if = "product_Detail.product_Promocode" class="copy-text  mb-2" align="center" >
                      <v-btn depressed  class="pl-0 pr-0 mt-1" @click="promocode" ><h5>{{message_promo}}</h5></v-btn>
                    </v-row>
                    </span>
                  </v-col>
                  <v-spacer cols="3"></v-spacer>
                  <v-col style="padding:0;" align-self="end" align="center" width="100%" cols="3">
                    <a :href="product_Detail.product_Seller" target="_blank" rel="noopener noreferrer">
                      <v-img :src="product_Detail.product_Image_URL_2" width="80px" height="40px" ></v-img>
                    </a>
                  </v-col>
                </v-row>
              </span>
              <v-divider></v-divider>
                <v-snackbar
                  v-model="successAlert"
                  :timeout="3000"
                  absolute
                  centered
                  shaped
                >
                  Copied
                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="blue"
                      text
                      v-bind="attrs"
                      @click="successAlert = false"
                    >
                      <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                  </template>
                </v-snackbar>
                <v-snackbar
                  v-model="failedAlert"
                  :timeout="3000"
                >
                  Unable to copy
                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="blue"
                      text
                      v-bind="attrs"
                      @click="failedAlert = false"
                    >
                     <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                  </template>
                </v-snackbar>
              <span><p id="desc">{{product_Detail.product_Description.substring(0,100)+'...'}}<v-icon class="mr-1" color="background" @click="overlay = !overlay">mdi-page-next-outline</v-icon></p>
                  <v-overlay
                      :absolute="absolute"
                      :value="overlay"
                      :opacity="opacity"
                      align="center"
                      justify="center"
                      color: dark
                  >
                    <div class="desc-close-btn">
                      <v-btn
                                fab
                                dark
                                small
                                color="light-black"
                                class="mr-2"
                                @click="overlay = false"
                              >
                                <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </div>
                      <p id="desc-overlay">{{product_Detail.product_Description}}</p>
                        <v-btn
                          @click="overlay = false"
                        >
                          Read Less
                        </v-btn>
                  </v-overlay>
              </span>
            </div>
          </v-card-title>
          <div class="bottam-bar ">
          <v-card-actions  >
                  <v-row >
                    <v-col class="share-icon mt-2">
                        <v-speed-dial
                              v-model="fab"
                              :direction="direction"
                              :transition="transition" 
                              class="share-icon"
                              align="center"
                            >
                              <template v-slot:activator>
                                <v-btn
                                  v-model="fab"
                                  color="blue darken-2"
                                  dark
                                  fab
                                  class="ml-6"
                                  width="45px"
                                  height="45px"
                                >
                                  <v-icon v-if="fab">
                                    mdi-close
                                  </v-icon>
                                  <v-icon v-else>
                                    mdi-share-circle
                                  </v-icon>
                                </v-btn>
                              </template>
                              <v-btn
                                fab
                                dark
                                small
                                color="#4267B2"
                                class="ml-6"
                                :href="facebookURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-facebook</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="light-blue"
                                class="ml-6"
                                :href="twitterURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-twitter</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="light-green"
                                class="ml-6"
                                :href="whatsappURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-whatsapp</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                class="ml-6"
                                @click="console_logs"
                              >
                                <v-icon>mdi-web</v-icon>
                              </v-btn>
                        </v-speed-dial>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="pr-4 ">
                        <v-btn large rounded class="mx-auto btn" :href="product_Detail.product_Origin" target="_blank" rel="noopener noreferrer">BUY NOW</v-btn> 
                    </v-col>
                  </v-row>
          </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>  
  </div> 
</template>

<script>
import Navbar from './Navbar.vue'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true 
Vue.use(VueClipboard)

export default {
    name: 'swiper-example-loop',
    props: ['product_Detail','x'],
    components: {
    Navbar
    },
    data() {
      return {
        product_id: this.$route.params.productId,
        arr: 0,
        overlay: false,
        absolute: true,
        opacity: 0.8,
        snackbar: false,
        textSucess: 'Order Placed !!',
        timeout: 4000,
        url: window.location.href,
        text: 'Sending you your Diwali gift',
        facebookURL: '',
        twitterURL: '',
        linkedinURL: '',
        whatsappURL: '',
        success: false,
        address: 'https://github.com/',
        direction: 'top',
        fab: false,
        transition: 'slide-y-reverse-transition',
        message_promo: "Promocode",
        failedAlert: false,
        successAlert: false,
      }
  },
  computed: {
    encodedURL() {
      return encodeURIComponent(this.url);
    },
    encodedText() {
      return encodeURIComponent(this.text);
    }
  },
   methods: {
        console_logs() {
            //console.log(this.x[0]);
            // console.log(this.product_Detail.product_Rating);
            // console.log(this.product_Detail.product_Description);
            //console.log(this.product_Detail.product_Id);
            // console.log(this.$route.query.page);
            // console.log(this.$route.fullPath);
            // console.log(this.$router.currentRoute.params.id);
            // console.log(this.facebookURL);
            // console.log(this.twitterURL);
            // console.log(this.whatsappURL);
        },
        generateURLs() {
        this.success = true;
        this.url=window.location.href;
        this.facebookURL =  'http://www.facebook.com/sharer/sharer.php?u=' + this.encodedURL + '&title=' + this.encodedText;
        this.twitterURL =  'https://twitter.com/intent/tweet?text=' + this.encodedText + '&url=' + this.encodedURL;
        this.whatsappURL = 'https://api.whatsapp.com/send/?phone&text='+ this.encodedText + ":" + this.encodedURL;
        },
        doCopy: function(message){
        this.$copyText(message).then(() => {
          this.successAlert = true;
          //console.log(e)
        }, function () {
          this.failedAlert = true;
          //console.log(e)
        });
        },
        promocode() {
            this.message_promo = this.product_Detail.product_Promocode;
            this.doCopy(this.message_promo);
        }
    },
  updated() {
    console.log("Now,updated");
    //this.console_logs();
    this.generateURLs();
    setTimeout(() => {
      this.successAlert = false
    }, 3000),
    setTimeout(() => {
      this.failedAlert = false
    }, 3000)
  },
  created() {
    
  }
}
</script>

<style>

.btn {
  position: relative;
  
}
.mainDiv {
  height: 100vh;
  overflow: hidden;
}
.navbar {
  position: fixed;
  width: 100%;
  height: 10vh;
  z-index: 8;
  margin: 0;
  padding: 0;
}
.img-size {
  height: 40vh;
}
.off {
  color: #008037;
  border-radius: 50%;
  height:60px;
  width: 60px;
  
  text-align: center;
}
#desc {
  font-size: 14px;
  color: grey;
  line-height: 2.2;
  margin-top: 5vh;
  text-overflow: ellipsis;
    overflow: hidden;
}
#desc-overlay {
  font-size: 16px;
  margin: 10px;
  text-align: center;
  text-overflow: ellipsis;
    overflow: hidden;
}
.desc-close-btn {
  display: flex;
  justify-content: end;

}
.discount {
  padding-top: 10px;
}
.card {
  height: 100vh;
}
.card-details {
  height: 40%;
}
.review-number {
  font-size:12px;
  margin:0; 
  padding:0;
  width: fit-content;
  height: fit-content;
}
.alert{
  text-align: center;
  padding-top:0;
  height: auto;
  margin-left: 12px;
  position: relative;
  z-index: 15;
}
.share-icon{
  padding: 0;
  align-items: center;
}
.bottam-bar {
  height: 10%;
}
.section-1 {
  font-size: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
} 
.copy-icon {
  background-color:blue;
  color: white;
}
@media (max-width: 550px) {
  .mainDiv{
    height: 100vh;
    overflow: hidden;
  }
  .content{
    font-size: 12px;
  }
  .img-size{
    height: 40%;
  }
  .card-details {
  height: 30%;
  }
  #desc {
    font-size:14px;
    line-height: 1.6;
  }
  .bottam-bar {
    height: 10%;
  }
  
}
@media (max-width: 400px) {
  #desc {
    font-size: 12px;
    line-height: 1.6;
  }
  .card-details {
    height: 30%;
  }
}
</style>