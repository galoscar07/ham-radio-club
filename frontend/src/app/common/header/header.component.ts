import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cluburi = 'down';
  radioamatori = 'down';
  concursuri = 'down';
  articole = 'down';
  centenar = 'down';
  despreNoi = 'down';

  constructor() {}

  ngOnInit() {
  }

  turnArrowLeft(refElement: string) {
    switch (refElement) {
      case 'cluburi':
        this.cluburi = 'left';
        break;
      case 'radioamatori':
        this.radioamatori = 'left';
        break;
      case 'concursuri':
        this.concursuri = 'left';
        break;
      case 'articole':
        this.articole = 'left';
        break;
      case 'centenar':
        this.centenar = 'left';
        break;
      case 'despreNoi':
        this.despreNoi = 'left';
        break;
    }
  }

  turnArrowDown(refElement: string) {
    switch (refElement) {
      case 'cluburi':
        this.cluburi = 'down';
        break;
      case 'radioamatori':
        this.radioamatori = 'down';
        break;
      case 'concursuri':
        this.concursuri = 'down';
        break;
      case 'articole':
        this.articole = 'down';
        break;
      case 'centenar':
        this.centenar = 'down';
        break;
      case 'despreNoi':
        this.despreNoi = 'down';
        break;
    }
  }
}
