import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faBars =faBars;
  constructor() { 
    //this.message = 'Bonjour';
  }

  ngOnInit() {
  }

  logEvent(menuItem: string){
    console.log(`l'utilisateur a cliqué sur ${menuItem}`);
  }

}
