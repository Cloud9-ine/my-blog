import { Component, Input } from '@angular/core';
import { Note } from "../../Note";
import { NoteLists } from "../../note-lists";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() description?: string;

  notes: Note[] = NoteLists;
}
