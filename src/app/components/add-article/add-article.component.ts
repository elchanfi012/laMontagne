import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.article = new Article();
    this.article.dateCreated = new Date();
  }
  onSubmit() {
    this.articleService.addArticle(this.article).subscribe(then => { this.router.navigate(['/admin']);});
    this.toastrService.success('Ton article a été ajouté avec succès','Félicitaions !');
   

}
}
