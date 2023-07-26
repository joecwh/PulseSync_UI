import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { FruitvegesComponent } from './components/fruitveges/fruitveges.component';

const routes: Routes = [
  {
    path : 'employee',
    component : EmployeeComponent
  },
  {
    path : 'fruitveges',
    component : FruitvegesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
