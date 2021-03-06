import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Heroe, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

}
