import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  current_time: Date = new Date();
  timer: any;
  constructor() {
    this.timer = setInterval(
      () => {
        this.current_time = new Date();
      }, 1000
    );
  }
}
