import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TranslationIndexerService} from '../../services/translation-indexer.service';

@Component({
  selector: 'app-sub-category-list',
  imports: [
    RouterLink
  ],
  templateUrl: './sub-category-list.component.html',
  styleUrl: './sub-category-list.component.css'
})
export class SubCategoryListComponent {

  constructor(readonly translationIndexerService: TranslationIndexerService, protected readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.translationIndexerService.getSubCategories(this.route.snapshot.paramMap.get('categoryId'));
  }

}
