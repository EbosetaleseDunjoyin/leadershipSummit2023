<template>
   <section class=" text-black overflow-hidden relative" id="why-attend">
        <div class="container mx-auto max-w-7xl px-6 xl:px-0 mt-10 pt-20 lg:my-24  relative">
            <div class=" relative z-[10] mb-36">
                <div class=" fcd text-black w-fit font-medium text-xl lg:text-[34px]  my-4 rounded-lg">
                    Take the first step to join global change
                </div>
                
                <div class="my-3">
                    <p class="font-light text-base lg:text-xl max-w-5xl text-justify lg:text-start  ">
                        No matter your tribe, background, religion or gender, you deserve to be a part of the change with AIESEC. Get this unique chance to meet and interact with youths from all over the country like you. Exchange stories, learn new ways and unlearn old habits to move the world forward and promote peace and justice. 
                        Join meaningful conversations with amazing young people. Be a part of the movement at Leadership Summit 2023.
                
                    </p>
                </div>
                <div class="flex justify-start my-4">
                    <a href="/register" class="flex white-btn text-black text-[12px] md:text-base items-center border-black  border b-shade">
                        Register for Leadership Summit 
                        <svg width="20" height="20" viewBox="0 0 19 19" fill="none" class="ml-1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.77459 12.1441L12.9773 5.94141" stroke="#000000" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843" stroke="#000000" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
    
    
        </div>
        <img src="../../../assets/Computer.svg" class="absolute lg:top-8 top-2 -right-4 lg:-right-10 -rotate-[30deg] h-auto w-20 lg:w-44 z-[2] "  alt="">
        <img src="../../../assets/GlobeGreen.svg" class="absolute lg:bottom-8 bottom-2 -right-4 lg:-right-20 rotate-[30deg] h-auto w-20 lg:w-44 z-[2] "  alt="">
    </section>
</template>

<script>
export default {
    name: "WhyAttendView"
}
</script>

<style scoped lang="scss" >
    #why-attend{
        background-image:  url('../../../assets/boxes.png');
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
    }
</style>