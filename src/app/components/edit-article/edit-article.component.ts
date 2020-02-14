import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { ToastrService } from 'ngx-toastr';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
 article: Article;
 faSpinner = faSpinner;
 isLoading: boolean;
  constructor( private route:ActivatedRoute, private articleService: ArticleService, private toastrService: ToastrService, private router: Router) { }
  
  ngOnInit() {
    this.isLoading = true;
    this.articleService.getArticleById(+this.route.snapshot.paramMap.get('id')).subscribe((data:Article) => {
      this.article = data;
      this.isLoading = false;
    });

  }
  onSubmit() {
    this.articleService.editArticle(this.article).subscribe(then => { this.router.navigate(['/admin']);});
    this.toastrService.success('Ton article a été modifié avec succès','Félicitaions !');


}

}
