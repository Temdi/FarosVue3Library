import{_ as o,g as r,b as c,p as i,o as p,c as u,r as d}from"./app.22adb295.js";const n={class:"flex flex-wrap"},m={props:{modelValue:{default:null,type:[String,Number]},activeClass:{required:!1,type:[String]}},emits:["update:modelValue"],setup(t,{emit:s}){const a=t,l=r({active:c(()=>a.modelValue),activeClass:a.activeClass});return i("tabs",{state:l,activateTab:e=>{s("update:modelValue",e)}}),(e,f)=>(p(),u("div",n,[d(e.$slots,"default")]))}};var b=o(m,[["__file","FarosTabs.vue"]]);export{b as default};
