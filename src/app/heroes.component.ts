import {Component, OnInit} from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `      
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>    
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class HeroesComponent implements OnInit {
    
    hero : Hero = {
        id : 1,
        name : 'Wind'
    };
    heroes : Hero[];
    selectedHero : Hero;
    onSelect(hero:Hero) : void {
        this.selectedHero = hero;
    }

    getHeroes() : void {
        //콜백함수를 promise의 then 메서드를 통해서 넘기겠습니다.
        /*
        Promise와 arrow function(=>)은 ES2015 문법입니다.

        Promise는 설명한 바와 같이 동기화를 위해 사용되고 arrow function은 기존에 비해 
        함수 선언을 간결하게 만들어주고  this를 더 우아하게 사용할 수 있습니다

        */
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        
    }
    /*
    생성자 그 자체는 아무것도 안하지만 패러미터는 private heroService 
    프로퍼티를 정의하면서 동시에 HeroService 주입대상으로 인지합니다.
    */
    constructor(private heroService : HeroService){

    }  

    //OnInit을 impl할때 구현해야되는 메서드
    ngOnInit() : void{
        this.getHeroes();
    }
}

