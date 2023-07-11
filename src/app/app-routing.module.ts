import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLoadingDefaultComponent } from './website-loading-default/website-loading-default.component';
import { MainWebsiteComponent } from './main-website/main-website.component';

const routes: Routes = [
  { path: '', component: MainWebsiteComponent },
  { path: 'loading-default', component: WebsiteLoadingDefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
