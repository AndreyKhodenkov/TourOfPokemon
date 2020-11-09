import{ NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AboutPokemonComponent } from './about-pokemon/about-pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MianPageComponent } from './mian-page/mian-page.component';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';




const routes: Routes = [
  {path:'',component:MianPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'aboutPokemon/:ids', component:AboutPokemonComponent},
  {path:'myPokemon',component:MyPokemonComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

