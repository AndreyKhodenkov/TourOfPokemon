import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Pokemon{
  idNum:number
  img:string
  namePoke:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 pokemon
 url
 id
 linkPhoto
 linkArray:string[] = []
 photoArray:string[] = []
 objectPokemon:Pokemon[] = []
  constructor(private http: HttpClient,
              private link: HttpClient,

    ){
      }

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=50')
    .subscribe(response=>{
       this.pokemon = response
       this.pokemon = this.pokemon.results
       this.pokemon.forEach(element => {
         this.url = element.url
         this.linkArray.push(this.url)
        });

        this.linkArray.forEach(item=>{
          this.link.get(item)
          .subscribe(itemLink=>{
            this.id = itemLink
            this.linkPhoto = `https://pokeres.bastionbot.org/images/pokemon/${this.id.id+1}.png`
            this.photoArray.push(this.linkPhoto)
            this.objectPokemon.push(
              {idNum:this.id.id, img:this.linkPhoto, namePoke:this.id.name}
            )
          })

        })
        console.log(this.objectPokemon);
      })
  }
}
