<template>
  <footer class="py-4 border-b-2 h-auto bg-black text-white" id="footer">
    <div class="container mx-auto max-w-7xl px-6 xl:px-0 py-7">
        <div class="flex flex-col justify-between lg:flex-row sm:gap-x-28 xl:gap-x-40">
          <div class=" my-4">
            <div class="flex  lg:flex-1 col-span-2">
                <a href="/" class=" flex flex-row items-center fl text-base font-extrabold">
                  <img class="h-18 xl:h-12 w-auto mr-3 " src="../../assets/logo.svg" alt=""> 
                  <span class="hidden xl:block" >Leadership Summit</span>  
                  <span class="mr-1 ml-2 font-light text-grey hidden xl:block"> |</span>
                  <span class=" font-medium hidden xl:block text-ablue">2023</span>
                </a>
              </div>
          </div>
          <div class="flex flex-col lg:flex-row sm:gap-x-6 xl:gap-x-12 ">
            <div class="my-4 lg:max-w-xs">
              <p class="text-[18px] fl text-[#D8D7D7] mb-2" >Address</p>
              <p class="text-grey font-light">
                6th floor Co Creation Hub, 294 Herbert Macaulay Way,Sabo Yaba, Lagos
              </p>
            </div>
            
            <div class="my-4 lg:max-w-xs">
              <p class="text-[18px] fl text-[#D8D7D7] mb-2" >About Us</p>
                <ul>
                  <li class="my-1" >
                      <a href="" class="flex text-decoration-none text-grey  font-light">
                         AIESEC in Nigeria
                        <svg width="20" height="20" viewBox="0 0 19 19" fill="none" class="ml-1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.77459 12.1441L12.9773 5.94141" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                  </li>
                  <li class="my-1" >
                      <a href="" class="flex text-decoration-none text-grey  font-light">
                         Blog
                         <svg width="20" height="20" viewBox="0 0 19 19" fill="none" class="ml-1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.77459 12.1441L12.9773 5.94141" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                      </a>
                  </li>
                
                </ul>
            </div>
            <div class="my-4 lg:max-w-xs">
              <p class="text-[18px] fl text-[#D8D7D7] mb-2" >Contact</p>
                <ul>
                  <li class="my-1" >
                      <a href="" class="flex text-decoration-none text-grey  font-light">
                         Email
                        <svg width="20" height="20" viewBox="0 0 19 19" fill="none" class="ml-1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.77459 12.1441L12.9773 5.94141" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                  </li>
                  <li class="my-1" >
                      <a href="" class="flex text-decoration-none text-grey  font-light">
                         Phone
                         <svg width="20" height="20" viewBox="0 0 19 19" fill="none" class="ml-1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.77459 12.1441L12.9773 5.94141" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843" stroke="#ffffff" stroke-width="0.974661" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                      </a>
                  </li>
                
                </ul>
            </div>
            <div class="my-4 lg:max-w-xs">
              <p class="text-[18px] fl text-[#D8D7D7] mb-2" >Socials</p>
                <div class="flex gap-x-4">
                  <a href="" class="text-decoration-none">
                    <img src="../../assets/Socials/LinkedIn.svg" class="w-auto h-5" alt="">
                  </a>
                  <a href="" class="text-decoration-none">
                    <img src="../../assets/Socials/X.svg" class="w-auto h-5" alt="">
                  </a>
                  <a href="" class="text-decoration-none">
                    <img src="../../assets/Socials/Instagram.svg" class="w-auto h-5" alt="">
                  </a>
                  <a href="" class="text-decoration-none">
                    <img src="../../assets/Socials/TikTok.svg" class="w-auto h-5" alt="">
                  </a>

                </div>
            </div>
          </div>
        </div>
    </div>
    <hr class="border-[#4d4d4d]">
    <div class="container mx-auto max-w-6xl px-4 lg:px-0">

      <div class=" pt-4">
        <p class="text-[#4d4d4d] text-center lg:text-start mb-2">© AIESEC in Nigeria 2023</p>
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:"FooterView",
    data(){
      return{
        email:""
      }
    }
}
</script>

<style scoped lang="scss">
  #footer{
    .register-input{
      border-radius: 16px;
      border: 1px solid #000000;
      background: rgba(221, 226, 234, 0.67);
      padding: 6px;
      input{
        border: none;
        background: transparent;
        color:#000000;
        width: 100%;
        padding-inline: 10px;
        &::placeholder{
          color: #969696;
          font-family: Lato;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 125% */
        }
      }
    }

  }
</style>