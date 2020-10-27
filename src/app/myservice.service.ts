import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  pokemon
  url
  linkArray:string[]=[]
  link
  getLinkAboutPokemon

  constructor(private http: HttpClient,
                  ) {
  }
  getApi(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=350')
  }
getLink
argument
lilili:string[]=[]
getArr(){
  let array = []
  let elementPokemon = ''
    this.getLink = this.getApi()
    this.getLink

      .subscribe(arg=>{
        this.argument = arg.results
        this.argument.forEach(element => {
          elementPokemon = element
          this.lilili.push(element.url)
        });
      });
      return this.lilili.forEach(item=>{
        return array.push(item)
      })
    }
}

