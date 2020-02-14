import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'http://localhost:3000/article';
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  articles: Article[];
  constructor(private httpClient: HttpClient) {
    /*this.articles = [new Article(1, 'Le classico', `le match de l'année`, 'https://www.alg24.net/wp-content/uploads/2019/02/barca-real-c-est-aussi-un-duel-entre-lionel-messi-et-karim-benzema_247153.jpg', new Date(2020, 2, 2)),
                     new Article(2, 'Le derby', `le match de la ville de Madrid`, 'https://t.resfu.com/media/img_news/afp_fr_15c9aef405d4576f6e44499586b4d9f669087439.jpg?size=776x&q=60', new Date(2020, 1, 2))];
  */}

  /*Ma fonction get all articles retournera ma liste d'articles
   Etant donnée que le serveur peut mettre du temps à répondre,
   il retournera une Observable de type Article’[]*/

  getAllArticles(): Observable<Article[]> {
    /* J'effectue une requête de type get sur le serveur
    Si il y a un echec, je réessaie puis je traite l'erreur*/
    return this.httpClient.get<Article[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }


  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(this.apiUrl + "/" + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.apiUrl , article , this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editArticle(article: Article) {
    return this.httpClient.put<Article>(this.apiUrl + "/" + article.id ,article, this.httpOptions).pipe(
    catchError(this.handleError)
    );
    }


  deleteArticle(id: number): Observable<Article> {
    return this.httpClient.delete<Article>(this.apiUrl + "/" + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
    }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);


  }
}
