"use strict";(self.webpackChunke_comerce=self.webpackChunke_comerce||[]).push([[238],{7238:(P,m,r)=>{r.r(m),r.d(m,{HomeComponent:()=>M});var a=r(6814),d=r(2207),u=r(756),p=r(1120),t=r(4769);let g=(()=>{class o{transform(e,n){return e.filter(i=>i.title.toLocaleLowerCase().includes(n.toLocaleLowerCase()))}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:o,pure:!0,standalone:!0})}return o})();var l=r(95),h=r(0),_=r(6286),f=r(2425);function v(o,s){1&o&&t._UZ(0,"img",12)}function x(o,s){1&o&&t._UZ(0,"img",13)}function C(o,s){if(1&o&&(t._UZ(0,"img",15),t.TgZ(1,"h3",16),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function Z(o,s){1&o&&(t.ynx(0),t.YNc(1,C,3,4,"ng-template",5),t.BQk())}function T(o,s){if(1&o&&(t.TgZ(0,"section")(1,"div",1)(2,"h1",0),t._uU(3,"Categories Products....."),t.qZA(),t.TgZ(4,"owl-carousel-o",4),t.YNc(5,Z,2,0,"ng-container",14),t.qZA()()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.categoriesData)}}function A(o,s){if(1&o&&t._UZ(0,"i",32),2&o){const e=s.$implicit,n=t.oxw().$implicit;t.ekj("rating-color",n.ratingsAverage>=e)}}const y=function(o){return["/details",o]},O=function(){return[1,2,3,4,5]};function H(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21)(2,"header",22),t._UZ(3,"img",23),t.TgZ(4,"h3",24),t._uU(5),t.ALo(6,"cutText"),t.qZA(),t.TgZ(7,"h3",25),t._uU(8),t.qZA(),t.TgZ(9,"div",26)(10,"span",27),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"p",28),t.YNc(14,A,1,2,"i",29),t._uU(15),t.qZA()()(),t.TgZ(16,"footer")(17,"button",30,31),t.NdJ("click",function(){const c=t.CHM(e).$implicit,S=t.MAs(18),b=t.oxw(2);return t.KtG(b.addProduct(c._id,S))}),t._uU(19,"+Add To Cart"),t.qZA()()()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(14,y,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(2),t.hij("",t.xi3(6,8,e.title,2)," "),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.hij(" ",t.xi3(12,11,e.price,"E\xa3")," "),t.xp6(3),t.Q6J("ngForOf",t.DdM(16,O)),t.xp6(1),t.hij(" ",e.ratingsAverage," ")}}function D(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"h1",0),t._uU(2,"Popular Products......."),t.qZA(),t.TgZ(3,"input",17),t.NdJ("ngModelChange",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.inputSearch=i)}),t.qZA(),t.TgZ(4,"div",18),t.YNc(5,H,20,17,"div",19),t.ALo(6,"slice"),t.ALo(7,"search"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.inputSearch),t.xp6(2),t.Q6J("ngForOf",t.Dn7(6,2,t.xi3(7,6,e.productsDate,e.inputSearch),0,18))}}let M=(()=>{class o{constructor(e,n,i,c){this._ProductService=e,this._CartService=n,this.toastr=i,this._Renderer2=c,this.productsDate=[],this.categoriesData=[],this.inputSearch="",this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:1e3,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:5}},nav:!0},this.manyOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,autoplayTimeout:2e3,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ProductService.getProduct().subscribe({next:e=>{this.productsDate=e.data,console.log(this.productsDate)}}),this._ProductService.getCategories().subscribe({next:e=>{this.categoriesData=e.data}})}addProduct(e,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addCart(e).subscribe({next:i=>{console.log(i),this.toastr.info(i.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:()=>{this._Renderer2.removeAttribute(n,"disabled")}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(h.M),t.Y36(_.N),t.Y36(f._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:13,vars:3,consts:[[1,"py-3"],[1,"container"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/images/slide-1.jpeg","alt","slid1","srcset","",1,"w-100"],["height","200","src","./assets/images/slide-2.jpeg","alt","slid2","srcset","",1,"w-100"],[4,"ngIf"],[1,"py-4"],["class","container",4,"ngIf"],["height","400","src","./assets/images/slide-1.jpeg","alt","slide-1","srcset",""],["height","400","src","./assets/images/slide-2.jpeg","alt","slide-2","srcset",""],[4,"ngFor","ngForOf"],["height","300",1,"rounded-4","p-2","img-slider-hover",3,"src","alt","title"],[1,"h6","text-main","fs-5"],["type","text","placeholder","Search........",1,"w-75","mx-auto","form-control","py-2","my-3",3,"ngModel","ngModelChange"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-2 ",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-2"],[1,"product","px-1"],["role","button",3,"routerLink"],["title","product.title",1,"w-100",3,"src","alt"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"small"],[1,"mb-0","small"],["class","fa fa-star rating-color small",3,"rating-color",4,"ngFor","ngForOf"],[1,"main-btn","w-100","my-2",3,"click"],["Addbtn",""],[1,"fa","fa-star","rating-color","small"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),t.YNc(5,v,1,0,"ng-template",5),t.YNc(6,x,1,0,"ng-template",5),t.qZA()(),t.TgZ(7,"div",6),t._UZ(8,"img",7)(9,"img",8),t.qZA()()()(),t.YNc(10,T,6,2,"section",9),t.TgZ(11,"section",10),t.YNc(12,D,8,9,"div",11),t.qZA()),2&n&&(t.xp6(4),t.Q6J("options",i.manyOptions),t.xp6(6),t.Q6J("ngIf",i.categoriesData.length>0),t.xp6(2),t.Q6J("ngIf",i.productsDate.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,d.Q,u.bB,u.Fy,u.Mp,p.rH,g,l.u5,l.Fj,l.JJ,l.On],styles:[".img-slider-hover[_ngcontent-%COMP%]:hover{background-color:#0099cc82}.product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]:hover{box-shadow:2px 4px 4px #09c}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0)}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(150%);transition:.8s}"]})}return o})()}}]);