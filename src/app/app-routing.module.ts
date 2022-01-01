import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesPageComponent } from './promises-page/promises-page.component';
import { SelectedPromisesComponent } from './selected-promises/selected-promises.component';

const routes: Routes = [
  {
    path: 'promises',
    component: PromisesPageComponent
  },
  {
    path: 'selected',
    component: SelectedPromisesComponent
  },
  {
    path: '**',
    redirectTo: '/promises'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
