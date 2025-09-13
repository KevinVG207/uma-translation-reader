import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TranslationIndexerService} from '../../services/translation-indexer.service';

@Component({
  selector: 'app-chapter-list',
    imports: [
        RouterLink
    ],
  templateUrl: './chapter-list.component.html',
  styleUrl: './chapter-list.component.css'
})
export class ChapterListComponent {

  constructor(readonly translationIndexerService: TranslationIndexerService, readonly route: ActivatedRoute) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.translationIndexerService.getChapters(this.route.snapshot.paramMap.get('categoryId'), this.route.snapshot.paramMap.get('subCategoryId'));
  }

}
