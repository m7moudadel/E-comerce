"use strict";(self.webpackChunke_comerce=self.webpackChunke_comerce||[]).push([[691],{9691:(f,_,o)=>{o.r(_),o.d(_,{DetailsComponent:()=>h});var n=o(6814),a=o(756),t=o(4769),u=o(1120),l=o(0),p=o(6286),g=o(2425);function m(i,d){if(1&i&&t._UZ(0,"img",15),2&i){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(i,d){1&i&&(t.ynx(0),t.YNc(1,m,1,1,"ng-template",14),t.BQk())}function v(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"owl-carousel-o",4),t.YNc(3,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(4,"div",6)(5,"h2",7),t._uU(6),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.qZA(),t.TgZ(9,"span"),t._uU(10),t.qZA(),t.TgZ(11,"div",9)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",10),t._UZ(16,"i",11),t._uU(17),t.qZA()(),t.TgZ(18,"button",12,13),t.NdJ("click",function(){t.CHM(e);const r=t.MAs(19),c=t.oxw();return t.KtG(c.addProduct(c.productDetails._id,r))}),t._uU(20,"+Add Product"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("options",e.detailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(3),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(14,7,e.productDetails.price,"EG")),t.xp6(4),t.hij(" ",e.productDetails.ratingsAverage,"")}}let h=(()=>{class i{constructor(e,s,r,c,x){this._ActivatedRoute=e,this._ProductService=s,this._CartService=r,this.toastr=c,this._Renderer2=x,this.productDetails=null,this.detailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],items:1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productsId=e.get("id"),console.log(this.productsId)}}),this._ProductService.getspecificProduct(this.productsId).subscribe({next:({data:e})=>{this.productDetails=e,console.log(this.productDetails)}})}addProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addCart(e).subscribe({next:r=>{console.log(r),this.toastr.info(r.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:()=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(u.gz),t.Y36(l.M),t.Y36(p.N),t.Y36(g._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"container","my-4","p-4","rounded-2","w-75","mx-auto","shadow"],["class","row align-items-center",4,"ngIf"],[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted"],[1,"d-flex","align-items-center","justify-content-between"],[1,"mb-0"],[1,"fa","fa-star","rating-color"],[1,"main-btn","my-3","w-100",3,"click"],["Addbtn",""],["carouselSlide",""],[3,"src"]],template:function(s,r){1&s&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,v,21,10,"div",1),t.qZA()()),2&s&&(t.xp6(2),t.Q6J("ngIf",r.productDetails))},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return i})()}}]);