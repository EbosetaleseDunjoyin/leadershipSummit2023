<template>
  <div class="bg-black " id="register">
    <!--HeaderView-->
    <HeaderView/>
    
    <div class="overflow-x-hidden relative">
      <!--Register-->
        <!--BannerView-->
        <BannerView/>
        <!--BannerView-->
        <RegisterForm/>
        
        <img src="../../assets/OrangeStar.svg" class="fixed top-10 -right-8 lg:top-10  lg:-right-10 h-auto w-20 lg:w-40 z-[2] "  alt="">
         <img src="../../assets/pStar.svg" class="fixed  -bottom-10 lg:-bottom-20 -left-10 lg:-left-20 h-auto w-28 lg:w-60 z-[2] "  alt="">
         <img src="../../assets/Track.svg" class="fixed top-12 -left-12 lg:top-12  lg:-left-1 h-auto w-20 lg:w-24 rotate-90 z-[2] "  alt="">
           <img src="../../assets/Track.svg" class="fixed bottom-2 -right-12 lg:bottom-2 lg:-right-10 h-auto w-20 rotate-90 lg:w-24 z-[2] "  alt="">
      
    </div>
  </div>
</template>

<script>
import HeaderView from "../../components/Header/HeaderView.vue";
// import FooterView from "../../components/Footer/FooterView.vue";
import BannerView from "./components/BannerView.vue";
import RegisterForm from "./components/RegisterForm.vue";


export default {
    name: "RegisterView",
    components: {
       HeaderView,
       BannerView,
       RegisterForm
       
    }
}
</script >

<style lang="scss">
  #register{
    min-height: 100vh;
    background-color: #161515;
    // overflow: hidden;
  }
</style>