import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NglModule } from 'ng-lightning';
import { DemoDatatablesBasic } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NglModule ],
  declarations: [ DemoDatatablesBasic ],
  bootstrap:    [ DemoDatatablesBasic ],
  providers   : [ ]
})
export class AppModule { }
