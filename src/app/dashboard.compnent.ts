import { Component, OnInit } from '@angular/core';
 
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector : 'my-dashboard',
    templateUrl : 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
 
    constructor(private router: Router,private heroService: HeroService) { }
 
    ngOnInit(): void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    /*
    이 gotoDetail은 두가지 단계로 네비게이션을 진행합니다.
    1.라우트 링크를 패러미터 배열로 만듭니다.
    2.이 배열을 라우터의 navigate 메서드로 전달합니다.
    */
    gotoDetail(hero: Hero): void { 
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}