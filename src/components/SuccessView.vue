<template>
  <div class="">
        <section class="h-screen mt-18 bg-black text-white overflow-hidden relative" id="registerbanner">
           
            <div class="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    
                <div class="fixed inset-0 modal-bg transition-opacity"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-black relative overflow-hidden text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border border-white rounded-xl">
                        <div class=" fcd ">
                            <div class="my-5 text-center ">
                                <h3 class="lg:text-4xl text-xl font-semibold  " id="modal-title">You've registered to attend Leadership Summit 2023</h3>
                                <div class="flex justify-center my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                        <path d="M7.29289 19.7071C7.68342 20.0976 8.31658 20.0976 8.70711 19.7071L15.0711 13.3431C15.4616 12.9526 15.4616 12.3195 15.0711 11.9289C14.6805 11.5384 14.0474 11.5384 13.6569 11.9289L8 17.5858L2.34315 11.9289C1.95262 11.5384 1.31946 11.5384 0.928932 11.9289C0.538407 12.3195 0.538407 12.9526 0.928932 13.3431L7.29289 19.7071ZM7 -4.37114e-08L7 19L9 19L9 4.37114e-08L7 -4.37114e-08Z" fill="white"/>
                                    </svg>
                                </div>
                                <div class="my-2">
                                    <p class="text-base lg:text-xl mx-auto max-w-sm">Check your registered email for event details.</p>
                                </div>

                                <h3 class="lg:text-2xl text-xl font-semibold  my-10" >See you there!</h3>
                                <a href="/" class="underline text-prime">Home</a>
                            </div>
                            <img src="../assets/starPurple.svg" class="absolute -bottom-10 -left-8 lg:-bottom-4  lg:-left-4 h-auto w-10 lg:w-20 z-[2] "  alt="">
                            <img src="../assets/Track.svg" class="absolute -top-10 -right-8 lg:-top-10 rotate-90 lg:-right-8 h-auto w-20 lg:w-40 z-[2] "  alt="">
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>

            </div>
          
        </section>
  </div>
</template>

<script>
export default {
    name:"SuccessView"
}
</script>

<style>
    .modal-bg{
        background: rgba(0, 0, 0, 0.60);
        backdrop-filter: blur(6.150000095367432px);
    }
</style>