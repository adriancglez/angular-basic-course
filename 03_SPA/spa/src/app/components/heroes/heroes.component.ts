import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heores',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    console.log("Constructor")
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
