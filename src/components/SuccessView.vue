<template>
  <div class="">
        <section class="h-screen mt-18 bg-black text-white overflow-hidden relative" id="registerbanner">
           
            <div class="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    
                <div class="fixed inset-0 modal-bg transition-opacity"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-black relative overflow-hidden text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border border-white rounded-xl">
                        <div class=" fcd ">
                            <div v-html="message"></div>
                            <img src="../assets/starPurple.svg" class="absolute -bottom-1 -left-2 lg:-bottom-4  lg:-left-4 h-auto w-10 lg:w-20 z-[2] "  alt="">
                            <img src="../assets/Track.svg" class="absolute -top-8 -right-4 lg:-top-10 rotate-90 lg:-right-8 h-auto w-20 lg:w-40 z-[2] "  alt="">
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
    props: ["message"],
    name:"SuccessView"
}
</script>

<style>
    .modal-bg{
        background: rgba(0, 0, 0, 0.60);
        backdrop-filter: blur(6.150000095367432px);
    }
</style>