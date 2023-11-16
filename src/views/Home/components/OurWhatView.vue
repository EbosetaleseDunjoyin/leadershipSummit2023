<template>
   <section class=" bg-white text-black overflow-hidden relative" id="our-what">
        <div class="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24  relative">
            <div class=" relative z-[10] mb-36">
                <div class=" fcd text-apurple w-fit font-medium text-xl lg:text-[34px]  my-4 rounded-lg">
                    Empowering Young Leaders
                </div>
               <div class="border border-black rounded-lg my-1 our-what-img w-100 md:h-96 h-40 relative">
                <img src="../../../assets/starPurple.svg" class="absolute -bottom-6 -left-8 w-14 h-14 z-[12] hidden lg:block"  alt="">
               </div>
               <div class="my-3">
                    <p class="font-light text-base lg:text-xl">
                        Leadership Summit is a national event created by AIESEC in Nigeria as one of the ways to achieve the goal of 
                        <span class="font-medium text-apurple" >helping young people develop their leadership potential.</span> 
                        AIESEC in Nigeria comes up with different ways to help youth contribute to change by creating conversations 
                        that centre around solutions that young people can provide to help fix world problems. 
                        Young people need to develop a positive mindset and be a part of the change. The leadership summit event is AIESEC 
                        in Nigeria's way of contributing to societal and leadership development in youths and helping them achieve this 
                        change.
                       
                    </p>
               </div>
               <div class="flex justify-start my-4">
                    <a href="/register" class="flex white-btn text-black items-center text-[12px] md:text-base border-black  border b-shade">
                      Register for Leadership Summit 
                      <img class=" ml-1 h-6" src="../../../assets/arrow.svg" alt="">
                    </a>
               </div>
            </div>
            
            
        </div>
        <img src="../../../assets/spiral.svg" class="absolute bottom-20 rotate-45 -right-20 md:-right-28  h-auto w-40 md:w-80 z-[2] "  alt="">
        
    </section>
</template>

<script>
export default {
    name:"OurWhatView"
}
</script>

<style scoped lang="scss">
    #our-what{
      .our-what-img{
        background-image: url("../../../assets/ourWHat.jfif");
        background-position:top -70px center;
        background-size: cover;
        background-repeat: no-repeat;
        @media screen  and (max-width: 500px ){
            background-position:top center;
        }

      }
    }
</style>