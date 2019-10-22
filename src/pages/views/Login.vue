<template>
  <div class="q-pa-lg flex justify-center full-height" :class="heightSize">
    <!-- <div class="row gt-sm">
      <div class="row">
        <div class="list">
          <label class="item" v-for="color in colors">
            <div class="item-primary">
              <q-radio v-model="bgColor" :val="color"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{color}}
            </div>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="list fit">
          <label class="item" v-for="tone in colorTones">
            <div class="item-primary">
              <q-radio v-model="toneColor" :val="tone"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{tone}}
            </div>
          </label>
        </div>
      </div>
    </div> -->
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

                <q-input class="q-ma-md" color="orange" outlined v-model="email" label="e-mail">
                  <template v-slot:append>
                      <q-icon color="blue-9" name="account_box" style="font-size: 2em;" />
                  </template>
                </q-input>
              
                <q-input class="q-ma-md" color="orange" outlined :type="isPwd ? 'password' : 'text'" v-model="email" label="password">
                  <template v-slot:append>
                      <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                      style="font-size: 1.7em;"
                      color="blue-9"
                      />
                  </template>
                </q-input>

                <!-- <div class="stacked-label">
                <input required class="full-width" type="password" v-model="password">
                <label>Password</label>
                </div> -->
            </div>
            <button class="teal raised full-width " @click="startAnimation()">Animate !</button>
            <div class="card-actions inline-block vertical-middle">
                <q-btn class="bg-teal fit"  icon-right="send" :class="buttonClass" @click="login()">Login</q-btn >
                <q-btn class="bg-red-7 fit"   :class="buttonClass" @click="login()">Login Google  &nbsp;<img alt="Quasar logo" src="~assets/icon/google.png" width="20"></q-btn >
                <q-btn class="bg-blue-10 fit"  :class="buttonClass" @click="login()"> Login Facebook  &nbsp;   <img alt="Quasar logo" src="~assets/icon/facebook.png" width="20"></q-btn>
            </div>
        </div>
    </q-card>
  

    <!-- <div class="row gt-sm">
      <div class="row ">
        <div class="list fit">
          <label class="item" v-for="bClass in buttonClasses">
            <div class="item-primary">
              <q-radio v-model="buttonClass" :val="bClass"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{bClass}}
            </div>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="list">
          <label class="item" v-for="logoName in logos">
            <div class="item-primary">
              <q-radio v-model="logo" :val="logoName"></q-radio>
            </div>
            <div class="item-content capitalize">
              {{logoName}}
            </div>
          </label>
          <button class="teal raised full-width " @click="startAnimation()">Animate !</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script >
  /* eslint-disable */
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
        return `bg-${this.bgColor}-${this.toneColor}`
      },
      logoMethod () {
        return logoData[this.logo]
      }
    },
    data () {
      return {
        logos: Object.keys(logoData),
        logo: 'Digitalizer',
        email: 'quasar@admin.com',
        isPwd: true,
        password: '123456',
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
      login () {
        this.setLayoutNeeded(true)
        this.setIsLoginPage(false)
        this.$router.push('/')
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
