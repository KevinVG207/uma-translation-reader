import {Component, Input} from '@angular/core';
import {SanitizePipe} from '../../pipes/sanitize.pipe';

@Component({
  selector: 'app-name-block',
  imports: [
    SanitizePipe
  ],
  templateUrl: './name-block.component.html',
  styleUrl: './name-block.component.css'
})
export class NameBlockComponent {
  @Input() charName!: string;

}
