import { ClubesDetailComponent } from './clubes-detail/clubes-detail.component';
import { HomeComponent } from './home/home.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//  Componentes
import { ClubesComponent } from './clubes/clubes.component';
import { ClubesAddComponent } from './clubes-add/clubes-add.component';


const appRoutes: Routes = [
    { path: 'clubes', component: ClubesComponent },
    { path: 'club-add', component: ClubesAddComponent },
    { path: 'club-detail', component: ClubesDetailComponent },
    { path: '', component: HomeComponent }
    /*{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }*/
    /*{ path: 'productos', component: ProductosListComponent },
    { path: 'crear-producto', component: ProductoAddComponent },
    { path: 'producto/:id', component: ProductoDetailComponent },
    { path: 'editar-producto/:id', component: ProductoEditComponent },
    { path: '**', component: ErrorComponent }*/
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
