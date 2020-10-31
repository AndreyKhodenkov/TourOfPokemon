import{ NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AboutPokemonComponent } from './about-pokemon/about-pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';




const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'aboutPokemon/:ids', component:AboutPokemonComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

