import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FruitvegesComponent } from './components/fruitveges/fruitveges.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FruitvegesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
