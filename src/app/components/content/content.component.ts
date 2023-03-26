import { Component } from '@angular/core';
import { Section } from '../../Section';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  content_tags: string[] = [
    "Resume",
    "Games",
    "Others",
  ];
  display_tag: string = "Resume";
  text: string = "Resume";
  color: string = "Green";

  resumeSec: Section = {
    name: 'Resume',
    description: 'My Resume'
  }

  onClick(tag: string) {
    this.display_tag = tag;
  }

}
