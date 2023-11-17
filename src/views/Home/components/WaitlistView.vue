<template>
    <div class="">
        <SuccessView v-if="modal" :message="message" />
        <section class="bg-[#121212]  text-white overflow-hidden relative" id="waitlist">
              <div class="container mx-auto max-w-7xl px-6 xl:px-0 my-20 py-20 lg:my-24 z-[20] relative">
                  <div class="relative max-w-3xl mx-auto">
                      <h1 class="text-[43px] my-2 text-center max-w-lg mx-auto leading-none"><span class="fl font-semibold" >We're recruiting soon, and</span> <span class="fcd font-light">you can't miss out on it.</span></h1>
                      <p class="font-light text-base fcd text-center max-w-sm mx-auto">
                          Join the mailing list to get more information immediately after it goes out.
                      </p>
      
                      <div class="waitlist-form flex flex-col justify-center my-10">
                          <form @submit.prevent="submitMail()" action="" id="waitlistForm">
                              <div class="flex md:flex-row flex-col items-stretch justify-center gap-4">
                                  <input  type="email" v-model="email" name="email" placeholder="Enter Email" class="fl" id="">
                                  <button type="submit" v-if="loading" class=" w-100 flex text-center items-center justify-center primary-btn fcd px-1 text-black text-base border-white border">
                                      Loading
                                      <svg class="spinner animate-spin ms-2" viewBox="0 0 50 50">
                                          <circle class=" path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                                      </svg>
                                  </button>
                                  <button type="submit" v-else class=" w-100 flex text-center items-center justify-center primary-btn fcd px-1 text-black text-base border-white border">
                                      Join Waitlist
                                     <img class=" ml-1 lg:h-6" src="../../../assets/arrow.svg" alt="">
                                  </button>
                              </div>
                          </form>
      
                          <div class="relative my-3 flex w-fit mx-auto justify-center">
                              <p class="fcd text-grey text-center relative">
                                  We promise not to <span class="text-dpurple" >spam</span> you.
                              </p>
                              <img src="../../../assets/banner-star.svg" class="absolute -top-4 -left-6 h-auto w-10 z-[2] "  alt="">
                          </div>
                      </div>
                  </div>
      
      
                  
              </div>
              <img src="../../../assets/OrangeStar.svg" class="absolute -top-2 -right-8 lg:-top-2  lg:-right-10 h-auto w-20 lg:w-40 z-[2] "  alt="">
              <img src="../../../assets/pStar.svg" class="absolute bottom-0 -left-10 lg:-left-20 h-auto w-28 lg:w-60 z-[2] "  alt="">
          </section>
          
    </div>
</template>

<script>
import Notify from 'simple-notify';
import SuccessView from '../../../components/SuccessView.vue';
// import axios from 'axios'
export default {
    name: "WaitlistView",
    data(){
        return{
            email: "",
            loading:false,
            modal:false,
            message: ""
        }
    },
    components:{ SuccessView },
    methods:{
        submitMail(){
           
            if(this.email === ""){
                this.notification("error","Error","The email field is required")
            }else{
                 let formData = {
                    email : this.email
                 };
                 this.loading = true
               
                // console.log(this.email);
                // axios({
                //     method: 'post',
                //     url: 'https://ainbackend.fly.dev/api/submit_email',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         // 'Access-Control-Allow-Origin': '*', // Set the content type to JSON
                //     },
                //     data: JSON.stringify(formData)

                // }).then(response => {
                //     // console.log(response);
                   
                //     if (!response.ok) {
                //         this.loading = false
                      
                //     }
                //     return response.json(); // Assuming the response is JSON
                // })
                // .then(data => {
                //     // Handle the data retrieved from the API
                //     this.email = ""
                //     if(data && (data.detail === "registration success")){
                //         this.notification("success", "Success", "Thank you we will be with you shortly")
                //         this.loading = false;
                //     }
                //     else if(data && (data.detail === "already registered")){
                //         this.notification("error", "Error", "This email already exists with us")
                //         this.loading = false;
                //     }
                // })
                // .catch(error => {
                //     // Handle errors that occurred during the fetch
                //     this.loading = false
                //     this.notification("error", "Error", "There was a problem with the fetch operation.")
                //     console.error('There was a problem with the fetch operation:', error);
                // });
                const testURL = 'https://ainbackend.fly.dev/api/submit_email';
                const myInit = {
                    method: 'POST',
                    // mode: 'no-cors',
                    // mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*', 
                    },
                    body: JSON.stringify(formData),
                    // body: formData, 
                };

                // const myRequest = new Request(testURL, myInit);

                fetch(testURL, myInit)
                .then(response => {
                    // console.log(response);
                   
                    if (!response.ok) {
                        this.loading = false
                        // throw new Error('Network response was not ok');
                        //  if (response.status === 400) {
                        //     this.notification("error", "Error", "This email already exists with us");
                        // }
                        //  this.notification("error", "Error", "An error occured, please try again");
                    }
                    return response.json(); // Assuming the response is JSON
                })
                .then(data => {
                    // Handle the data retrieved from the API
                    this.email = ""
                    if(data && (data.detail === "registration success")){
                        // this.notification("success", "Success", "Thank you we will be with you shortly");
                        this.message = `
                            <div class="my-5 py-10 text-center">
                                <h3 class="lg:text-4xl text-xl font-semibold" id="modal-title">Thank you for signing up.</h3>
                                <div class="my-2">
                                    <p class="text-base lg:text-xl mx-auto max-w-sm">You're now on our waitlist. Keep an eye out for updates in your mail.</p>
                                </div>
                                <a href="/" class="underline text-prime">Home</a>
                            </div>
                        `;
                        this.modal = true;
                        this.loading = false;
                    }
                    else if(data && (data.detail === "already registered")){
                        this.notification("error", "Error", "This email already exists with us")
                        this.loading = false;
                    }
                })
                .catch(error => {
                    // Handle errors that occurred during the fetch
                    this.loading = false
                    this.notification("error", "Error", "There was a problem with the fetch operation.")
                    console.error('There was a problem with the fetch operation:', error);
                });
            }
        },
        notification(type, title, message){
            new Notify({
                status: type,
                title: title,
                text: message,
                effect: "slide",
                speed: 2000,
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 5000,
                gap: 100,
                distance: 20,
                type: 1,
                position: "right top",
            });
        }

    }
}
</script>

<style lang="scss">
    #waitlist{
        .waitlist-form{
            input{
                border-radius: 8px;
                border: 1px solid #000;
                background: #EBEFF7;
                color: #000000;
                width: 45%;
                padding:12px 16px;
                @media screen and (max-width: 480px) {
                    width: 100%;
                }
                &::placeholder{
                    color: #969696;
                }
            }
        }
       
    }
</style>
