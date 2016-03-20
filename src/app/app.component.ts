import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";

import {HeroService} from "./heroes/services/hero.service.ts";
import {HeroesComponent} from "./heroes/components/heroes/heroes.component.ts";
import {DashboardComponent} from "./heroes/components/dashboard/dashboard.component.ts";
import {HeroDetailComponent} from "./heroes/components/hero-detail/hero-detail.component.ts";

@Component({
  selector: 'lls-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [HeroesComponent],
  providers: [HeroService]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
