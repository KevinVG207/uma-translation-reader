import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslationIndexerService} from '../../services/translation-indexer.service';

@Component({
  selector: 'app-repo-entry',
  imports: [
    FormsModule
  ],
  templateUrl: './repo-entry.component.html',
  styleUrl: './repo-entry.component.css'
})
export class RepoEntryComponent {
  value = localStorage.getItem('repo');

  constructor(private readonly translationIndexer: TranslationIndexerService) {}

  ngAfterViewInit() {
    this.reloadRepo();
  }

  reloadRepo() {
    console.log("Button clicked " + this.value);

    if (this.value === null) {
      return;
    }

    this.translationIndexer.reload(this.value);
    localStorage.setItem('repo', this.value);
  }
}
