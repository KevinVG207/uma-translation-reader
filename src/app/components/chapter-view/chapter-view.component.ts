import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgStyle} from '@angular/common';
import {StoryTimeline} from '../../model/story-timeline';
import {NameBlockComponent} from '../name-block/name-block.component';
import {TextBlockComponent} from '../text-block/text-block.component';
import {ChoiceBlockComponent} from '../choice-block/choice-block.component';
import {TranslationIndexerService} from '../../services/translation-indexer.service';

@Component({
  selector: 'app-chapter-view',
  imports: [
    NameBlockComponent,
    TextBlockComponent,
    ChoiceBlockComponent,
    NgStyle
  ],
  templateUrl: './chapter-view.component.html',
  styleUrl: './chapter-view.component.css'
})
export class ChapterViewComponent {

  data: StoryTimeline | undefined;

  constructor(protected readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router, private readonly translationIndexerService: TranslationIndexerService) {
  }

  ngOnInit() {
    const chapterId = this.route.snapshot.params['chapterId'];
    this.reloadChapter(chapterId);
  }

  private reloadChapter(chapterId: string) {
    const categoryId = this.route.snapshot.params['categoryId'];
    const subCategoryId = this.route.snapshot.params['subCategoryId'];

    this.translationIndexerService.getChapters(categoryId, subCategoryId);

    const url = "https://raw.githubusercontent.com/" + this.translationIndexerService.repoUser + "/" + this.translationIndexerService.repoName + "/main/localized_data/assets/story/data/" + categoryId + "/" + subCategoryId + "/" + chapterId + ".json";

    this.http.get<StoryTimeline>(url).subscribe({
      next: response => {
        this.data = response;
      },
      error: error => {
        console.error(error);
        this.router.navigate(['/']);
      }
    });
  }

  collapseChoices(choice_data_list: string[]): string[]{
    return [...new Set(choice_data_list)];
  }

  hasNext() {
    return this.getNext() !== null;
  }

  getNext(): string | null {
    const idx = this.findCurrentChapterIdx();

    if (idx === null) {
      return null;
    }

    if (idx == this.translationIndexerService.chapters.length - 1) {
      return null;
    }

    const name = this.translationIndexerService.chapters[idx+1].name;
    return name.substring(0, name.length - 5);
  }

  hasPrevious(): boolean {
    return this.getPrevious() !== null;
  }

  getPrevious(): string | null {
    const idx = this.findCurrentChapterIdx();

    if (idx === null) {
      return null;
    }

    if (idx <= 0) {
      return null;
    }

    const name = this.translationIndexerService.chapters[idx-1].name;
    return name.substring(0, name.length - 5);
  }

  findCurrentChapterIdx(): number | null {
    const chapterId = this.route.snapshot.params['chapterId'];
    const res = this.translationIndexerService.chapters.filter(c => c.name == chapterId + '.json');

    if (!res) {
      return null;
    }

    const chapter = res[0];
    return this.translationIndexerService.chapters.indexOf(chapter);
  }

  navigate(next: string | null) {
    if (next === null) {
      return;
    }

    const categoryId = this.route.snapshot.params['categoryId'];
    const subCategoryId = this.route.snapshot.params['subCategoryId'];

    this.router.navigate([categoryId, subCategoryId, next]);
    this.data = undefined;
    this.reloadChapter(next);
  }
}
