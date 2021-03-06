import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public identidad;

  constructor() {
    this.identidad = JSON.parse(localStorage.getItem('identidad'));
  }


  toInicio(){
    document.getElementById("hero").scrollIntoView();
  }

  toAbout(){
    document.getElementById("about").scrollIntoView();
  }

  toServices(){
    document.getElementById("services").scrollIntoView();
  }

  toTeam(){
    document.getElementById("team").scrollIntoView();
  }

  ngOnInit(): void {}


}
