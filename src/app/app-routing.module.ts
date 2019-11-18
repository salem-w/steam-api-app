import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonComponent } from './components/json/json.component'
import { GamesComponent } from './components/games/games.component'


const routes: Routes = [
  {
    path: '', component: GamesComponent
  },
  {
    path: 'about', component: JsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
