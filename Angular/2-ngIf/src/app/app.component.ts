import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = '2-ngIf';
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}
