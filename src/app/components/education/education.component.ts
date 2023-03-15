import { Component } from '@angular/core';
import { Education } from "../../Education";
import { EducationLists } from "../../education-lists";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Education[] = EducationLists;
}
