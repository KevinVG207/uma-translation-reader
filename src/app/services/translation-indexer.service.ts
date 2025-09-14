import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GhFile} from '../model/github/gh-file';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TranslationIndexerService {

  repoUrlSubject = new Subject<string>();
  private baseUrl: string = "";
  private readonly dataPath = "/contents/localized_data/assets/story/data"

  categories: GhFile[] = [];
  subCategories: GhFile[] = [];
  chapters: GhFile[] = [];

  lastCategory: string = "";
  lastSubCategory: string = "";
  lastChapter: string = "";

  repoUser: string = "";
  repoName: string = "";

  constructor(private readonly http: HttpClient, private readonly router: Router) {
  }

  reload(value: string) {
    value = value.toLowerCase();
    value = value.substring(value.indexOf("github.com/") + 11);
    let values = value.split("/");

    this.repoUser = values[0];
    this.repoName = values[1];

    let newBase = "https://api.github.com/repos/" + this.repoUser + "/" + this.repoName;
    this.repoUrlSubject.next(newBase);
    this.baseUrl = newBase;
    this.getCategories();
  }

  getCategories() {
    this.categories = [];
    this.subCategories = [];
    this.chapters = [];

    this.http.get<GhFile[]>(this.baseUrl + this.dataPath).subscribe({
      next: (v) => {
        this.categories = v;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  getSubCategories(categoryId: string | null) {
    console.log('getSubCategories ' + categoryId);

    if (categoryId === null) {
      return;
    }

    if (this.subCategories && categoryId == this.lastCategory) {
      return;
    }

    this.lastCategory = categoryId;

    this.subCategories = [];
    this.chapters = [];

    this.http.get<GhFile[]>(this.baseUrl + this.dataPath + '/' + categoryId).subscribe({
      next: (v) => {
        this.subCategories = v;
      },
      error: (e) => {
        console.error(e);
        this.router.navigate(['/']);
      },
    });
  }

  getChapters(categoryId: string | null, subCategoryId: string | null) {
    console.log('getChapters ' + categoryId + ' chapterId ' + subCategoryId);

    if (categoryId === null || subCategoryId === null) {
      return;
    }

    if (this.chapters && categoryId == this.lastCategory && subCategoryId == this.lastSubCategory) {
      return;
    }

    this.lastCategory = categoryId;
    this.lastSubCategory = subCategoryId;

    this.chapters = [];

    this.http.get<GhFile[]>(this.baseUrl + this.dataPath + '/' + categoryId + '/' + subCategoryId).subscribe({
      next: (v) => {
        this.chapters = [];
        for (const chapter of v) {
          if (!chapter.name.endsWith(".json")) {
            continue;
          }

          this.chapters.push(chapter);
        }
      },
      error: (e) => {
        console.error(e);
        this.router.navigate(['/']);
      }
    });
  }
}
