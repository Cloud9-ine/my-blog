import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private router:Router, private el:ElementRef) {
  }

  scrollToViewById(id:string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToSection(id:string) {
    this.router
      .navigate([], {fragment: id})
      .then(r => {
        this.scrollToViewById(id);
      });
  }

  section_list = [
    'Education',
    'Experience'
  ]

}
