import { Routes } from '@angular/router';
import {ChapterViewComponent} from './components/chapter-view/chapter-view.component';
import {ChapterListComponent} from './components/chapter-list/chapter-list.component';
import {SubCategoryListComponent} from './components/sub-category-list/sub-category-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent
    },
    {
        path: ':categoryId',
        component: SubCategoryListComponent
    },
    {
        path: ':categoryId/:subCategoryId',
        component: ChapterListComponent
    },
    {
        path: ':categoryId/:subCategoryId/:chapterId',
        component: ChapterViewComponent
    }
];
