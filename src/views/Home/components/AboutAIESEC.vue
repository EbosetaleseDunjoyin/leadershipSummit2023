<template>
   <section class="  text-white overflow-x-hidden relative h-[1000px] md:h-auto" id="about-aiesec">
        <div class="container mx-auto max-w-7xl px-6 xl:px-0 mb-20 py-20 lg:my-24 z-[20] relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-24">
                <div class=" relative z-[10] ">

                    <div class="my-10">
                        <div class=" p-2 lg:p-3 my-3 rounded-lg bg-[rgba(255,255,255,0.15)] w-fit" >
                            <p class="font-semibold fcd text-xl lg:text-base">
                                What is AIESEC?
                            </p>
                        </div>
                        <p class="font-light text-base lg:text-xl ">
                            AIESEC is a youth-led organisation created by and for young people. With a major goal of achieving peace and fulfilment of humankind's potential, AIESEC aims to achieve this by equipping young people with leadership skills. AIESEC helps young people like you become better leaders and create a greater future for yourselves and the world you live in.
                        </p>
                    </div>
                    <div class="my-10">
                        <div class=" p-2 lg:p-3 my-3 rounded-lg bg-[rgba(255,255,255,0.15)] w-fit" >
                            <p class="font-semibold fcd text-xl lg:text-base">
                                Curious about how we work?
                            </p>
                        </div>
                        <p class="font-light text-base lg:text-xl">
                            As a youth-led organisation, we are a community of young people looking to grow personally and professionally. If you’re a youth who’s looking to join a community of great minds ready to change the world in their own way, AIESEC might just be the place for you.
                         </p>
                    </div>
                    
                   
                </div>
            </div>


            <img src="../../../assets/earthOrange.svg" class="absolute -top-6 -left-28 lg:-top-28 lg:-left-60 h-auto w-30 lg:w-60 z-[2] "  alt="">
            <img src="../../../assets/Track.svg" class="absolute -bottom-20 -right-28 lg:bottom-2 lg:-right-40 h-auto w-30 lg:w-60 z-[2] "  alt="">
            
        </div>
        <div class="bg-gradient"></div>
        <div class="dark-gradient"></div>
        <div class="back-gradient"></div>
    </section>
</template>

<script>
export default {
    name: "AboutAIESEC"
}
</script>

<style scoped lang="scss" >
    #about-aiesec{
        background: url('../../../assets/aboutA.jfif'), lightgray 50% / cover no-repeat;
        background-position: center right;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
         @media screen and (max-width:500px){
             background-position: bottom center;
            background-repeat: no-repeat;
            background-size: 500px auto;
        }
        .bg-gradient{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.56;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #7949E8 -8.05%, #3D8DFC 110.58%);
            
            @media screen and (max-width:500px){
                // transform: rotate(90deg);
                // background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #7949E8 -8.05%, #3D8DFC 110.58%);
                // height: 2000px;
                // top:-20px
            }
        }

        .dark-gradient{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            background: linear-gradient(90deg, #000 35.57%, rgba(0, 0, 0, 0.00) 110.58%);
            @media screen and (max-width:500px){
                
                background: linear-gradient(to bottom, #000 35.57%, rgba(0, 0, 0, 0.00) 110.58%);
                // height: 2000px;
            }
        }
        .back-gradient{
            position: absolute;
            top:-20;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.2;
            background: url('../../../assets/back-about.png'), lightgray -111.411px -54.537px / 113.947% 117.261% no-repeat;
            mix-blend-mode: overlay;
            background-size: 1000px auto;
            background-position: center right;
            // @media screen and (max-width:500px){
            //     transform: rotate(90deg);
            //     height: 1000px;
            // }
        }

    }
</style>