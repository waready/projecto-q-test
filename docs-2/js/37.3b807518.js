(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"1af6":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("div",{staticClass:"row justify-between"},[o("h2",{staticClass:"q-ma-none q-mb-md"},[t._v("Insectos")]),o("q-input",{staticClass:"q-mb-md col-md-3 col-sm-12 col-xs-12",attrs:{outlined:"",label:"Buscar palabra"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.TextoBuscado,callback:function(e){t.TextoBuscado=e},expression:"TextoBuscado"}})],1)]),o("cards",{attrs:{ObjetoFiltrado:t.TextoFiltrado}})],1)},s=[],a=(o("d25f"),o("2fdb"),o("6762"),o("7f7f"),o("1e02")),c=o("c18b"),r={name:"AnimalDomestico",components:{cards:a["a"]},data:function(){return{TextoBuscado:"",objetos:c}},computed:{TextoFiltrado:function(){var t=this.TextoBuscado.toUpperCase();return this.objetos.insectos.filter((function(e){return e.nombre.toUpperCase().includes(t)||e.name.toUpperCase().includes(t)}))}}},i=r,u=o("2877"),l=o("27f9"),d=o("0016"),p=o("eebe"),f=o.n(p),m=Object(u["a"])(i,n,s,!1,null,null,null);e["default"]=m.exports;f()(m,"components",{QInput:l["a"],QIcon:d["a"]})}}]);