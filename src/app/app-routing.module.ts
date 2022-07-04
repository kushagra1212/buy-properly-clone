import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyComponent } from './components/property/property.component';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { PropertyGuard } from './core/guard/property/property.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'properties',
    component: PropertyComponent,
    canActivate: [PropertyGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'property-details/:property-slurp',
    component: PropertyDetailsComponent,
    canActivate: [PropertyGuard],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
