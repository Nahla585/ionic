import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'add-reclamation',
    loadChildren: () => import('./add-reclamation/add-reclamation.module').then( m => m.AddReclamationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'details-reclamation/:id',
    loadChildren: () => import('./details-reclamation/details-reclamation.module').then( m => m.DetailsReclamationPageModule)
  },
  {
    path: 'mes-reclamations',
    loadChildren: () => import('./mes-reclamations/mes-reclamations.module').then( m => m.MesReclamationsPageModule)
  },


  
   
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
