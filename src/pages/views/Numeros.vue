<template>
    
    <div class="q-pa-md">
        <h4>Los numeros del 0 - 100</h4>
        <q-table
        title="Los Numeros en Aymara"
        :data="data"
        :columns="columns"
        row-key="id"
        
        color="amber"
      />
    </div>
  </template>
<script>
export default {
    data(){
        return{
            columns: [
            { name: 'numeros', align: 'center', label: 'Numeros', field: 'id', sortable: true },
            { name: 'aymara', align: 'center',label: 'Numeros en Aymara', field: 'name'},
            ],
            data: [
            {name:"ch’usa, Muruq’u, Muyuga", id:0, color:"bg-purple",check:null},
            {name:"Mayaaaaa", id:1, color:"bg-indigo",check:null},
            {name:"Paya", id:2,color:"bg-cyan",check:null},
            {name:"Kimsa", id:3, color:"bg-lime",check:null},
            {name:"Pusi", id:4, color:"bg-teal",check:null},
            {name:"Phisqa", id:5, color:"bg-brown",check:null},
            {name:"Suxta", id:6, color:"bg-deep-orange",check:null},
            {name:"Paqallqu", id:7, color:"bg-blue-grey",check:null},
            {name:"Kimsaqallqu", id:8, color:"bg-deep-purple",check:null},
            {name:"Llätunka", id:9, color:"bg-light-blue",check:null},
            

            {name:"tunka", id:10, color:"bg-light-blue",check:null},
            {name:"tunka-mayani", id:11, color:"bg-light-blue",check:null},
            {name:"tunka-payani", id:12, color:"bg-light-blue",check:null},
            {name:"tunka-kimsani", id:13, color:"bg-light-blue",check:null},
            {name:"tunka-pusini", id:14, color:"bg-light-blue",check:null},
            {name:"tunka-phiscani", id:15, color:"bg-light-blue",check:null},
            {name:"tunka-suxtani", id:16, color:"bg-light-blue",check:null},
            {name:"tunka-paqalquni", id:17, color:"bg-light-blue",check:null},
            {name:"tunka-kimsaqalquni", id:18, color:"bg-light-blue",check:null},
            {name:"tunka-llatunkani", id:19, color:"bg-light-blue",check:null},
            {name:"pätunka", id:20, color:"bg-light-blue",check:null},

            {name:"pätunka-mayani", id:21, color:"bg-light-blue",check:null},
            {name:"pätunka-payani", id:22, color:"bg-light-blue",check:null},
            {name:"pätunka-kimsani", id:23, color:"bg-light-blue",check:null},
            {name:"pätunka-pusini", id:24, color:"bg-light-blue",check:null},
            {name:"pätunka-phiscani", id:25, color:"bg-light-blue",check:null},
            {name:"pätunka-suxtani", id:26, color:"bg-light-blue",check:null},
            {name:"pätunka-paqalquni", id:27, color:"bg-light-blue",check:null},
            {name:"pätunka-kimsaqalquni", id:28, color:"bg-light-blue",check:null},
            {name:"pätunka-llatunkani", id:29, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka", id:30, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-mayani", id:31, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-payani", id:32, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-kimsani", id:33, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-pusini", id:34, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-phiscani", id:35, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-suxtani", id:36, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-paqalquni", id:37, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-kimsaqalquni", id:38, color:"bg-light-blue",check:null},
            {name:"kimsa-tunka-llatunkani", id:39, color:"bg-light-blue",check:null},
            {name:"pusi-tunka", id:40, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-mayani", id:41, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-payani", id:42, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-kimsani", id:43, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-pusini", id:44, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-phiscani", id:45, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-suxtani", id:46, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-paqalquni", id:47, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-kimsaqalquni", id:48, color:"bg-light-blue",check:null},
            {name:"pusi-tunka-llatunkani", id:49, color:"bg-light-blue",check:null},
            {name:"phisca-tunka", id:50, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-mayani", id:51, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-payani", id:52, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-kimsani", id:53, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-pusini", id:54, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-phiscani", id:55, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-suxtani", id:56, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-paqalquni", id:57, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-kimsaqalquni", id:58, color:"bg-light-blue",check:null},
            {name:"phisca-tunka-llatunkani", id:59, color:"bg-light-blue",check:null},
            {name:"suxta-tunka", id:60, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-mayani", id:61, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-payani", id:62, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-kimsani", id:63, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-pusini", id:64, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-phiscani", id:65, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-suxtani", id:66, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-paqalquni", id:67, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-kimsaqalquni", id:68, color:"bg-light-blue",check:null},
            {name:"suxta-tunka-llatunkani", id:69, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka", id:70, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-mayani", id:71, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-payani", id:72, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-kimsani", id:73, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-pusini", id:74, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-phiscani", id:75, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-suxtani", id:76, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-paqalquni", id:77, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-kimsaqalquni", id:78, color:"bg-light-blue",check:null},
            {name:"paqalqu-tunka-llatunkani", id:79, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka", id:80, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-mayani", id:81, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-payani", id:82, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-kimsani", id:83, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-pusini", id:84, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-phiscani", id:85, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-suxtani", id:86, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-paqalquni", id:87, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-kimsaqalquni", id:88, color:"bg-light-blue",check:null},
            {name:"kimsaqalqu-tunka-llatunkani", id:89, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka", id:90, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-mayani", id:91, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-payani", id:92, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-kimsani", id:93, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-pusini", id:94, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-phiscani", id:95, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-suxtani", id:96, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-paqalquni", id:97, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-kimsaqalquni", id:98, color:"bg-light-blue",check:null},
            {name:"llatunka-tunka-llatunkani", id:99, color:"bg-light-blue",check:null},
            {name:"pataka", id:100, color:"bg-light-blue",check:null}
            ]
        }
    }
}
</script>