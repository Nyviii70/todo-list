import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-new-list',
    loadChildren: () => import('./create-new-list/create-new-list.module').then( m => m.CreateNewListPageModule)
  },
  {
    path: 'todo-consulting',
    loadChildren: () => import('./todo-consulting/todo-consulting.module').then( m => m.TodoConsultingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
