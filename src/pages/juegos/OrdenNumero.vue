<template>
    <q-page id="app" class="app container">
            <!-- <button @click="random_element(items)">saf</button>  -->
        <h3 class="q-ma-xs">Juego para ordenar numeros</h3>
        <div class="">
            <div class="q-gutter-y-md">
                <q-card>
                <q-tabs
                    v-model="tab"
                    dense 
                    inline-label
                    outside-arrows
                    mobile-arrows
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                >
                    <q-tab name="numeros1" label="Numeros 0-10" />
                    <q-tab name="numeros2" label="Numeros 10-19" />
                </q-tabs>
        
                <q-separator />
        
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="numeros1">
                    <div class="text-h6 text-center">Numeros 0-10</div>
                    <!-- <h3 class="q-ma-xs">Juego Orden Numero</h3> -->
                    <div class="row justify-center">
                        <div class="col-4 col-md-4 col-xs-10" >
                               
                        <div class="q-pa-xs " v-if="random==true">
                            <q-list bordered separator>
                            <draggable v-model="items1" ghost-class="ghost" @end="onEnd">
                                <transition-group type="transition" name="flip-list" >
                                <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in items1" :key="item.id">
                                    <div v-if="item.check != null">
                                        <div v-if="item.check==true">
                                            <q-item-section avatar class="texto-borde">
                                                <q-icon color="green" name="check_circle" />
                                            </q-item-section>
                                        </div>
                                        <div v-else>
                                            <q-item-section avatar class="texto-borde">
                                                <q-icon color="red" name="cancel" />
                                            </q-item-section>
                                        </div>
                                    </div>
                                    <div v-else>
                                            <q-item-section avatar>
                                                    <q-icon color="white" name="help" />
                                            </q-item-section>
                                    </div>
            
                                    <q-item-section class="text-white text-center text-bold ">
                                       {{item.name}}
                                    </q-item-section>
                                </q-item>
                                
                                </transition-group>
                                </draggable>
                            </q-list>
                        </div>
            
                        <div class="q-pa-xs " v-else>
                                <q-list bordered separator>
                                <draggable v-model="items1" ghost-class="ghost" @end="onEnd">
                                    <transition-group type="transition" name="flip-list" >
                                    <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in original1" :key="item.id">
                                        <div v-if="item.check != null">
                                            <div v-if="item.check==true">
                                                <q-item-section avatar class="texto-borde">
                                                    <q-icon color="green" name="check_circle" />
                                                </q-item-section>
                                            </div>
                                            <div v-else>
                                                <q-item-section avatar class="texto-borde">
                                                    <q-icon color="red" name="cancel" />
                                                </q-item-section>
                                            </div>
                                        </div>
                                        <div v-else>
                                                <q-item-section avatar>
                                                        <q-icon color="white" name="help" />
                                                </q-item-section>
                                        </div>
                
                                        <q-item-section class="text-white text-center text-bold ">
                                           {{item.id}} {{item.name}}
                                        </q-item-section>
                                    </q-item>
                                    
                                    </transition-group>
                                    </draggable>
                                </q-list>
                            </div>
                
            
                               
                        </div>
                    </div>
                    <div class="row justify-center q-gutter-md q-ma-xs">
                        <q-btn outline style="color: blue;" label="Otra vez" @click="try_again(items1)" />
                        <q-btn outline style="color: blue;" label="Comparar" @click="comparar_elementos(items1,original1)" />
                        <q-btn outline style="color: blue;" label="Original" @click="ver_resultados(original1)" />
                    </div>
                    </q-tab-panel>
        
                    <q-tab-panel name="numeros2">
                    <div class="text-h6 text-center">Numeros 10-19</div>
                    <!-- <h3 class="q-ma-xs">Juego Orden Numero</h3> -->
                        <div class="row justify-center">
                            <div class="col-4 col-md-4 col-xs-10" >
                                
                            <div class="q-pa-xs " v-if="random==true">
                                <q-list bordered separator>
                                <draggable v-model="items2" ghost-class="ghost" @end="onEnd">
                                    <transition-group type="transition" name="flip-list" >
                                    <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in items2" :key="item.id">
                                        <div v-if="item.check != null">
                                            <div v-if="item.check==true">
                                                <q-item-section avatar class="texto-borde">
                                                    <q-icon color="green" name="check_circle" />
                                                </q-item-section>
                                            </div>
                                            <div v-else>
                                                <q-item-section avatar class="texto-borde">
                                                    <q-icon color="red" name="cancel" />
                                                </q-item-section>
                                            </div>
                                        </div>
                                        <div v-else>
                                                <q-item-section avatar>
                                                        <q-icon color="white" name="help" />
                                                </q-item-section>
                                        </div>

                                        <q-item-section class="text-white text-center text-bold ">
                                        {{item.name}}
                                        </q-item-section>
                                    </q-item>
                                    
                                    </transition-group>
                                    </draggable>
                                </q-list>
                            </div>

                            <div class="q-pa-xs " v-else>
                                    <q-list bordered separator>
                                    <draggable v-model="items2" ghost-class="ghost" @end="onEnd">
                                        <transition-group type="transition" name="flip-list" >
                                        <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in original2" :key="item.id">
                                            <div v-if="item.check != null">
                                                <div v-if="item.check==true">
                                                    <q-item-section avatar class="texto-borde">
                                                        <q-icon color="green" name="check_circle" />
                                                    </q-item-section>
                                                </div>
                                                <div v-else>
                                                    <q-item-section avatar class="texto-borde">
                                                        <q-icon color="red" name="cancel" />
                                                    </q-item-section>
                                                </div>
                                            </div>
                                            <div v-else>
                                                    <q-item-section avatar>
                                                            <q-icon color="white" name="help" />
                                                    </q-item-section>
                                            </div>
                    
                                            <q-item-section class="text-white text-center text-bold ">
                                            {{item.id}} {{item.name}}
                                            </q-item-section>
                                        </q-item>
                                        
                                        </transition-group>
                                        </draggable>
                                    </q-list>
                                </div>
                    

                                
                            </div>
                        </div>
                        <div class="row justify-center q-gutter-md q-ma-xs">
                            <q-btn outline style="color: blue;" label="Otra vez" @click="try_again(items2)" />
                            <q-btn outline style="color: blue;" label="Comparar" @click="comparar_elementos(items2,original2)" />
                            <q-btn outline style="color: blue;" label="Original" @click="ver_resultados(original2)" />
                        </div>
                    </q-tab-panel>
        
                </q-tab-panels>
                </q-card>
            </div>
        <!-- ============================================================== -->
        </div>

        <hr>
        <pre>
        {{$data}}
        </pre>
    </q-page>
