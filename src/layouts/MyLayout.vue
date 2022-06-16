  
<template>
  <q-layout view="lHh Lpr fFf" class="bg-grey-1">

    <q-header elevated class="primary" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title v-if="!$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <span class="q-ml-sm text-white">App_Mara</span>
        </q-toolbar-title>

        <q-space />

        <!-- boton para drowdow para saber que subir -->
        <!-- <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="white" icon="add" no-caps label="Create" class="q-ml-sm q-px-md">
          <q-menu anchor="top right" self="top right">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">Create New</q-item-section>
              </q-item>
              <q-item v-for="menu in createMenu" :key="menu.text" clickable v-close-popup aria-hidden="true">
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>
                <q-item-section>{{ menu.text }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->

        <!-- <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="white" icon="cloud_upload" no-caps label="Upload" class="q-ml-sm q-px-md" /> -->

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          
          <!-- <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn> -->

           <q-btn
             v-if="!userDetails.email" 
             to="/login"
             class="absolute-right q-pr-sm"
             icon="account_circle"
             no-caps
             flat
             dense
             label="Ingresar">

             </q-btn>


          <q-btn v-else round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
             <!-- <q-toolbar-title>{{userDetails.email}}</q-toolbar-title>  -->

            
             <q-btn-dropdown color="primary" :label="userDetails.email">
                <q-list>
                  <q-item clickable v-close-popup >
                    <q-item-section>
                      <q-item-label @click="logoutUser">Salir</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>          
          </q-btn>
         
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar bg-primary">
          <q-toolbar-title class="row items-center text-white ">
            <span class="q-ml-sm" to="/juegos">Aprender Aymara</span>
          </q-toolbar-title>
        </q-toolbar>

         <q-separator class="q-my-xs" />

        <q-list padding class="bg-grey-3">
          <q-item v-for="link in links1" :key="link.text" clickable class="GPL__drawer-item" :to="link.url">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>

              <q-item-label >{{ link.text }} </q-item-label>
              
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" clickable class="GPL__drawer-item" :to="link.url">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links3" :key="link.text" clickable class="GPL__drawer-item" :to="link.url">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <!-- <q-item clickable class="GPL__drawer-item GPL__drawer-item--storage">
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section top>
              <q-item-label>Storage</q-item-label>
              <q-linear-progress :value="storage" class="q-my-sm" />
              <q-item-label caption>2.6 GB of 15 GB</q-item-label>
            </q-item-section>
          </q-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="">
      
      <router-view />
 
    </q-page-container>

    
    <q-footer elevated class="bg-positive text-white">
      <q-toolbar class="justify-center">  
        <q-tabs
          indicator-color="white"
          switch-indicator
          active-bg-color="primary"
          class=""
        >
          <q-route-tab
            v-for="item in links1"
            :key="item.text"
            :name="item.icon" 
            :icon="item.icon"
            :to="item.url"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
    
    
  </q-layout>
</template>

<script>

import{mapState,mapActions} from 'vuex'
export default {
  name: 'GooglePhotosLayout',
  data () {
    return {
      leftDrawerOpen: false,
      tab: 'home',
      search: '',
      storage: 0.26,
      links1: [
       { icon:  'home', text: 'Inicio', url:"/"  },
        { icon: 'g_translate', text: 'Aymara y vocabulario', url:"vocabulario" },
        { icon: 'translate', text: 'Gramatica', url:"gramatica" },
        // { icon: 'record_voice_over', text: 'Pronunciación', url:"frases" },
        { icon: 'videogame_asset', text: 'Juegos', url:"juegos" }
      ],
      links2: [
        { icon: 'color_lens', text: 'Colores',url:"colores" },
        { icon: 'format_list_numbered_rtl', text: 'Numeros',url:"numeros" },
        { icon: 'access_time', text: 'Tiempo', url:"tiempo" }
      ],
      links3: [
        
        { icon: 'fingerprint', text: 'Login',url:'login' },
        { icon: 'verified_user', text: 'Register',url:'' },
        { icon: 'settings', text: 'Settings',url:'' }
      ],
      createMenu: [
        { icon: 'photo_album', text: 'Album' },
        { icon: 'people', text: 'Shared Album' },
        { icon: 'movie', text: 'Movie' },
        { icon: 'library_books', text: 'Animation' },
        { icon: 'dashboard', text: 'Collage' },
        { icon: 'book', text: 'Photo book' }
      ]
    }
  },
  computed:{
    ...mapState('store',['userDetails']),

  },
  methods:{
    ...mapActions('store',['logoutUser']),
  }
}
</script>

<style lang="sass">
  .GPL
    &__toolbar
      height: 64px
    &__toolbar-input
      width: 35%
    &__drawer-item
      line-height: 24px
      margin-right: 12px
      .q-item__section--avatar
        padding-left: 12px
        .q-icon
          color: #000
      .q-item__label:not(.q-item__label--caption)
        color: #000
        letter-spacing: .01785714em
        font-size: .875rem
        font-weight: 500
        line-height: 1.25rem        
      &--storage
        border-radius: 0
        margin-right: 0
        padding-top: 24px
        padding-bottom: 24px
    &__drawer-item:hover
      background-color:#9c0000
      transition: background .5s
      .q-item__section--avatar
        .q-icon
          color: white
      .q-item__label:not(.q-item__label--caption)
        color: white
    &__side-btn
      &__label
        font-size: 12px
        line-height: 24px
        letter-spacing: .01785714em
        font-weight: 500
    @media (min-width: 1024px)
      &__page-container
        padding-left: 94px
</style>