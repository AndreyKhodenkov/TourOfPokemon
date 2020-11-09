import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss']
})
export class MyPokemonComponent implements OnInit {

  constructor(private returnMyPokemon:MyserviceService) { }
  result = 0
  myPokemon
  ngOnInit(): void {
    this.myPokemon = this.returnMyPokemon.returnPokemon()
    this.myPokemon.forEach(element => {
      this.result += element.experience
    });
    console.log(this.result);
  }

}
