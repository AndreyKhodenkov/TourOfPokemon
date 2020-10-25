import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

export interface Info{
  name:string
  id: any
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
  constructor(private http: HttpClient,
              private link: MyserviceService) { }

  ngOnInit(): void {
  this.info = this.link.getApi()
  this.info
  .subscribe(response=>{
      this.info = response
      this.info = this.info.results
      this.info.forEach(element => {
        this.http.get(element.url)
        .subscribe(item=>{
          console.log(item);
          this.pokemonId = item.id
          this.pokemon = [
          {name:`${name}`,id:this.pokemonId,photo:`https://pokeres.bastionbot.org/images/pokemon/${item.id+1}.png`}
          ]
        })
      });
    })
  }
}
