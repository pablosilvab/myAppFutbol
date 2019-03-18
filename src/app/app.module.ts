import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClubesComponent } from './clubes/clubes.component';
import { HomeComponent } from './home/home.component';
import { ClubesAddComponent } from './clubes-add/clubes-add.component';
import { ClubesDetailComponent } from './clubes-detail/clubes-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Mi App de Clubes' }
  }, {
    path: 'clubes',
    component: ClubesComponent,
    data: { title: 'Lista de Clubes' }
  }, {
    path: 'club-add',
    component: ClubesAddComponent,
    data: { title: 'Lista de Clubes' }
  }, {
    path: 'club-detail/:id',
    component: ClubesDetailComponent,
    data: { title: 'Lista de Clubes' }
  }

];


@NgModule({
  declarations: [
    AppComponent,
    ClubesComponent,
    HomeComponent,
    ClubesAddComponent,
    ClubesDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
