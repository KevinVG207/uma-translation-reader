import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslationIndexerService} from '../../services/translation-indexer.service';
import {StoryTimeline} from '../../model/story-timeline';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-chapter-view',
  imports: [
    JsonPipe
  ],
  templateUrl: './chapter-view.component.html',
  styleUrl: './chapter-view.component.css'
})
export class ChapterViewComponent {

  data: StoryTimeline | undefined;

  constructor(readonly translationIndexerService: TranslationIndexerService, private readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    const categoryId = this.route.snapshot.params['categoryId'];
    const subCategoryId = this.route.snapshot.params['subCategoryId'];
    const chapterId = this.route.snapshot.params['chapterId'];

    const url = "https://raw.githubusercontent.com/Hachimi-Hachimi/tl-en/dev/localized_data/assets/story/data/" + categoryId + "/" + subCategoryId + "/" + chapterId + ".json";

    this.http.get<StoryTimeline>(url).subscribe({
      next: response => {
        this.data = response;
      },
      error: error => {
        console.error(error);
        this.router.navigate(['/']);
      }
    })
  }
}