</template>

<script>
import draggable from 'vuedraggable'

export default{
    name: 'App1',
    components:{
        draggable
    },
 
mounted() {
    this.random_element(this.items1)
    this.random_element(this.items2)
},
data () {
    return {
        tab:"numeros1",
        items1:[
            {name:"Ch’usa", id:0, color:"bg-purple",check:null},
            {name:"Kimsa", id:3, color:"bg-lime",check:null},
            {name:"Maya", id:1, color:"bg-indigo",check:null},
            {name:"Phisqa", id:5, color:"bg-brown",check:null},
            {name:"Pusi", id:4, color:"bg-teal",check:null},
            {name:"Paya", id:2,color:"bg-cyan",check:null},
            {name:"Suxta", id:6, color:"bg-deep-orange",check:null},
            {name:"Kimsaqallqu", id:8, color:"bg-deep-purple",check:null},
            {name:"Paqallqu", id:7, color:"bg-blue-grey",check:null},
            {name:"Tunka", id:10, color:"bg-light-green",check:null},
            {name:"Llätunka", id:9, color:"bg-light-blue",check:null},
        ],
        items2:[
            {color:"bg-light-green", check:null, name:"tunka", id:10},
            {color:"bg-blue-grey", check:null, name:"tunka-mayani", id:11},
            {color:"bg-deep-purple", check:null, name:"tunka-payani", id:12},
            {color:"bg-deep-orange", check:null, name:"tunka-kimsani", id:13},
            {color:"bg-cyan", check:null, name:"tunka-pusini", id:14},
            {color:"bg-teal", check:null, name:"tunka-phiscani", id:15},
            {color:"bg-brown", check:null, name:"tunka-suxtani", id:16},
            {color:"bg-indigo", check:null, name:"tunka-paqalquni", id:17},
            {color:"bg-lime", check:null, name:"tunka-kimsaqalquni", id:18},
            {color:"bg-purple", check:null, name:"tunka-llatunkani", id:19}
        ],
        
        original1:[
            {name:"Ch’usa", id:0, color:"bg-purple",check:true},
            {name:"Maya", id:1, color:"bg-indigo",check:true},
            {name:"Paya", id:2,color:"bg-cyan",check:true},
            {name:"Kimsa", id:3, color:"bg-grey-8",check:true},
            {name:"Pusi", id:4, color:"bg-teal",check:true},
            {name:"Phisqa", id:5, color:"bg-brown",check:true},
            {name:"Suxta", id:6, color:"bg-deep-orange",check:true},
            {name:"Paqallqu", id:7, color:"bg-blue-grey",check:true},
            {name:"Kimsaqallqu", id:8,color:"bg-deep-purple",check:true},
            {name:"Llätunka", id:9, color:"bg-light-blue",check:true},
            {name:"Tunka", id:10, color:"bg-light-green",check:true},
        ],
        original2:[
            {color:"bg-light-green", check:true, name:"tunka", id:10},
            {color:"bg-blue-grey", check:true, name:"tunka-mayani", id:11},
            {color:"bg-deep-purple", check:true, name:"tunka-payani", id:12},
            {color:"bg-deep-orange", check:true, name:"tunka-kimsani", id:13},
            {color:"bg-cyan", check:true, name:"tunka-pusini", id:14},
            {color:"bg-teal", check:true, name:"tunka-phiscani", id:15},
            {color:"bg-brown", check:true, name:"tunka-suxtani", id:16},
            {color:"bg-indigo", check:true, name:"tunka-paqalquni", id:17},
            {color:"bg-lime", check:true, name:"tunka-kimsaqalquni", id:18},
            {color:"bg-purple", check:true, name:"tunka-llatunkani", id:19}
        ],
        oldIndex:'',
        newIndex:'',
        element:[],
        random:true
    }
},
methods: {
    onEnd(evt){
        console.log(evt)
        this.oldIndex = evt.oldIndex;
        this.newIndex = evt.newIndex;
    },

    random_element(items){
        //s console.log(items);
        let elemento = items;
        let newIndex; 
        let temp;
        for(let i=0;i<items.length-1;i++){
            newIndex = Math.floor(Math.random() * (items.length));
            temp = items[i];
            items[i]=items[newIndex];
            items[newIndex]=temp;
            
        }
        this.element.push(items)
        this.element = []
    },

    comparar_elementos(items,original){
        
            console.log(items[0]);
            console.log(original);
            // if(items==original){
            //     console.log("son iguales");
            // }
            // else{
            //     console.log("no son iguales");
            //     console.log(items[1]);
            // }
            for(var i=0;i<items.length;i++){
                if(JSON.stringify(items[i].id)===JSON.stringify(original[i].id)){
                    
                    console.log("el card "+i+" es igual")
                    items[i].check = true
                    console.log('check :', items[i].check )
                }
                else{
                    console.log("el card "+i+" no es igual")
                    items[i].check = false
                    console.log('check :', items[i].check )
                }

            }
    },
    ver_resultados(original){
        for(let i=0;i<original.length;i++){
            original[i].check=true
            
            // console.log(this.element.push(original))
        }
        // console.log(this.element.push(original))
        this.element.push(original)
        this.element = []
        this.random=false
    },
    try_again(items){
        this.random_element(items);
        for(let i=0;i<items.length;i++){
            items[i].check=null;
        }
        this.random=true
        
    }
},


}
</script>

<style lang="scss" scoped>
.sortable{
    width:100%;
    background: red;
    cursor: move;
    display: inline-block;
}
.flip-list-move {
    transition: transform 0.5s;
}
.ghost{
    border-left: 6px solid black;
    
}
.texto-borde {
  -webkit-text-stroke: 1.5px white;
}


</style>

  