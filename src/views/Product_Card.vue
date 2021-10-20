<template>
  <div class="v-dialog__ title content v-dialog__ title content--active mainDiv" >
    <v-layout class="v-dialog v-dialog--active v-dialog--fullscreen ">
      <nav>
    <Navbar class="navbar"></Navbar>
    </nav >
      <v-flex sm8 offset-sm2 md6 offset-md3 md4 offset-md4 mt-6 >
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
            <div class="">
              <span class=" title content pb-2 "><v-row><h3 color="text">{{product_Detail.product_Name}}</h3><v-spacer></v-spacer><span class=" title content" style="color:#008037;"> ₹{{product_Detail.product_Discounted_Price}}</span><p style="color:grey;"> / </p> <del style="color:grey;" class="">₹{{product_Detail.product_MRP}}</del></v-row></span>
              <v-divider ></v-divider>
              <span class=" title content"><v-row class="mt-1"><v-rating readonly mdall dense  v-model.number = 'product_Detail.product_Rating' color="#38b6ff" background-color="#008037" half-increments></v-rating><p style="font-size:14px;">({{product_Detail.product_Reviews_Number}})</p></v-row></span>
              <v-divider></v-divider>
              <span class=" content"><p ref="availabilityMessage">{{product_Detail.product_Availability}}</p></span>
              <span class=" mt-2"><p id="desc">{{product_Detail.product_Description.substring(0,50)+'...'}}<v-icon class="mr-1" color="background" @click="overlay = !overlay">mdi-page-next-outline</v-icon></p>
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
            <v-btn large rounded depressed ref="buyNow" class="mx-auto btn" @click="snackbar = true; console_logs()" :disabled="false">BUY NOW</v-btn> 
            <v-snackbar v-model="snackbar" :timeout="timeout" color="text">
                {{ text }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="primary"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
             </v-snackbar>
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
          text: 'Order Placed !!',
          timeout: 4000,
    }
  },
  computed: {

  },
   methods: {
        console_logs() {
            //console.log(this.x[0]);
            // console.log(this.product_Detail.product_Rating);
            // console.log(this.product_Detail.product_Description);
            console.log(this.product_Detail.product_Id);
            console.log(this.$route.query.page);
            
        },
        check_Availability() {
          //let buynow = document.getElementById("buyNow");

          if(this.product_Detail.product_Availability==0)
          {
            this.$refs.availabilityMessage.innerHTML= "emptied !!";
            this.$refs.availabilityMessage.style.color="grey";
            this.$refs.buyNow.disabled = true;
          }
          else if(this.product_Detail.product_Availability<=5)
          {
            this.$refs.availabilityMessage.innerHTML="hurry up !!, less than 5 left";
            this.$refs.availabilityMessage.style.color="red";
            this.$refs.buyNow.disabled = false;
          }
          else {
            this.$refs.availabilityMessage.innerHTML="Available";
            this.$refs.buyNow.disabled = false;
          }
        }
    },
  updated() {
    console.log("Now,updated");
    
  },
  mounted() {
    this.check_Availability();
  }
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
  font-size: 12px;
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
</style>