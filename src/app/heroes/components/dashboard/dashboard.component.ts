import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './../../models/hero.model';
import {HeroService} from './../../services/hero.service';

@Component({
  selector: 'lls-dashboard',
  templateUrl: 'app/heroes/components/dashboard/dashboard.component.html',
  styleUrls: ['./app/heroes/components/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _heroService: HeroService,
    private _router: Router) {
  }

  ngOnInit() {
    this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
