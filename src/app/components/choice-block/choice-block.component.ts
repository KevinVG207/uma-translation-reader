import {Component, Input} from '@angular/core';
import {SanitizePipe} from "../../pipes/sanitize.pipe";

@Component({
  selector: 'app-choice-block',
    imports: [
        SanitizePipe
    ],
  templateUrl: './choice-block.component.html',
  styleUrl: './choice-block.component.css'
})
export class ChoiceBlockComponent {
  @Input() text!: any;

}
