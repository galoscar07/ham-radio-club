import { Component, OnInit } from '@angular/core';
import {membrii} from './constants';

@Component({
  selector: 'app-membrii',
  templateUrl: './membrii.component.html',
  styleUrls: ['./membrii.component.scss']
})
export class MembriiComponent implements OnInit {
  memberList = membrii.sort((a, b) => (a.id > b.id) ? 1 : -1);

  constructor() { }

  ngOnInit() {
  }

}
