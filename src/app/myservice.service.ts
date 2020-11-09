import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
arrayOfPokemon=[]
  constructor(private http: HttpClient,
                  ) {
  }
getPokemon(pokemon){
  this.arrayOfPokemon.push(pokemon)
  console.log(this.arrayOfPokemon);

}
getApi(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=115')
  }
returnPokemon(){
  return this.arrayOfPokemon
}

}

