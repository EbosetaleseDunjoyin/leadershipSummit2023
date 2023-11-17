<template>
  <div class="">

    <HeaderView />
    <SuccessView />
    <FooterView />

  </div>
</template>

<script>
import HeaderView from '../../components/Header/HeaderView.vue';
import FooterView from '../../components/Footer/FooterView.vue';
import SuccessView from '../../components/SuccessView.vue';


export default {
  name: "AlertView",
  components: { FooterView, HeaderView, SuccessView },
  created() {
    // Assuming you want to check the 'id' parameter in the URL
    const paramId = this.$route.params.name;
    let parms = ["success","failed"]

    // Check if the 'id' parameter exists
    if (!parms.includes(paramId)) {
      // Redirect the user to another page or route if the 'id' parameter is missing
      this.$router.push('/register');
    }
  },
  methods: {

  }
}
</script>

<style></style>