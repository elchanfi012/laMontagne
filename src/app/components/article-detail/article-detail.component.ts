import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { RandomColorService } from 'src/app/services/random-color.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  @Output() voteEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  nbclickArticlecourant = 0;
  bgColor: string;
  constructor(public colorService: RandomColorService) { }

  ngOnInit() {
    console.log('article detail', this.article);
    /*setInterval(() => {
      this.bgColor = this.colorService.changeColor();
    }, 10000);*/
  }

  vote() {
    this.voteEmitter.emit(true);
    this.nbclickArticlecourant += 1;
  }

}
