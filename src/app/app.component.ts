import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[];

  ngOnInit() {
    d3.csv(
      /*'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'*/
      '../assets/SampleDate.csv'
    ).then(data => {
      this.data = data;
      let prevIndex = 0;
      // setInterval(data => {
      //   data[prevIndex]._highlighted = false;
      //   let index = Math.floor(Math.random() * 10);
      //   prevIndex = index;
      //   data[index]._centered = true;
      //   data[index]._expanded = true;
      //   data[index]._highlighted = true;
      //   this.data = Object.assign([], data);
      // }, 5000);
    });
  }
}
