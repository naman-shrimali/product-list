<template>
  <div class="v-dialog__ title content v-dialog__ title content--active mainDiv" >
    <v-layout class="v-dialog v-dialog--active v-dialog--fullscreen ">
      <nav>
    <Navbar class="navbar"></Navbar>
      </nav >
      <v-flex sm8 offset-sm2 md6 offset-md3 md4 offset-md4 mt-8 >
        <br>
        <v-card color="primary" class="card text">
          <!-- <swiper :options="swiperOption">
          <swiper-slide> -->
          <v-img
            contain
            class="white--text"
            height="300px"
            :src= "product_Detail.product_Image_URL"
            style="background-color:white"
          >
            <v-container fill-height fluid color="primary">
              <v-layout fill-height>
                <v-flex sm12 align-end flexbox>
                  <div class="off" style="background-color:#b1eff0; position:fixed"><h2 class="discount">{{ product_Detail.product_Discount +"%"}}</h2></div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <!-- Reserved for multiple images  -->
          <!-- </swiper-slide>
          <swiper-slide>
          <v-img
            contain
            class="white--text"
            height="300px"
            :src= "product_Detail.product_Image_URL_1"
            style="background-color:white"
          >
            <v-container fill-height fluid color="primary">
              <v-layout fill-height>
                <v-flex sm12 align-end flexbox>
                  <div class="off" style="background-color:grey;"><h2 color="primary" class="discount">{{ product_Detail.product_Discount +"%"}}</h2></div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          </swiper-slide>
          <swiper-slide>
          <v-img
            contain
            class="white--text"
            height="300px"
            :src= "product_Detail.product_Image_URL_2"
            style="background-color:white;"
          >
            <v-container fill-height fluid color="primary">
              <v-layout fill-height>
                <v-flex sm12 align-end flexbox>
                <div class="off" style="background-color:grey;"><h2 color="primary" class="discount">{{ product_Detail.product_Discount +"%"}}</h2></div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
          <v-card-title class="pr-1 ml-4 mr-4" >
            <div >
              <span class=" title content pb-2 "><v-row><h3 color="text">{{product_Detail.product_Name}}</h3><v-spacer></v-spacer><span class=" title content" style="color:#008037;"> ₹{{product_Detail.product_Discounted_Price}}</span><p style="color:grey;"> / </p> <del style="color:grey;" class="">₹{{product_Detail.product_MRP}}</del></v-row></span>
              <v-divider ></v-divider>
              <span class=" title content"><v-row class="mt-1"><v-rating readonly mdall dense  v-model.number = 'product_Detail.product_Rating' color="#38b6ff" background-color="#008037" half-increments></v-rating><p style="font-size:14px;">({{product_Detail.product_Reviews_Number}})</p></v-row></span>
              <v-divider></v-divider>
              <!-- <span class=" content"><p ref="availabilityMessage">{{product_Detail.product_Availability}}</p></span> -->
              <span class=""><p id="desc">{{product_Detail.product_Description.substring(0,100)+'...'}}<v-icon class="mr-1" color="background" @click="overlay = !overlay">mdi-page-next-outline</v-icon></p>
              <v-overlay
                :absolute="absolute"
                :value="overlay"
                :opacity="opacity"
                align="center"
                justify="center"
              >
                <p id="desc-overlay">{{product_Detail.product_Description}}</p>
                <v-btn
                  @click="overlay = false"
                >
                  Read Less
                </v-btn>
              </v-overlay></span>
            </div>
          </v-card-title>
          <v-card-actions >
            <!-- <v-btn
                    color="primary"
                    :href="twitterURL" target="_blank" rel="noopener noreferrer"
                  >
                    Keepf
                  </v-btn>
            <a
                    :href="twitterURL" target="_blank" rel="noopener noreferrer"
                  >
                    Keept
                  </a>
            <v-btn
                    color="primary"
                   :href="twitterURL" target="_blank" rel="noopener noreferrer"
                  >
                    Keepl
                  </v-btn> -->
                  <v-row>
                    <v-col class="pr-4">
                        <v-btn large rounded class="mx-auto btn" :href="address">BUY NOW</v-btn> 
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="share-icon">
                        <v-speed-dial
                              v-model="fab"
                              :direction="direction"
                              :transition="transition"
                              class="share-icon"
                            >
                              <template v-slot:activator>
                                <v-btn
                                  v-model="fab"
                                  color="blue darken-2"
                                  dark
                                  fab
                                  class="ml-6"
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
                                :href="facebookURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-facebook</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="light-blue"
                                :href="twitterURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-twitter</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="light-green"
                                :href="whatsappURL" target="_blank" rel="noopener noreferrer"
                              >
                                <v-icon>mdi-whatsapp</v-icon>
                              </v-btn>
                        </v-speed-dial>
                    </v-col>
                  </v-row>
            <!-- <v-snackbar v-model="snackbar" :timeout="timeout" color="text">
                {{ textSucess }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="primary"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    v-bind="attrs"
                    href="https://github.com/"
                  >
                    Keep
                  </v-btn>
                </template>
             </v-snackbar> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>  
  </div> 
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
//Files to import for multiple slides
import Navbar from './Navbar.vue'

export default {
    name: 'swiper-example-loop',
    props: ['product_Detail','x'],
    components: {
    //  Swiper,
    // SwiperSlide,
    Navbar
    },
    data() {
      return {
        product_id: this.$route.params.productId,
        arr: 0,
        overlay: false,
        absolute: true,
        opacity: 1,
      // swiperOption: {
      //     slidesPerView: 1,
      //     spaceBetween: 30,
      //     loop: true,
      //     pagination: {
      //       el: '.swiper-pagination',
      //       clickable: true
      //         }
      //     },
      //     navigation: {
      //       nextEl: '.swiper-button-next',
      //       prevEl: '.swiper-button-prev'
      //     },
      snackbar: false,
      textSucess: 'Order Placed !!',
      timeout: 4000,
      url: window.location.href,
      text: 'Sharing with you your gift of this diwali',
      facebookURL: '',
      twitterURL: '',
      linkedinURL: '',
      whatsappURL: '',
      success: false,
      address: 'https://github.com/',
      /////////////////////////////////
      direction: 'top',
      fab: false,
      transition: 'slide-y-reverse-transition',
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
            console.log(this.product_Detail.product_Id);
            console.log(this.$route.query.page);
            console.log(this.$route.fullPath);
            console.log(this.facebookURL);
            console.log(this.twitterURL);
            console.log(this.whatsappURL);
        },
        check_Availability() {
          // if(this.product_Detail.product_Availability==0)
          // {
          //   this.$refs.availabilityMessage.innerHTML= "emptied !!";
          //   this.$refs.availabilityMessage.style.color="grey";
          //   this.$refs.buyNow.disabled = true;
          // }
          // else if(this.product_Detail.product_Availability<=5)
          // {
          //   this.$refs.availabilityMessage.innerHTML="hurry up !!, less than 5 left";
          //   this.$refs.availabilityMessage.style.color="red";
          //   this.$refs.buyNow.disabled = false;
          // }
          // else {
          //   this.$refs.availabilityMessage.innerHTML="Available";
          //   this.$refs.buyNow.disabled = false;
          // }
          //  window.location.href = "https://github.com/";

        },
        generateURLs() {
      //if (event.target.checkValidity()) {
        this.success = true;
        this.url=window.location.href;
        this.facebookURL =  'http://www.facebook.com/sharer/sharer.php?u=' + this.encodedURL + '&title=' + this.encodedText;
        this.twitterURL =  'https://twitter.com/intent/tweet?text=' + this.encodedText + '&url=' + this.encodedURL;
        //this.linkedinURL = 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.encodedURL + '&title=' + this.encodedText;
        this.whatsappURL = 'https://api.whatsapp.com/send/?phone&text='+ this.encodedText + ":" + this.encodedURL;
      //}
    }
    },
  updated() {
    console.log("Now,updated");
    this.console_logs();
    this.generateURLs();
  },
  mounted() {
    //this.check_Availability();
    
  },
  watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
}
</script>

<style>
.content {
  font-size: 15px;
}
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
}
#desc-overlay {
  font-size: 16px;
  margin: 10px;
  text-align: center;
}
.discount {
  padding-top: 10px;
}
.card {
  height: 90vh;
}
.share-icon{
  padding: 0;
  align-items: center;
}
</style>