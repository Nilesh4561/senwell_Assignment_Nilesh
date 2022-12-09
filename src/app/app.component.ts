import { Component, OnInit, VERSION } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  data = [
    { name: 'Nilesh' },
    { name: 'Ravi' },
    { name: 'suraj' },
    { name: 'siddhartha' },
    { name: 'Nilesh' },
    { name: 'Shivam' },
    { name: 'Sujit' },
    { name: 'Shivam' },
    { name: 'Nilesh' },
    { name: 'Suraj' },
    { name: 'Nilesh' },
    { name: 'Pankaj' },
    { name: 'Ravi' },
    { name: 'suarj' },
    { name: 'siddhartha' },
    { name: 'Nilesh' },
    { name: 'Rahul' },
    { name: 'Rahul' },
    { name: 'Rahul' },
    { name: 'Rohit' },
    { name: 'sujit' },
    { name: 'Shivam' },
    { name: 'Rohit' },
    { name: 'Ravi' },
    { name: 'pankaj' },
  ];

  dataToDisplay = [];

  ngOnInit(): void {
    const obs = from(this.data);
    let value = {};
    obs.subscribe((result) => {
      if (value[result.name]) {
        value[result.name] += 1;
      } else {
        value[result.name] = 1;
      }
    });
    this.dataToDisplay = Object.entries(value);
  }
}
