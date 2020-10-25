import{ NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'myHeroes',component:MyHeroesComponent}
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule {

}
