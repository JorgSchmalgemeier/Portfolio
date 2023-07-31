import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLoadingDefaultComponent } from './website-loading-default/website-loading-default.component';
import { MainWebsiteComponent } from './main-website/main-website.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: '', component: MainWebsiteComponent },
  { path: 'loading-default', component: WebsiteLoadingDefaultComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
