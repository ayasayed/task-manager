import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './main/home/home.component' ;
import {AddTaskComponent} from './main/add-task/add-task.component' ;
import {TaskComponent} from './main/task/task.component' ;
import {NotFoundComponent} from './main/not-found/not-found.component' ;

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addTask',component:AddTaskComponent},
  {path:'task/:id',component:TaskComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
