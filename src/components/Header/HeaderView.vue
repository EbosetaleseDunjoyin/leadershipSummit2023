<template>
  <div class=" min-h-fit lg:h-22 py-4 sticky top-0 border-b-2 bg-black text-white z-50" id="header">
      <div class=" container mx-auto max-w-7xl px-6  py-2 lg:py-0 xl:px-0">
        <header class="">
          <nav class=" flex  items-center z-40 justify-between" aria-label="Global">
            <div class="flex  lg:flex-1">
              <a href="/" class=" flex flex-row items-center fl text-[13px] md:text-base font-extrabold">
                <img class="h-8 lg:h-12 w-auto mr-3 " src="../../assets/logo.svg" alt=""> 
                <span class="" >Leadership Summit</span>  
                <span class="mr-1 ml-2 font-light text-grey "> |</span>
                <span class=" font-medium  text-ablue">2023</span>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button @click="toggleDropdown()" v-if="!dropdown" type="button" class=" inline-flex items-center justify-center rounded-md  text-gray-700">
                <span class="sr-only">Open main menu</span>
                <div class="border border-white rounded-full p-1.5">
                  <svg  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                 
                </div>
              </button>
              <button @click="toggleDropdown()" v-else type="button" class=" inline-flex items-center justify-center rounded-md  text-gray-700">
                <span class="sr-only">Open main menu</span>
                <div class="border border-white rounded-full p-1.5">
                  <svg  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
              </button>
            </div>
            <div class="hidden lg:flex">

              <div class="hidden lg:flex items-center fcd font-normal gap-x-4 xl:gap-x-8">
                <a  href="#our-what" :class='{"text-[13px] xl:text-base leading-5 nav-link font-normal ":true, "active": isActive("#our-what") }'>
                  Our What
                  <div class=""></div>
                </a>
                <a  href="#our-theme" :class='{"text-[13px] xl:text-base leading-5 nav-link font-normal ":true,"active": isActive("#our-theme")}'>
                  Our Theme
                  <div class=""></div>
                </a>
                <a  href="#why-attend" :class='{"text-[13px] xl:text-base leading-5 nav-link font-normal ":true,"active":isActive("#why-attend")}'>
                  Why Attend?
                  <div class=""></div>
                </a>
                <a  href="#about-aiesec" :class='{"text-[13px] xl:text-base leading-5 nav-link font-normal ":true,"active":isActive("#about-aiesec")}'>
                  About AIESEC
                  <div class=""></div>
                </a>
                
                <a href="#" class="flex primary-btn px-1 text-black text-[13px] xl:text-base border-white border">
                  Register for Leadership Summit 
                  <img class=" ml-1  xl:h-6" src="../../assets/arrow.svg" alt="">
                </a>
              </div>
              
            </div>
          </nav>
           <div class="lg:hidden z-10" role="dialog" aria-modal="true" v-if="dropdown">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="fixed inset-y-28 z-0"></div>
                <div class="fixed top-[84px] h-100 right-0 z-0 w-full overflow-y-auto bg-black text-white  py-6  sm:ring-1 sm:ring-gray-900/10">
                  <div class="mt-6 flow-root text-[15px]" >
                    <div class=" divide-y divide-white">
                      <div class=" py-6 px-4">
                        <a href="#our-what" :class='{ "mb-10 flex flex-col justify-center text-center  leading-5 nav-link font-normal ": true, "active": isActive("#our-what") }'>
                          Our What
                          <div class=""></div>
                        </a>
                        <a href="#our-theme" :class='{ "mb-10 flex flex-col justify-center text-center  leading-5 nav-link font-normal ": true, "active": isActive("#our-theme") }'>
                          Our Theme
                          <div class=""></div>
                        </a>
                        <a href="#why-attend" :class='{ "mb-10 flex flex-col justify-center text-center  leading-5 nav-link font-normal ": true, "active": isActive("#why-attend") }'>
                          Why Attend?
                          <div class=""></div>
                        </a>
                        <a href="#about-aiesec" :class='{ "mb-10 flex flex-col justify-center text-center  leading-5 nav-link font-normal ": true, "active": isActive("#about-aiesec") }'>
                          About AIESEC
                          <div class=""></div>
                        </a>
                  
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-[#323232] pt-6 px-4">
                      <a href="#" class="text-[15px] px-3 flex justify-center text-center border-white border primary-btn text-black">
                          Register for Leadership Summit 
                          <img class=" ml-1 h-6" src="../../assets/arrow.svg" alt="">
                      </a>
                  </div>
                </div>
            </div>
        </header>

      </div>
     
  </div>
</template>

<script>
export default {
    name:"HeaderView",
    data() {
      return {
        dropdown: false,
        isActiveName: ""
      }
    },
    methods: {
      isActive(hash) {
        if(window.location.href.includes(hash)) { this.isActiveName = hash }
        return window.location.href.includes(hash);
      },
      toggleDropdown(){
        this.dropdown = !this.dropdown
      }
    },
}
</script>

<style scoped lang="scss">
 #header{
  .nav-link{
      font-weight: 300;
      margin-top: 8px;
      &.active,&:hover{
          // color: $primary-color;
          // font-weight: 600;
        div{
          background-color: #ffcc33;
        }
      }
      transition: all 0.4s ease-in;
        div{
              height:2px;
              width:100%;
              margin: 0 auto;
              // background-color: #ffcc33;
              background-color: transparent;
              transition: all 0.4s ease-out;
              margin-top: 6px;
              @media screen and (max-width: 1000px) {
                width: 40%;
              }
              
          }
    
    }
 }
  
</style>