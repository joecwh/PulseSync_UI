import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  data : any;
  constructor(private service : UserService) { }

  ngOnInit()
  {
    this.service.GetEmployees()
    .subscribe({
      next : (res) =>
      {
        this.data = res;
        console.log(res);
      },
      error : (res) =>
      {
        console.log(res);
      }
    })
  }
}
