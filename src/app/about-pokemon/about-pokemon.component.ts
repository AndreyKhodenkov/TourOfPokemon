import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-about-pokemon',
  templateUrl: './about-pokemon.component.html',
  styleUrls: ['./about-pokemon.component.scss']
})
export class AboutPokemonComponent implements OnInit {

  constructor(private pokemonArr: MyserviceService,
    private http: HttpClient,
    private route: ActivatedRoute ) { }

  link
  namePok
  idPok
  pokemonsDetail
  pokemon
  newItem
  arrayOfPokemons = []
  typePokemon
  abilities
  experience
  arroo
  ngOnInit(): void {
    this.arroo = '"../img/—Pngtree—colorful arrows red arrow creative_3977518.png"'
    this.pokemonArr.getApi()
      .subscribe(response=>{
        this.pokemonsDetail = response
        this.pokemonsDetail.results.forEach(element => {
          this.link = element.url
          this.http.get(this.link)
          .subscribe(item=>{
            this.newItem = item
            this.typePokemon =  this.newItem.types[0].type.name
            this.abilities = this.newItem.abilities
            this.experience = this.newItem.base_experience
            this.namePok = this.newItem.name
            this.idPok = this.newItem.id
            this.idPok = this.idPok
            this.arrayOfPokemons.push(
              {name:`${this.namePok}`,ids:(this.idPok),photo:`https://pokeres.bastionbot.org/images/pokemon/${this.idPok}.png`,type:this.typePokemon, abilities: this.abilities,experience:this.experience}
            )
            this.arrayOfPokemons.sort((a,b)=>a.ids > b.ids ? 1: -1)
             if(this.arrayOfPokemons.length === this.pokemonsDetail.results.length){
                 this.route.paramMap.subscribe(params => {
                 this.pokemon = this.arrayOfPokemons[+params.get('ids')-1];
                 console.log(this.pokemon);
                })
             }
           })
      });
  });
  }
  }


