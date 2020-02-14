import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ALaUneComponent } from './components/a-la-une/a-la-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { SportsComponent } from './components/sports/sports.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { EconomieComponent } from './components/economie/economie.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
  { path: 'a-la-une', component: ALaUneComponent },
  { path: 'vie-locale', component: VieLocaleComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'loisirs', component: LoisirsComponent },
  { path: 'economie', component:EconomieComponent },
  { path: 'admin', component:AdminComponent },
  { path: 'admin/article/ajout', component:AddArticleComponent },
  { path: 'admin/article/edit/:id', component:EditArticleComponent },
  { path: 'article/:id', component:FullArticleComponent },
  { path: 'admin', component:AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
