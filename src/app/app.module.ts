import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPokemonComponent } from './about-pokemon/about-pokemon.component';
import { MianPageComponent } from './mian-page/mian-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HeroesComponent,
    AboutPokemonComponent,
    MianPageComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
