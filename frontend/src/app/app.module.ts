import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownModule } from "ngx-markdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoryComponent } from "./category/category.component";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent,
    NavComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
