<template>
  <div class="" :class="heightSize">

    <q-card class="my-card shadow-10 vertical-middle">
        <div class="text-white text-center" >
            <div class="card-title" :class="finalBgColor">
                <br>
                <svg id="logo" viewBox="0 0 483 483"
                    style="enable-background:new 0 0 460 460;"
                    xml:space="preserve" width="128px" height="128px"
                    v-html="logoMethod">
                </svg>
                <h5>App_mara</h5>
            </div>
            <div class=" bg-white ">
                <!-- <div class="stacked-label">
                <input required class="full-width" type="email" v-model="email">
                <label>Email</label>
                </div> -->
                <q-input class="q-ma-md" color="grey-8" outlined v-model="form.name" label="nombre">
                  <template v-slot:append>
                      <q-icon color="primary" name="account_box" style="font-size: 1em;" />
                  </template>
                </q-input>


                <q-input class="q-ma-md" color="grey-8" outlined v-model="form.email" label="e-mail">
                  <template v-slot:append>
                      <q-icon color="primary" name="account_box" style="font-size: 1em;" />
                  </template>
                </q-input>
              
                <q-input class="q-ma-md" color="grey-8" outlined :type="isPwd ? 'password' : 'text'" v-model="form.password" label="password">
                  <template v-slot:append>
                      <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                      style="font-size: 1em;"
                      color="primary"
                      />
                  </template>
                </q-input>
                <q-input class="q-ma-md" color="grey-8" outlined :type="isPwd ? 'password' : 'text'" v-model="form.password" label="password">
                  <template v-slot:append>
                      <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                      style="font-size: 1em;"
                      color="primary"
                      />
                  </template>
                </q-input>   

            </div>
          
            <div class="card-actions inline-block vertical-middle q-px-md">
                <q-btn class="bg-primary fit q-px-md"  icon-right="send" :class="buttonClass" @click="login()"> Register </q-btn >
                <!-- <q-btn class="bg-red-7 fit"   :class="buttonClass" @click="login()">Login Google  &nbsp;<img alt="Quasar logo" src="~assets/icon/google.png" width="20"></q-btn >
                <q-btn class="bg-blue-10 fit"  :class="buttonClass" @click="login()"> Login Facebook  &nbsp;   <img alt="Quasar logo" src="~assets/icon/facebook.png" width="20"></q-btn> -->
            </div>
        </div>
    </q-card>

  </div>
</template>

<script >
  import {mapActions} from 'vuex'
  import Vivus from 'vivus'
  import logoData from './logoData'
  import { Platform } from 'quasar'
  export default {
    mounted () {

      this.startAnimation()
    },
    beforeDestroy () {

    },
    computed: {
      heightSize (){
        if (Platform.is.desktop) {
          return 'items-center'
        }
        return ''
      },
      finalBgColor () {
        // return `bg-${this.bgColor}-${this.toneColor}`
        return `bg-primary`
      },
      logoMethod () {
        return logoData[this.logo]
      }
    },
    data () {
      return {
        logos: Object.keys(logoData),
        logo: 'Digitalizer',
        
        isPwd: true,
        form:{
            name:'',
            email: '',
            password: '',
        },
       
        bgColor: 'amber',
        toneColor: 10,
        colors: ['purple', 'blue', 'red', 'green', 'amber'],
        colorTones: ['2', '4', '6', '8', '10'],
        buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],
        buttonClass: 'normal',
        vivus: ''
      }
    },
    methods: {
    ...mapActions('store',['registerUser']),
      login () {
        // this.setLayoutNeeded(true)
        // this.setIsLoginPage(false)

        //this.$router.push('/')
        this.registerUser(this.form)

      },
      startAnimation () {
        this.vivus = new Vivus('logo', {
            duration: 400,
          forceRender: false
          }, function(element) {
           
          }
        )
      }
    }
  }
</script>
<style scoped>
  .card {
    margin-bottom: 0px;
  }
  .card-content {
    min-height: 160px;
  }
  button {
    margin-bottom: 4%;
  }
  h4 {
    font-weight: 300;
  }
</style>
