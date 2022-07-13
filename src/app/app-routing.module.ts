import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'second', component: SecondComponent, canActivate:[AuthGuard], pathMatch: "full"},
  { path: 'first', component: FirstComponent, pathMatch: "full" }
];

// For purpose of exeercise, canActivate NOT included in first to allow page to visualise logged in status
// setting canActivate will prevent access to page if not logged in

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
