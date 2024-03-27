import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {AboutComponent} from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export const routes: Routes = [
    {path:'about', component:AboutComponent},
    // Default Routing
    {path:'', component:ProductListComponent},
    //Wildcard routing
    {path:'**', component:PageNotFoundComponent}
];
