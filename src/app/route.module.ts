import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/page-module/about/about.component';
import { ContactComponent } from './modules/page-module/contact/contact.component';
import { HomeComponent } from './modules/page-module/home/home.component';
import { MenuComponent } from './modules/page-module/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouteModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}
