import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'' ,
  loadComponent:()=> import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
  canActivate:[authGuard],
  children:[
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , loadComponent:()=> import('./components/home/home.component').then((m)=>m.HomeComponent)},
    {path:'Cart' , loadComponent:()=> import('./components/cart/cart.component').then((m)=>m.CartComponent)},
    {path:'product' , loadComponent: ()=> import('./components/products/products.component').then((m)=>m.ProductsComponent)},
    {path:'categories' , loadComponent:()=> import('./components/categories/categories.component').then((m)=>m.CategoriesComponent)},
    {path:'categoriesDetails/:id' , loadComponent:()=> import('./components/categories-details/categories-details.component').then((m)=>m.CategoriesDetailsComponent)},
    {path:'payment/:id' , loadComponent:()=> import('./components/payment/payment.component').then((m)=> m.PaymentComponent)},
    {path:'details/:id' , loadComponent:()=>import('./components/details/details.component').then((m)=> m.DetailsComponent)},
    {path:'allorders' , loadComponent:()=>import('./components/allorders/allorders.component').then((m)=> m.AllordersComponent)},
  ]
},


{path:'' ,
loadComponent:()=> import('./layouts/auth-layout/auth-layout.component').then((m)=> m.AuthLayoutComponent),
children:[
  {path:'' ,redirectTo:'register' , pathMatch:'full'},
  {path:'register' , loadComponent:()=> import('./components/register/register.component').then((m)=>m.RegisterComponent)},
  {path:'login' , loadComponent:()=> import('./components/login/login.component').then((m)=> m.LoginComponent)}
]
},
{path:'**' , loadComponent: ()=> import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
