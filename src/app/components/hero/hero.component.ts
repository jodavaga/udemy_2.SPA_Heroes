import { Component } from '@angular/core';
import { HeroesService, Heroes } from "../../services/heroes.service";
import { ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero = {};

  constructor(  private _hero:HeroesService,
                private _activatedRoute: ActivatedRoute
){ 

  this._activatedRoute.params.subscribe( params => {

    this.hero = this._hero.getHero(params['id']); 

    // console.log(this.hero);
    
  })

}


}
