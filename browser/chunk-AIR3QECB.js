import{b as x}from"./chunk-6OTPTS24.js";import{U as f,V as u,ma as l,sa as e,ta as t,ua as n,va as w,wa as v,xa as C,ya as a}from"./chunk-YD5YLCPP.js";var s=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=l({type:r,selectors:[["app-breadcrumbs"]],decls:10,vars:0,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"]],template:function(i,m){i&1&&(e(0,"div",0)(1,"div",1),n(2,"h3",2),t(),e(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),a(7,"Home"),t()(),n(8,"li",5)(9,"li",7),t()()())},encapsulation:2})};var d=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=l({type:r,selectors:[["app-sidebar"]],decls:21,vars:0,consts:[[1,"left-sidebar"],[1,"scroll-sidebar"],[1,"sidebar-nav"],["id","sidebarnav"],[1,"user-profile"],["href","#","aria-expanded","false",1,"has-arrow","waves-effect","waves-dark"],["alt","user",3,"src"],[1,"hide-menu"],["aria-expanded","false",1,"collapse"],["routerLinkActive","active","routerLink","./perfil"],["href","javascript:void()"],["routerLink","settings"],[1,"nav-devider"],[1,"nav-small-cap"]],template:function(i,m){i&1&&(e(0,"aside",0)(1,"div",1)(2,"nav",2)(3,"ul",3)(4,"li",4)(5,"a",5),n(6,"img",6)(7,"span",7),t(),e(8,"ul",8)(9,"li")(10,"a",9),a(11,"Mi perfil "),t()(),e(12,"li")(13,"a",10),a(14,"Mi balance "),t()(),e(15,"li")(16,"a",11),a(17,"Configuraci\xF3n de tema "),t()()()(),n(18,"li",12),e(19,"li",13),a(20,"PERSONAL"),t()()()()())},styles:[".has-arrow.waves-effect.waves-dark.active[_ngcontent-%COMP%]{background-color:transparent}"]})};var p=class r{logout(){}buscar(o){}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=l({type:r,selectors:[["app-header"]],decls:56,vars:0,consts:[["txtBusqueda",""],[1,"topbar"],[1,"navbar","top-navbar","navbar-expand-md","navbar-light"],[1,"navbar-header"],["href","index.html",1,"navbar-brand"],["src","./assets/images/logo-icon.png","alt","homepage",1,"dark-logo"],["src","./assets/images/logo-light-icon.png","alt","homepage",1,"light-logo"],["src","./assets/images/logo-text.png","alt","homepage",1,"dark-logo"],["src","./assets/images/logo-light-text.png","alt","homepage",1,"light-logo"],[1,"navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],["href","javascript:void(0)",1,"nav-link","nav-toggler","hidden-md-up","waves-effect","waves-dark"],[1,"ti-menu"],["href","javascript:void(0)",1,"nav-link","sidebartoggler","hidden-sm-down","waves-effect","waves-dark"],[1,"nav-item","hidden-sm-down"],[1,"navbar-nav","my-lg-0"],[1,"nav-item","hidden-xs-down","search-box"],["href","javascript:void(0)",1,"nav-link","hidden-sm-down","waves-effect","waves-dark"],[1,"ti-search"],[1,"app-search",3,"submit"],["type","text","placeholder","Buscar usuario o estudiante",1,"form-control"],[1,"srh-btn"],[1,"ti-close"],[1,"nav-item","dropdown"],["href","","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","waves-effect","waves-dark"],["alt","user",1,"profile-pic",3,"src"],[1,"dropdown-menu","dropdown-menu-right","animated","fadeIn","fast"],[1,"dropdown-user"],[1,"dw-user-box"],[1,"u-img"],["alt","user",3,"src"],[1,"u-text"],[1,"text-muted"],["href","/dashboard/perfil",1,"btn","btn-rounded","btn-danger","btn-sm"],["role","separator",1,"divider"],["routerLink","./perfil"],[1,"ti-user"],["href","#"],[1,"ti-email"],[1,"cursor",3,"click"],[1,"fa","fa-power-off"]],template:function(i,m){if(i&1){let h=w();e(0,"header",1)(1,"nav",2)(2,"div",3)(3,"a",4)(4,"b"),n(5,"img",5)(6,"img",6),t(),e(7,"span"),n(8,"img",7)(9,"img",8),t()()(),e(10,"div",9)(11,"ul",10)(12,"li",11)(13,"a",12),n(14,"i",13),t()(),e(15,"li",11)(16,"a",14),n(17,"i",13),t()(),n(18,"li",15),t(),e(19,"ul",16)(20,"li",17)(21,"a",18),n(22,"i",19),t(),e(23,"form",20),v("submit",function(){f(h);let E=C(25);return u(m.buscar(E.value))}),n(24,"input",21,0),e(26,"a",22),n(27,"i",23),t()()(),e(28,"li",24)(29,"a",25),n(30,"img",26),t(),e(31,"div",27)(32,"ul",28)(33,"li")(34,"div",29)(35,"div",30),n(36,"img",31),t(),e(37,"div",32),n(38,"h4")(39,"p",33),e(40,"a",34),a(41,"Ver mi perfil"),t()()()(),n(42,"li",35),e(43,"li")(44,"a",36),n(45,"i",37),a(46," Mi perfil"),t()(),e(47,"li")(48,"a",38),n(49,"i",39),a(50," Inbox"),t()(),n(51,"li",35),e(52,"li")(53,"a",40),v("click",function(){return f(h),u(m.logout())}),n(54,"i",41),a(55," Logout "),t()()()()()()()()()}},encapsulation:2})};var c=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=l({type:r,selectors:[["app-pages"]],decls:9,vars:0,consts:[["id","main-wrapper"],[1,"page-wrapper"],[1,"container-fluid"],[1,"footer"]],template:function(i,m){i&1&&(e(0,"div",0),n(1,"app-header")(2,"app-sidebar"),e(3,"div",1)(4,"div",2),n(5,"app-breadcrumbs")(6,"router-outlet"),t(),e(7,"footer",3),a(8," \xA9 2024 UEEE admin Pro by aabsolutions "),t()()())},dependencies:[s,d,p,x],encapsulation:2})};var I=[{path:"",component:c,loadChildren:()=>import("./chunk-6Y3NHGH3.js").then(r=>r.CHILD_ROUTES)}];export{I as PAGES_ROUTES};
