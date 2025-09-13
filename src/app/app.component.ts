import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RepoEntryComponent} from './components/repo-entry/repo-entry.component';
import {BackButtonComponent} from './components/back-button/back-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepoEntryComponent, BackButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uma-translation-reader';
}
