<template>
  <section class="bg-[#121212]  text-white overflow-hidden relative" id="waitlist">
        <div class="container mx-auto max-w-7xl px-6 xl:px-0 my-20 py-20 lg:my-24 z-[20] relative">
            <div class="relative max-w-3xl mx-auto">
                <h1 class="text-[43px] my-2 text-center max-w-lg mx-auto leading-none"><span class="fl font-semibold" >We're recruiting soon, and</span> <span class="fcd font-light">you can't miss out on it.</span></h1>
                <p class="font-light text-base fcd text-center max-w-sm mx-auto">
                    Join the mailing list to get more information immediately after it goes out.
                </p>

                <div class="waitlist-form flex flex-col justify-center my-10">
                    <form action="">
                        <div class="flex md:flex-row flex-col items-stretch justify-center gap-4">
                            <input type="email" name="email" placeholder="Enter Email" class="fl" id="">
                            <button href="#" class=" w-100 flex text-center justify-center primary-btn fcd px-1 text-black text-base border-white border">
                                Join Waitlist
                                <img class=" ml-1  xl:h-6" src="../../../assets/arrow.svg" alt="">
                            </button>
                        </div>
                    </form>

                    <div class="relative my-3 flex w-fit mx-auto justify-center">
                        <p class="fcd text-grey text-center relative">
                            We promise not to <span class="text-dpurple" >spam</span> you.
                        </p>
                        <img src="../../../assets/banner-star.svg" class="absolute -top-4 -left-6 h-auto w-10 z-[2] hidden xl:block"  alt="">
                    </div>
                </div>
            </div>


            <img src="../../../assets/OrangeStar.svg" class="absolute -top-14 -right-8 lg:-top-24  lg:-right-40 h-auto w-20 lg:w-40 z-[2] "  alt="">
            <img src="../../../assets/pStar.svg" class="absolute bottom-0 -left-12 lg:-left-44 h-auto w-28 lg:w-60 z-[2] "  alt="">
        
        </div>
        
    </section>
</template>

<script>
export default {
    name: "WaitlistView"
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