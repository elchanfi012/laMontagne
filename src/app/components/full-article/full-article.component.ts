import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  article: Article;
  @Output() voteEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  nbclickArticlecourant = 0;
  isLoading: boolean;
  faSpinner = faSpinner
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.articleService.getArticleById(+this.route.snapshot.paramMap.get('id')).subscribe((data:Article) => {this.article = data;
      this.isLoading = false;
    });
  }

  redirectHome() {
    this.router.navigate(['/home'])
  }

  vote() {
    this.voteEmitter.emit(true);
    this.nbclickArticlecourant += 1;
  }
}
