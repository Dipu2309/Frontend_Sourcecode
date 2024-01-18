import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  template:`<p>hello {{courseName}}</p>`,
  styleUrl: './hello.component.css'
})
export class HelloComponent  implements OnInit{
  courseName: string = "Angular";
  constructor() { }
  ngOnInit() {
  }
}
