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
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=5')
  }

}

