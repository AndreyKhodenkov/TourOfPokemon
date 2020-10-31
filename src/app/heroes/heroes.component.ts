import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyHeroesComponent } from '../my-heroes/my-heroes.component';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {


  constructor(private http: HttpClient,
              private link: MyserviceService
              ) { }
  info
  pokemon=[]
  itemLink
  namePokemon
  idPokemon
  pokemonData

  ngOnInit(): void {
       this.link.getApi()
        .subscribe(response=>{
         this.info = response
         this.info = this.info.results
         this.info.forEach(element => {
             this.http.get(element.url)
               .subscribe(item=>{
                  this.pokemonData = item
                  this.itemLink = item
                  this.namePokemon = this.itemLink.name
                  this.idPokemon = this.itemLink.id
                  this.pokemon.push(
                    {name:`${this.namePokemon}`,id:this.idPokemon}
                  )
                 this.pokemon.sort((a,b)=> a.id > b.id ? 1: -1 )
          })
        });
      })
   }
}

