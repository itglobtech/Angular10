(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ieWF:function(e,t,i){"use strict";i.r(t),i.d(t,"ExamplesModule",(function(){return k}));var n=i("ofXK"),a=i("tyNb"),r=i("fXoL"),o=i("3Pt+");let s=(()=>{class e{constructor(){this.childText="",this.sendData=new r.n}ngOnInit(){}sendToParent(){this.sendData.emit(this.childText)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-child-card"]],inputs:{parentText:"parentText"},outputs:{sendData:"sendData"},decls:14,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header","bg-secondary","text-white"],[1,"h4"],[1,"card-body","bg-info"],["action",""],[1,"for-group"],["name","childText","type","text",1,"form-control",3,"ngModel","input","ngModelChange"],[1,"label","text-center"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"div",4),r.Kb(5,"p",5),r.Xb(6,"Child Card"),r.Jb(),r.Jb(),r.Kb(7,"div",6),r.Kb(8,"form",7),r.Kb(9,"div",8),r.Kb(10,"input",9),r.Qb("input",(function(){return t.sendToParent()}))("ngModelChange",(function(e){return t.childText=e})),r.Jb(),r.Jb(),r.Kb(11,"div",10),r.Kb(12,"p",5),r.Xb(13),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(10),r.Sb("ngModel",t.childText),r.xb(3),r.Yb("From Parent : ",t.parentText,""))},directives:[o.g,o.d,o.e,o.a,o.c,o.f],styles:[""]}),e})(),b=(()=>{class e{constructor(){this.parentText=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-parent-card"]],decls:15,vars:3,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header","bg-success","text-white"],[1,"h4"],[1,"card-body","bg-light"],["action",""],[1,"form-group"],["name","parentText","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],[3,"parentText","sendData"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"div",4),r.Kb(5,"p",5),r.Xb(6,"Parent Card"),r.Jb(),r.Jb(),r.Kb(7,"div",6),r.Kb(8,"form",7),r.Kb(9,"div",8),r.Kb(10,"input",9),r.Qb("ngModelChange",(function(e){return t.parentText=e})),r.Jb(),r.Jb(),r.Kb(11,"div",10),r.Kb(12,"p",5),r.Xb(13),r.Jb(),r.Jb(),r.Jb(),r.Kb(14,"app-child-card",11),r.Qb("sendData",(function(e){return t.childData=e})),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(10),r.Sb("ngModel",t.parentText),r.xb(3),r.Yb("From Child : ",t.childData,""),r.xb(1),r.Sb("parentText",t.parentText))},directives:[o.g,o.d,o.e,o.a,o.c,o.f,s],styles:[""]}),e})(),c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-component-interaction-adv"]],decls:17,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/component-interaction",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/component-interaction-cs",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Component Interaction Complex"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Ib(7,"app-parent-card"),r.Kb(8,"div",0),r.Kb(9,"div",1),r.Kb(10,"div",5),r.Kb(11,"a",6),r.Xb(12," Other Component Interaction Examples "),r.Jb(),r.Kb(13,"a",7),r.Xb(14,"Click for Simple Example"),r.Jb(),r.Kb(15,"a",8),r.Xb(16,"Click for Server / Client Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[b,a.b],styles:[""]}),e})(),u=(()=>{class e{constructor(){this.serverText="",this.sendServer=new r.n}ngOnInit(){}sendData(){this.sendServer.emit(this.serverText)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-server"]],inputs:{clientData:"clientData"},outputs:{sendServer:"sendServer"},decls:9,vars:2,consts:[[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body","bg-lite"],["type","text","name","serverText",1,"w-100",3,"ngModel","ngModelChange"],[1,"btn","btn-danger","mt-2",3,"click"],["for","",1,"ml-5"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Xb(2,"Server Card"),r.Jb(),r.Kb(3,"div",2),r.Kb(4,"input",3),r.Qb("ngModelChange",(function(e){return t.serverText=e})),r.Jb(),r.Kb(5,"button",4),r.Qb("click",(function(){return t.sendData()})),r.Xb(6,"Send"),r.Jb(),r.Kb(7,"label",5),r.Xb(8),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(4),r.Sb("ngModel",t.serverText),r.xb(4),r.Yb("Client Data : ",t.clientData," "))},directives:[o.a,o.c,o.f],styles:[""]}),e})(),l=(()=>{class e{constructor(){this.sendClient=new r.n}ngOnInit(){}sendData(){this.sendClient.emit(this.clientText)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-client"]],inputs:{serverData:"serverData"},outputs:{sendClient:"sendClient"},decls:9,vars:2,consts:[[1,"card","mt-3"],[1,"card-header","bg-success","text-white"],[1,"card-body","bg-lite"],["type","text","name","clientText",1,"w-100",3,"ngModel","ngModelChange"],[1,"btn","btn-danger","mt-2",3,"click"],["for","",1,"ml-5"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Xb(2,"Client Card"),r.Jb(),r.Kb(3,"div",2),r.Kb(4,"input",3),r.Qb("ngModelChange",(function(e){return t.clientText=e})),r.Jb(),r.Kb(5,"button",4),r.Qb("click",(function(){return t.sendData()})),r.Xb(6,"Send"),r.Jb(),r.Kb(7,"label",5),r.Xb(8),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(4),r.Sb("ngModel",t.clientText),r.xb(4),r.Yb("Server Data : ",t.serverData,""))},directives:[o.a,o.c,o.f],styles:[""]}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-component-interaction-client-server"]],decls:21,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-5","text-danger"],[1,"lead"],[1,"row","mt-3"],[1,"col-md-6"],[3,"clientData","sendServer"],[3,"serverData","sendClient"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/component-interaction",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/component-interaction-adv",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Client Server Component Interaction"),r.Jb(),r.Kb(5,"p",4),r.Xb(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tempore pariatur neque, deleniti dolores repellendus, sunt iure fuga sequi eligendi nesciunt enim sed saepe optio hic omnis cumque accusamus laborum porro cupiditate assumenda? Atque tenetur itaque sequi cum saepe dolorum. "),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",5),r.Kb(8,"div",6),r.Kb(9,"app-server",7),r.Qb("sendServer",(function(e){return t.fromServer=e})),r.Jb(),r.Jb(),r.Kb(10,"div",6),r.Kb(11,"app-client",8),r.Qb("sendClient",(function(e){return t.fromClient=e})),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(12,"div",0),r.Kb(13,"div",1),r.Kb(14,"div",9),r.Kb(15,"a",10),r.Xb(16," Other Component Interaction Examples "),r.Jb(),r.Kb(17,"a",11),r.Xb(18,"Click for Simple Example"),r.Jb(),r.Kb(19,"a",12),r.Xb(20,"Click for Complex Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(9),r.Sb("clientData",t.fromClient),r.xb(2),r.Sb("serverData",t.fromServer))},directives:[u,l,a.b],styles:[""]}),e})(),m=(()=>{class e{constructor(){this.sendData=new r.n,this.data="Hello from Child"}sendTo(){this.sendData.emit(this.data)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-child"]],inputs:{msg:"msg"},outputs:{sendData:"sendData"},decls:12,vars:1,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h4"],[1,"card-body"],[1,"btn","btn-success","btn-md",3,"click"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"div",4),r.Kb(5,"p",5),r.Xb(6,"Child Component"),r.Jb(),r.Jb(),r.Kb(7,"div",6),r.Kb(8,"p"),r.Xb(9),r.Jb(),r.Kb(10,"button",7),r.Qb("click",(function(){return t.sendTo()})),r.Xb(11,"Send"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(9),r.Yb("From Parent : ",t.msg,""))},styles:[""]}),e})(),d=(()=>{class e{constructor(){this.message="Good Morning"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-parent"]],decls:11,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h4"],[1,"card-body"],[3,"msg","sendData"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"div",4),r.Kb(5,"p",5),r.Xb(6,"Parent Component"),r.Jb(),r.Jb(),r.Kb(7,"div",6),r.Kb(8,"p"),r.Xb(9),r.Jb(),r.Kb(10,"app-child",7),r.Qb("sendData",(function(e){return t.text=e})),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.xb(9),r.Yb("From Child : ",t.text,""),r.xb(1),r.Sb("msg",t.message))},directives:[m],styles:[""]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-component-interaction"]],decls:17,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/component-interaction-adv",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/component-interaction-cs",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Component Interaction Simple"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Ib(7,"app-parent"),r.Kb(8,"div",0),r.Kb(9,"div",1),r.Kb(10,"div",5),r.Kb(11,"a",6),r.Xb(12," Other Component Interaction Examples "),r.Jb(),r.Kb(13,"a",7),r.Xb(14,"Click for Complex Example"),r.Jb(),r.Kb(15,"a",8),r.Xb(16,"Click for Server / Client Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[d,a.b],styles:[""]}),e})(),g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-data-bindings"]],decls:20,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/interpolation",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/property-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/events-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/temp-ref-variable",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Data Bindings"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Data Binding Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Interpolation Example"),r.Jb(),r.Kb(14,"a",8),r.Xb(15,"Click for Property Binding Example"),r.Jb(),r.Kb(16,"a",9),r.Xb(17,"Click for Events Binding Example"),r.Jb(),r.Kb(18,"a",10),r.Xb(19,"Click for Template Reference Variable Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),J=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-events-binding"]],decls:18,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/interpolation",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/property-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/temp-ref-variable",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Event Bindings"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Data Binding Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Interpolation Example"),r.Jb(),r.Kb(14,"a",8),r.Xb(15,"Click for Property Binding Example"),r.Jb(),r.Kb(16,"a",9),r.Xb(17,"Click for Template Reference Variable Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),K=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-interpolation"]],decls:18,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/property-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/events-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/temp-ref-variable",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Interpolation"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Data Binding Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Property Binding Example"),r.Jb(),r.Kb(14,"a",8),r.Xb(15,"Click for Events Binding Example"),r.Jb(),r.Kb(16,"a",9),r.Xb(17,"Click for Template Reference Variable Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-property-binding"]],decls:18,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/interpolation",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/events-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/temp-ref-variable",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Property Bindings"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Data Binding Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Interpolation Example"),r.Jb(),r.Kb(14,"a",8),r.Xb(15,"Click for Events Binding Example"),r.Jb(),r.Kb(16,"a",9),r.Xb(17,"Click for Template Reference Variable Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),x=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-temp-ref-variable"]],decls:18,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","/examples/interpolation",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/property-binding",1,"list-group-item","list-group-item-action"],["id","cimenuhover","routerLink","/examples/events-binding",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Template Reference Variable"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Data Binding Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Interpolation Example"),r.Jb(),r.Kb(14,"a",8),r.Xb(15,"Click for Property Binding Example"),r.Jb(),r.Kb(16,"a",9),r.Xb(17,"Click for Events Binding Example"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-events-bindings"]],decls:16,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Events Bindings"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Component Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Example 1"),r.Jb(),r.Kb(14,"a",7),r.Xb(15,"Click for Example 2"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),X=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-form-bindings"]],decls:16,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Forms Bindings"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Component Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Example 1"),r.Jb(),r.Kb(14,"a",7),r.Xb(15,"Click for Example 2"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-structural-directives"]],decls:16,vars:0,consts:[[1,"container","mt-3"],[1,"row"],[1,"col"],[1,"display-4","text-danger"],[1,"lead"],[1,"list-group","cimenu"],["aria-current","true",1,"list-group-item","list-group-item-action","active"],["id","cimenuhover","routerLink","",1,"list-group-item","list-group-item-action"]],template:function(e,t){1&e&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Kb(3,"p",3),r.Xb(4,"Structural Directives"),r.Jb(),r.Kb(5,"p",4),r.Xb(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio obcaecati eveniet voluptatibus! Debitis quo voluptatem excepturi voluptatum minima facilis, aliquid accusantium earum necessitatibus, amet quos ad molestiae fugit ipsa, eligendi laboriosam quae veritatis quisquam animi? Eveniet excepturi mollitia odit?"),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"div",0),r.Kb(8,"div",1),r.Kb(9,"div",5),r.Kb(10,"a",6),r.Xb(11," Other Component Examples "),r.Jb(),r.Kb(12,"a",7),r.Xb(13,"Click for Example 1"),r.Jb(),r.Kb(14,"a",7),r.Xb(15,"Click for Example 2"),r.Jb(),r.Jb(),r.Jb(),r.Jb())},directives:[a.b],styles:[""]}),e})();const C=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-examples"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Kb(0,"p"),r.Xb(1,"examples works!"),r.Jb())},styles:[""]}),e})()},{path:"data-bindings",component:g},{path:"events-bindings",component:h},{path:"form-bindings",component:X},{path:"structural-directives",component:y},{path:"component-interaction",component:v},{path:"component-interaction-adv",component:c},{path:"component-interaction-cs",component:p},{path:"interpolation",component:K},{path:"property-binding",component:f},{path:"events-binding",component:J},{path:"temp-ref-variable",component:x}];let q=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(C)],a.c]}),e})(),k=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[n.b,q,o.b]]}),e})()}}]);