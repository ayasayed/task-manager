import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AddTaskComponent } from './main/add-task/add-task.component';
import { TaskComponent } from './main/task/task.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularEditorModule, HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, AddTaskComponent, TaskComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
