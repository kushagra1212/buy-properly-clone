import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyComponent } from './components/property/property.component';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { PropertiesGuard } from './core/guard/properties/properties.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'properties',
    component: PropertyComponent,
    canActivate: [PropertiesGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'property-details/:property-slurp',
    component: PropertyDetailsComponent,
    canActivate: [PropertiesGuard],
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
