import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RepoEntryComponent} from './components/repo-entry/repo-entry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepoEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uma-translation-reader';
}
