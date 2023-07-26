import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fruitveges',
  templateUrl: './fruitveges.component.html',
  styleUrls: ['./fruitveges.component.css']
})
export class FruitvegesComponent {
 
  data : any;
  constructor(private service : UserService) { }

  ngOnInit()
  {
    this.service.GetFruitVeges()
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
