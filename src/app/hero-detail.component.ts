import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Hero} from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector : 'my-hero-detail',
    templateUrl : 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero : Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            //hero id는 숫자인 반면에 Route 패러미터는 항상 문자열입니다. 
            //따라서 route parameter를 자바스크립트 연산자(+)를 통해 패러미터값을 숫자로 변환해주어야 합니다.
            let id = +params['id'];
            this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });
    }
    goBack(): void {
        this.location.back();
    }





}