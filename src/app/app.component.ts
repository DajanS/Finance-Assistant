import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance-Assistant';
  cycle_id:number | undefined;

  getCycleId(event: any){
    this.cycle_id = event
  }
}
