import { Component, Input } from '@angular/core';
import { Section } from "../../Section";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() description?: string;

  eduSection: Section = {
    name: 'Education',
    description: "Education Background"
  };

  expSection: Section = {
    name: 'Experience',
    description: 'Work Experience'
  };

}
