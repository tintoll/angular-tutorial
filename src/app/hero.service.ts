import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/*
@Injectable을 인식하면 우리 서비스에 의존중인 
다른 서비스에 대해서 메타데이터를 내보냅니다
*/
@Injectable() 
export class HeroService {
    /*
    Promise는 결과물이 준비되었을때 실행되는 콜백입니다. 
    */
    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }


}