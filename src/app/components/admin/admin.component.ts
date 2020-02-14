import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { faEdit, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[];
  faEdit = faEdit;
  faTrash = faTrash;
  faSpinner = faSpinner;
  isLoading: boolean;
  constructor(private articleService: ArticleService, private toastrService: ToastrService) { }

  ngOnInit() {
    /* J'initialise le chargement à true
    car on va demander une ressource à notre serveur après */
    this.isLoading = true;
    /* Je demande à mon service d'aller chercher toutes les ressources articles */
    this.articleService.getAllArticles().subscribe((data: Article[]) => {
       /* Quand mon serveur m'aura répondu je dit à mon composant que la liste d'articles
      sera égale à la réponse de mon serveur */
      this.articles = data;
      // on arrete le chargement car les données sont initialisées
      this.isLoading = false;
    });

  }

  deleteArticle(id: number) {
    this.isLoading = true;
    this.articleService.deleteArticle(id).subscribe(then => {
      this.articleService.getAllArticles().subscribe((data: Article[]) => {
        this.articles = data;
        this.isLoading = false;
      });
    });
   // this.articles = this.articleService.deleteArticle(article);
    this.toastrService.success('Ton article a été supprimé avec succès', 'Félicitaions !');
  }
}
