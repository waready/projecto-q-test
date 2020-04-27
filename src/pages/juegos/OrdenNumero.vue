<template>
    <q-page id="app" class="app container">
            <!-- <button @click="random_element(items)">saf</button>  -->
        <h3 class="q-ma-xs">Juego Orden Numero</h3>
        <div class="row justify-center">
            <div class="col-4 col-md-4 col-xs-10" >
           
                    <!-- <q-card class="my-card sortable q-ma-xs" :id="item.id" v-for="item in items" :key="item.id">
                        <q-card-section :class="item.color" class="text-white">
                            <div class="text-h8">{{item.name}}</div>
                            <div class="text-subtitle5">{{item.id}}</div>
                        </q-card-section>
                        <div v-if="item.check != null">
                            <div v-if="item.check==true">
                                bien
                            </div>
                            <div v-else>
                                mal
                            </div>
                        </div>
                    </q-card> -->
                   
            <div class="q-pa-xs " v-if="random==true">
                <q-list bordered separator>
                <draggable v-model="items" ghost-class="ghost" @end="onEnd">
                    <transition-group type="transition" name="flip-list" >
                    <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in items" :key="item.id">
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

            <div class="q-pa-xs " v-else>
                    <q-list bordered separator>
                    <draggable v-model="items" ghost-class="ghost" @end="onEnd">
                        <transition-group type="transition" name="flip-list" >
                        <q-item style="min-height: 1px" :class="item.color" clickable v-ripple v-for="item in original" :key="item.id">
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
            <q-btn outline style="color: blue;" label="Otra vez" @click="try_again(items)" />
            <q-btn outline style="color: blue;" label="Comparar" @click="comparar_elementos(items,original)" />
            <q-btn outline style="color: blue;" label="Original" @click="ver_resultados(original)" />
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
    this.random_element(this.items)
},
data () {
    return {
        items:[
            {name:"hola", id:0, color:"bg-purple",check:null},
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
        original:[
            {name:"hola", id:0, color:"bg-purple",check:true},
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

<style lang="scss">
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
  