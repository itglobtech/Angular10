(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ieWF:function(t,n,e){"use strict";e.r(n),e.d(n,"ExamplesModule",(function(){return f}));var s=e("ofXK"),i=e("tyNb"),c=e("fXoL");let r=(()=>{class t{constructor(){this.sendData=new c.n,this.data="Hello from Child"}sendTo(){this.sendData.emit(this.data)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-child"]],inputs:{msg:"msg"},outputs:{sendData:"sendData"},decls:12,vars:1,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h4"],[1,"card-body"],[1,"btn","btn-success","btn-md",3,"click"]],template:function(t,n){1&t&&(c.Gb(0,"div",0),c.Gb(1,"div",1),c.Gb(2,"div",2),c.Gb(3,"div",3),c.Gb(4,"div",4),c.Gb(5,"p",5),c.Sb(6,"Child Component"),c.Fb(),c.Fb(),c.Gb(7,"div",6),c.Gb(8,"p"),c.Sb(9),c.Fb(),c.Gb(10,"button",7),c.Lb("click",(function(){return n.sendTo()})),c.Sb(11,"Send"),c.Fb(),c.Fb(),c.Fb(),c.Fb(),c.Fb(),c.Fb()),2&t&&(c.ub(9),c.Tb("From Parent : ",n.msg,""))},styles:[""]}),t})(),o=(()=>{class t{constructor(){this.message="Good Morning"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-parent"]],decls:11,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h4"],[1,"card-body"],[3,"msg","sendData"]],template:function(t,n){1&t&&(c.Gb(0,"div",0),c.Gb(1,"div",1),c.Gb(2,"div",2),c.Gb(3,"div",3),c.Gb(4,"div",4),c.Gb(5,"p",5),c.Sb(6,"Parent Component"),c.Fb(),c.Fb(),c.Gb(7,"div",6),c.Gb(8,"p"),c.Sb(9),c.Fb(),c.Gb(10,"app-child",7),c.Lb("sendData",(function(t){return n.text=t})),c.Fb(),c.Fb(),c.Fb(),c.Fb(),c.Fb(),c.Fb()),2&t&&(c.ub(9),c.Tb("From Child : ",n.text,""),c.ub(1),c.Nb("msg",n.message))},directives:[r],styles:[""]}),t})(),a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-component-interaction"]],decls:8,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"]],template:function(t,n){1&t&&(c.Gb(0,"div",0),c.Gb(1,"div",1),c.Gb(2,"div",2),c.Gb(3,"p",3),c.Sb(4,"Component Interaction"),c.Fb(),c.Gb(5,"p",4),c.Sb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),c.Fb(),c.Fb(),c.Fb(),c.Fb(),c.Eb(7,"app-parent"))},directives:[o],styles:[""]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-data-bindings"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Gb(0,"p"),c.Sb(1,"data-bindings works!"),c.Fb())},styles:[""]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-events-bindings"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Gb(0,"p"),c.Sb(1,"events-bindings works!"),c.Fb())},styles:[""]}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-form-bindings"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Gb(0,"p"),c.Sb(1,"form-bindings works!"),c.Fb())},styles:[""]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-structural-directives"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Gb(0,"p"),c.Sb(1,"structural-directives works!"),c.Fb())},styles:[""]}),t})();const l=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.xb({type:t,selectors:[["app-examples"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Gb(0,"p"),c.Sb(1,"examples works!"),c.Fb())},styles:[""]}),t})()},{path:"data-bindings",component:b},{path:"events-bindings",component:p},{path:"form-bindings",component:u},{path:"structural-directives",component:d},{path:"component-interaction",component:a}];let m=(()=>{class t{}return t.\u0275mod=c.Bb({type:t}),t.\u0275inj=c.Ab({factory:function(n){return new(n||t)},imports:[[i.c.forChild(l)],i.c]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Bb({type:t}),t.\u0275inj=c.Ab({factory:function(n){return new(n||t)},imports:[[s.b,m]]}),t})()}}]);