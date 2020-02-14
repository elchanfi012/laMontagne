export class Article {
    id: number;
    titre: string;
    contenu: string;
    image: string;
    dateCreated: Date
    constructor(id=null, titre=null, contenu=null, image=null, dateCreated=null) {
      this.id = id;
      this.titre = titre;
      this.image = image;
      this.contenu = contenu;
      this.dateCreated = dateCreated;
    }
  }
  