import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyHeroesComponent } from '../my-heroes/my-heroes.component';
import { MyserviceService } from '../myservice.service';

export interface Info{
  name:string
  ids: number
  photo: string
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  linkPokemmon:string[]=[]
  info
  pokemon:Info[]=[]
  name
  pokemonId
  itemLink
  arrBy
  constructor(private http: HttpClient,
              private link: MyserviceService,
              private  arr: MyserviceService) { }

  ngOnInit(): void {
    this.arrBy = this.arr.getArr()
  this.info = this.link.getApi()
  this.info
  .subscribe(response=>{
      this.info = response
      this.info = this.info.results
      this.info.forEach(element => {
        this.http.get(element.url)
        .subscribe(item=>{
          this.itemLink = item
          this.pokemonId = this.itemLink.id
           this.pokemon = [
            {name:`${name}`,ids:this.pokemonId,photo:`https://pokeres.bastionbot.org/images/pokemon/${this.pokemonId+1}.png`}
          ]
        })
      });
    })
  }
}

