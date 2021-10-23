<template>
  <div id="app" v-if="product_Details && product_Details.length" >
    <swiper ref="mySwiper" @slideChange="onslideChange"  :options="swiperOption">     
      <template v-if="product_index >= 0">
        <swiper-slide  v-for="product_Detail in product_Details" :key="product_Detail.product_Id" >
          <ProductCard :product_Detail="product_Detail"  class="product_card" ></ProductCard>
        </swiper-slide>
      </template>
      <div v-else><h2> Product Not Found </h2></div>
    </swiper>
  </div>
</template>

<script>
import ProductCard from './Product_Card.vue'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Product_Card_Manager',
  components: {
      ProductCard,
      Swiper,
      SwiperSlide
      
  },
  data() {
        return{
            product_Desc_Url :
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlCd8xy1i8zZJKzS_6SkwM8NnSlQefBhIFbDKOwA_eUtMZ0_O53bMTdf8F9Oaepw-dHGjVy-x3-CsZ/pub?output=csv",
            product_Details:[],
            swiperOption: {
          direction: 'vertical',
           height: window.innerHeight,
          spaceBetween: 60,
          speed: 800,
          grabcursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
        }
    },
    computed: {
      swiper() {
      return this.$refs.mySwiper.$swiper;
      },
      product_id:function(){
      return this.$route.params.id;
      },
      product_index:function(){
        return this.product_Details.findIndex(x => x.product_Id === this.product_id)
      }
    }, 
    mounted() {
      window.onresize = function() {
        console.log("changed device dimensions")
      document.body.height = window.innerHeight;
    }
      this.fetchproduct_Details();
    },
    updated() {
    this.swiper.slideTo(this.product_index, 1000, false);
    },
    methods: {
      fetchproduct_Details(){
         this.$papa.parse(this.product_Desc_Url, {
          download: true,
          header: true,
          complete: (results) => { 
            this.product_Details = results.data;
          }

        });
      },
    onslideChange() {
      console.log("swiped");
      this.$router.push({name: 'Product_Card', params: {id:this.product_Details[this.$refs.mySwiper.$swiper.activeIndex].product_Id}}).catch(()=>{});
    },
 }
}

</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
  
}
table {
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
}
th {
  background-color: lightgray;
  border: 1px solid black;
  padding: 5px;
}
td {
  border: 1px solid black;
}
</style>