import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {AboutComponent} from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { authGuard } from './guards/auth.guard';
import { cartGuard } from './guards/cart.guard';
export const routes: Routes = [
    {path:'about', component:AboutComponent},
    {path:'cart', component:CartComponent, canDeactivate:[cartGuard]},
    {path:'products/:id', component:ProductDetailComponent},
    {path:'admin/products',component:CreateProductComponent},
    // Default Routing
    {path:'', component:ProductListComponent},
    //Wildcard routing
    {path:'**', component:PageNotFoundComponent}
];
