import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



   constructor(private link: HttpClient,
               private getArr: MyserviceService){}

  pokemon
  url
  idd
  linkPhoto
  linkArray:string[] = []
  photoArray:string[] = []
  objectPokemon = []
   ngOnInit(): void {
    this.getArr.getApi()
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
              this.idd = itemLink
              this.linkPhoto = `https://pokeres.bastionbot.org/images/pokemon/${this.idd.id}.png`
              this.photoArray.push(this.linkPhoto)
              this.objectPokemon.push(
                {idNum:this.idd.id, img:this.linkPhoto, namePoke:this.idd.name}
              )
             this.objectPokemon.sort((a,b)=>a.idNum > b.idNum ? 1 : -1)
           })
          })

        })
   }
}
