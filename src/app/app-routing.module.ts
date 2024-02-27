import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiskMainPageComponent } from './disk-main-page/disk-main-page.component';
import { DiskMoreInfoComponent } from './disk-more-info/disk-more-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path:'disk', component: DiskMainPageComponent},
  {path:'disk/:diskId', component: DiskMoreInfoComponent},
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
