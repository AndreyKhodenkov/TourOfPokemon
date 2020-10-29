import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { getDiffieHellman } from 'crypto';
import { MyserviceService } from '../myservice.service';

export interface Pokemon{
  name:string
  id:number
}
@Component({
  selector: 'app-about-pokemon',
  templateUrl: './about-pokemon.component.html',
  styleUrls: ['./about-pokemon.component.scss']
})
export class AboutPokemonComponent implements OnInit {
  lastArray:string[]=[]

  constructor(private link: MyserviceService,
              private http: HttpClient,
              private route:ActivatedRoute,
              private func: MyserviceService) { }

                linkPokemmon:string[]=[]
                info
                pokemon=[]
                name
                pokemonId
                itemLink
                arrBy
                namePokemon
                idPokemon


  ngOnInit(): void {

    this.info = this.link.getApi()
  this.info
  .subscribe(response=>{
      this.info = response
      this.info = this.info.results
      this.info.forEach(element => {
        this.http.get(element.url)
        .subscribe(item=>{
          this.itemLink = item
          this.namePokemon = item.name
          this.idPokemon = item.id
          this.pokemonId = this.itemLink.id
           this.pokemon.push(
             {name:`${this.namePokemon}`,id:this.idPokemon}
            //{name:`${name}`,ids:this.pokemonId,photo:`https://pokeres.bastionbot.org/images/pokemon/${this.pokemonId+1}.png`}
        )
        })

      });
    })
    this.route.paramMap.subscribe(params => {
      this.arrBy = this.pokemon[+params.get('pokeId')];
    });
    console.log(this.arrBy);
  }
  }


