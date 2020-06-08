import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  { path: "", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled',
    enableTracing: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
