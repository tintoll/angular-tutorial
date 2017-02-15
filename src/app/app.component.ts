import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template : `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>   
  `
})
/*
  방금 우리는 RouterLink 지시자2에 문자열을 바인딩시켰고 이 문자열(‘/heroes’)을 
  통해 router는 어디로 이동할지에 대한 정보를 받을 수 있게 되었습니다
  이 링크는 동적이지 않기 때문에 one-time binding3으로 바인딩 되었습니다.
*/
export class AppComponent { 
  title = 'Tour of Heros';
}





