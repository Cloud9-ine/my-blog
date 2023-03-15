import { Component } from '@angular/core';

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

  onClick(tag: string) {
    this.display_tag = tag;
  }

}
