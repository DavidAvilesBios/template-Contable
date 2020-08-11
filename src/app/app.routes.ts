import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
