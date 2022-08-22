import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReadMeComponent } from './read-me/read-me.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'readme', component: ReadMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
