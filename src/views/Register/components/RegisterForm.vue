<template>
   <div class="">
            <section class="  text-white overflow-x-hidden relative" id="registerbanner">
              <div class="container mx-auto max-w-7xl px-6 xl:px-0    relative ">
                <form @submit.prevent="validateForm()" action="/register" method="post" id="registerForm">
                    <p class="text-base lg:text-xl text-center my-10 font-normal">
                        The registration form takes less than <span class="text-prime font-medium">3 minutes</span> to fill. Let's get to it.
                    </p>

                    <div class="lg:px-60">
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="name" v-model="name" id="" placeholder="Full name">
                            <div class="text-danger">{{ errors?.name }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="email" name="email" v-model="email" id="" placeholder="Email address">
                            <div class="text-danger">{{ errors?.email }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="phone" v-model="phone" id="" placeholder="Phone number">
                            <div class="text-danger">{{ errors?.phone }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="state_residence" v-model="state_residence" id="" placeholder="State of Residence">
                            <div class="text-danger">{{ errors?.state_residence }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <div class="select-input">
                                <select name="occupation" v-model="occupation" id="" @focus="openDropdown()">
                                    <option value="" selected>Occupation</option>
                                    <option value="Student">Student</option>
                                    <option value="Corps Member">Corps Member</option>
                                    <option value="Unemployed">Unemployed</option>
                                    <option value="Employed">Employed</option>
                                </select>
                                <div class="arrow-icon" @click="toggleDropdown()"></div>
                            </div>
                            <div class="text-danger">{{ errors?.occupation }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="school" v-model="school" id="" placeholder="If you're a student, what school?, else fill Nil">
                            <div class="text-danger">{{ errors?.school }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="expectations"   v-model="expectations"  id="" placeholder="What are your expectations from this event?">
                            <div class="text-danger">{{ errors?.expectations }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="sdg_knowledge" v-model="sdg_knowledge" id="" placeholder="What do you know about SDGs 4, 8 and 16?">
                            <div class="text-danger">{{ errors?.sdg_knowledge }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            
                             <div class="select-input">
                                    <select name="join_event" id="" v-model="join_event">
                                        <option value="" selected>How  will you join the event?</option>
                                        <option value="Onsite">Onsite</option>
                                        <option value="Online">Online</option>
                                    </select>
                                </div>
                            <div class="text-danger">{{ errors?.join_event }}</div>
                        </div>
                        <div class="form-inputs my-10 lg:my-20">
                            <input type="text" name="hear_about_event" v-model="hear_about_event" id="" placeholder="How did you hear about this event?">
                            <div class="text-danger">{{ errors?.hear_about_event }}</div>
                        </div>

                        <div class="form-inputs my-10 lg:my-20 mx-auto fcd max-w-sm">
                            <button type="submit" class="flex justify-center items-center primary-btn border border-white text-black font-semibold text-3xl  w-full" :disabled="buttonText != 'Submit'" style="font-family:'Clash Display', sans-serif !important;">
                                <div class="">
                                    {{ buttonText }}
                                </div>
                                <svg class="spinner animate-spin ms-2" v-if="buttonText != 'Submit'" viewBox="0 0 50 50">
                                    <circle class=" path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                                </svg>
                            </button>
                        </div>

                    </div>
                </form>
              </div>
          
            </section>
       
        </div>
</template>

<script>
import Notify from 'simple-notify'
// import { useField, useForm } from 'vee-validate';
// import { toTypedSchema } from '@vee-validate/zod';
// import * as zod from 'zod'

// const validationSchema = toTypedSchema(
//     zod.object({
//         email: zod.string().min(1,{ message: 'This field is required' }).email({ message: 'Must be a valid email' }),
//         name: zod.string().min(1, { message: 'This field is required' }),
//         phone: zod.string().min(1, { message: 'This field is required' }),
//         state_residence: zod.string().min(1, { message: 'This field is required' }),
//         occupation: zod.string().min(1, { message: 'This field is required' }),
//         // school: zod.string().min(1, { message: 'This field is required' }),
//         expectations: zod.string().min(1, { message: 'This field is required' }),
//         sdg_knowledge: zod.string().min(1, { message: 'This field is required' }),
//         join_event: zod.string().min(1, { message: 'This field is required' }),
//         hear_about_event: zod.string().min(1, { message: 'This field is required' }),
//     })
// );


export default {
    
    name: "RegisterForm",
    data(){
        return{
            
            email: "",
            name: "",
            phone: "",
            occupation:"",
            state_residence: "",
            school: "",
            expectations: "",
            sdg_knowledge: "",
            join_event: "",
            hear_about_event: "",
            errors: {
                email: "",
                name: "",
                phone: "",
                occupation: "",
                school: "",
                state_residence: "",
                expectations: "",
                sdg_knowledge: "",
                join_event: "",
                hear_about_event: "",
            },
            buttonText : "Submit",
            isOpen: false
        }
    },
    mounted(){
        // console.log("Work")
    },
    setup(){
        // const { handleSubmit, errors } = useForm({
        //     validationSchema,
        // });

        // const { value: email } = useField('email');
        // const { value: name } = useField('name');
        // const { value: phone } = useField('phone');
        // const { value: state_residence } = useField('state_residence');
        // const { value: occupation } = useField('occupation');
        // // const { value: school } = useField('school');
        // const { value: expectations } = useField('expectations');
        // const { value: sdg_knowledge } = useField('sdg_knowledge');
        // const { value: join_event } = useField('join_event');
        // const { value: hear_about_event } = useField('hear_about_event');

        // const submitForm = handleSubmit((data) => {
        //     // Handle form submission logic here using the 'data' object
        //     console.log(data);
        // });
    },
    created(){
        // const { value: email } = useField('email')
        // this.notification("success","Success","Works")
    },
    methods:{
       submitForm(){
                let formData = {
                    email: this.email,
                    name: this.name,
                    phone: this.phone,
                    occupation: this.occupation,
                    state_residence: this.state_residence,
                    school: this.school,
                    expectations: this.expectations,
                    sdg_knowledge: this.sdg_knowledge,
                    join_event: this.join_event,
                    hear_about_event: this.hear_about_event,
                }

                // console.log(formData);
                // return false;
                let form = document.getElementById("registerForm");
                fetch('https://ainbackend.fly.dev/api/register_delegate', {
                    method: 'POST',
                    // mode:"same-origin",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',  // Set the content type to JSON
                    },
                    body: JSON.stringify(formData), // Convert the data to JSON format
                })
                .then(response => {
                    if (!response.ok) {
                        // throw new Error('Network response was not ok');
                        // this.notification("error", "Error", "This email already exists with us");
                        this.buttonText = "Submit";
                    }
                    return response.json(); // Assuming the response is JSON
                })
                .then(data => {
                    // Handle the data retrieved from the API
                    this.email = ""
                    if (data && (data.detail === "registration success")) {
                        this.notification("success", "Success", "Thank you we will be with you shortly");
                        form.reset();
                        this.buttonText = "Submit"
                    } else if (data && (data.detail === "already registered")) {
                        this.notification("error", "Error", "This email already exists with us")
                        this.loading = false;
                    }
                })
                .catch(error => {
                    // Handle errors that occurred during the fetch
                    console.error('There was a problem with the fetch operation:', error);
                    this.notification("error", "Error", "There was a problem with the fetch operation.");
                    this.buttonText = "Submit"
                });
       },
       validateForm(){
        // let form = document.getElementById("registerForm");
            function isValidEmail(email) {
                // Regular expression for a valid email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            
        //  let fields = form.querySelectorAll(".form-inputs");
            let check = true
            Object.keys(this.errors).forEach((el) => {
                if (this[el] === '') {
                    this.errors[el] = 'This field is required';
                    check = false;
                }else if(this[el] !== ''){
                    this.errors[el] = '';
                }
            });
            
            if(this.email !== ""){
                if (!isValidEmail(this.email)) {
                    this.errors.email="This email is not valid.";
                    check = false;
                }
            }

            if (check == true) {
                 this.submitForm();
                 this.buttonText = "Loading"
                // console.log("gun");
                //  event.preventDefault();
            }else{
                this.notification("error", "Error", "There was an error please check your fields")
            }
        
       },
        notification(type, title, message) {
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
        },
         openDropdown() {
            this.isOpen = true;
        },
        closeDropdown() {
            this.isOpen = false;
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.$refs.select.focus();
            }
        }
      
    }
}
</script>

<style scoped lang="scss">
    input,select{
        width:100%;
        padding: 24px 32px;
        border:3px solid #ffffff;
        border-radius:8px;
        background: transparent;
        color: #ffffff;
        font-size: 20px;
        &::placeholder{
            color: #909090;
        }
        &:focus{
            outline: none;
        }
        @media screen and (max-width:600px) {
            padding: 20px 12px;
            font-size: 16px;
            border-width: 1px;
        }

    }
    .select-input{
        position: relative;
        select{
            appearance: none; /* Disable default appearance */
            -webkit-appearance: none; /* For older versions of Chrome/Safari */
            -moz-appearance: none;
            &::-ms-expand {
                display: none;
            }
            &:focus{
                outline: none;
            }
            @media screen and (max-width:1000px) {
                width: 100%;
            }
            &:-internal-list-box{
                background-color: #000000;
            }
            option{
                background: black !important;
                &:first-child:checked{
                    color: #909090 !important;
                }
                &:focus{
                    background-color: var(--primary-color);
                }
                
            }

        }
        // &:after {
        // content: url('../../../assets/downArrow.png');
        //     // font-size: 19px; /* Adjust font size as needed */
        //     color: #ffffff; /* Arrow color */
        //     position: absolute;
        //     top: 55%;
        //     right: 45px;
        //     transform: translateY(-50%) ;
        //     @media screen and (max-width:1000px) {
        //         font-size: 12px;
        //         right: 15%;
        //         width: 10px;
        //         height: auto;
        //     }
        // }
         .arrow-icon {
            content: url('../../../assets/downArrow.png');
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
            width: 24px; /* Adjust width and height according to your icon */
            height: 24px;
            cursor: pointer;
            z-index: 1;
        }
    }
    .text-danger{
        color: #eb0d0d;
        margin-block: 10px;
    }
</style>
