import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  image: string;
  dim: number;

  ngOnInit() {
    this.image = 'http://clipartmag.com/images/toolbox-cliparts-31.jpg';
    this.dim = 150;
  }

}
