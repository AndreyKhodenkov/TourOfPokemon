import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MyserviceService } from '../myservice.service';
export interface Pokemon{
  idNum:number
  img:string
  namePoke:string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemon
  url
  id
  linkPhoto
  linkArray:string[] = []
  photoArray:string[] = []
  objectPokemon:Pokemon[] = []
  getPokemon
  getLinkAbout
   constructor(private link: HttpClient,
               private getArr: MyserviceService,
              private getLink:MyserviceService
     ){
       }

   ngOnInit(): void {
     this.getPokemon = this.getArr.getApi()
     this.getPokemon
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

        })
         console.log(this.objectPokemon);

   }
}
