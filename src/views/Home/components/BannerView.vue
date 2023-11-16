<template>
    <div class="">
        <section class="mt-18 bg-[#171616] text-white overflow-hidden relative" id="banner">
          <div class="container mx-auto max-w-7xl px-6 xl:px-0  my-10 lg:my-24  relative ">
            <div class="flex lg:flex-row flex-col items-center py-14 lg:py-24 gap-y-24 lg:gap-24">
                <div class="relative align-center">
                    <h1 class="fcd font-medium  heading-1 leading-none z-10 ">
                        Join the movement with <span class="font-bold text-ablue" >AIESEC</span> to equip youths for global change.
                    </h1>
                    <p class="text-grey mt-2 mb-4 lg:mb-8 lg:text-[24px]  w-100 lg:w-10/12">
                        Get equipped with all you need to make global impact as a youth with AIESEC in Nigeria.
                    </p>
                    <div class="flex justify-start">
                        <a href="/register" class="flex primary-btn items-center text-[12px] lg:text-base text-black  border-white border my-2 ">
                            Register for Leadership Summit 
                            <img class=" ml-1 lg:h-6" src="../../../assets/arrow.svg" alt="">
                        </a>
                    </div>
                    <img src="../../../assets/YellowSTAR.svg" class="absolute -top-14 -left-4 lg:-left-12 w-12 md:w-24 h-24 z-[2] "  alt="">
                </div>
                <div class="relative ">
                    <div class="box-img w-[260px] h-[260px] md:w-[435px] md:h-[435px] xl:w-[435px] xl:h-[435px] p-shade relative">
                        
                        <img src="../../../assets/banner-star.svg" class="absolute lg:-top-24 lg:-left-24 -top-16 -left-16 w-30 md:w-[200px] h-auto z-[2] "  alt="">
                        <img src="../../../assets/tripleGlobe.svg" class="absolute -top-8 -right-8 lg:-top-10 lg:-right-8 w-24 lg:w-40 h-auto z-[2] "  alt="">
                        <div class="absolute lg:-bottom-20 lg:-left-24 -bottom-10 -left-8 w-20 lg:w-40 h-auto z-[2] p-2 rounded-full bg-[#171616]" >
                            <img src="../../../assets/logo-circle.svg" class=""  alt="">
                        </div>
                        <img src="../../../assets/greenEye.svg" class="absolute -bottom-10 -right-14 w-28 lg:-bottom-16 lg:-right-24 lg:w-44 h-auto z-[2] "  alt="">
                    </div>
                </div>
            </div>
    
          </div>
          
        </section>
       
    </div>
</template>

<script>
export default {
    name: "BannerView"
}
</script>

<style lang="scss" scoped>
    #banner{
        .banner-note{
            
            background: linear-gradient(90deg, #7949E8 -8.05%, #3D8DFC 110.58%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            mix-blend-mode: plus-lighter;
           margin: auto;
            font-family: 'Inter';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
    
        }

        .heading-1{
            font-size: 40px;
            @media screen and (max-width:750px) {
                font-size: 28px;
            }
        }
        .box-img {
            background-image: url("../../../assets/banner-img.jfif");
            background-position: center;
            background-size: auto 530px;
            background-repeat: no-repeat;

            @media screen and (max-width:750px) {
                background-size: auto 320px;
            }

        }
    }
</style>