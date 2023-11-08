<template>
  <div class="" id="home">
    <!--HeaderView-->
    <HeaderView/>
    
      <!--Home-->
      <!--BannerView-->
      <BannerView/>
      <!--OurWhatView-->
      <OurWhatView/>
      <!--OurThemeView-->
      <OurThemeView/>
      <!--WhyAttendView-->
      <WhyAttendView/>
      <!--AboutAIESEC-->
      <AboutAIESEC/>
      <!--WaitlistView-->
      <WaitlistView/>
    <!--FooterView-->
    <FooterView />

  </div>
</template>

<script>
import HeaderView from "../../components/Header/HeaderView.vue";
import FooterView from "../../components/Footer/FooterView.vue";
import BannerView from "./components/BannerView.vue";
import OurWhatView from "./components/OurWhatView.vue";
import OurThemeView from "./components/OurThemeView.vue";
import WhyAttendView from "./components/WhyAttendView.vue";
import AboutAIESEC from "./components/AboutAIESEC.vue";
import WaitlistView from "./components/WaitlistView.vue";

export default {
    name: "HomeView",
    components: {
       HeaderView,
       FooterView,
       BannerView,
       OurWhatView,
       OurThemeView,
       WhyAttendView,
       AboutAIESEC,
       WaitlistView
    }
}
</script >

<style >

</style>