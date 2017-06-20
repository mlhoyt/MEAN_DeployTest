import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './battle/select/select.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './battle/rankings/rankings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SelectComponent },
  { path: 'results', pathMatch: 'full', component: ResultsComponent },
  { path: 'rankings', pathMatch: 'full', component: RankingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
