import { Component, Input } from '@angular/core';
import { Experience } from "../../Experience";
import { ExperienceLists } from "../../experience-lists";


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() description?: string;

  experiences: Experience[] = ExperienceLists;
}
