import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.compnent';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

/*
    router를 어플리케이션의 root에 올리기 위해서 forRoot메서드가 사용되었습니다. 
    forRoot 메서드는 routing에 필요한 Router service provider와 지시자를 지공하고 현재 브라우저 URL에 따라 초기 네비게이션을 수행합니다.
    */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },// ‘/’로 접속이 되었을때 자동으로 ‘/dashboard’로 리다이렉트 시키겠습니다
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



