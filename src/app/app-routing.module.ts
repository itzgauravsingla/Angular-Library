import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'circles',
    loadChildren: () => import('./circles/circles.module').then(m => m.CirclesModule)
  },
  {
    path: 'trello',
    loadChildren: () => import('./trello/trello.module').then(m => m.TrelloModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
