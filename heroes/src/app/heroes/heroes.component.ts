import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero;

  hero: Hero = {
    id: 1,
    name: 'Garen'
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero){
    this.selectedHero = hero;
  }

}
