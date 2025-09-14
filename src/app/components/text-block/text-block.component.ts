import {Component, Input} from '@angular/core';
import {SanitizePipe} from '../../pipes/sanitize.pipe';

@Component({
  selector: 'app-text-block',
  imports: [
    SanitizePipe
  ],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.css'
})
export class TextBlockComponent {
  @Input() text!: string;
  @Input() nameExists!: boolean;

}
