import { Component } from '@angular/core';
import {TranslationIndexerService} from '../../services/translation-indexer.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  constructor(readonly translationIndexerService: TranslationIndexerService) {
  }
}
