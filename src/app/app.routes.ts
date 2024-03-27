import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {AboutComponent} from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
export const routes: Routes = [
    {path:'about', component:AboutComponent},
    {path:'cart', component:CartComponent},
    {path:'products/:id', component:ProductDetailComponent},
    // Default Routing
    {path:'', component:ProductListComponent},
    //Wildcard routing
    {path:'**', component:PageNotFoundComponent}
];
