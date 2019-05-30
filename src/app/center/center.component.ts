import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  kg: string;
  img: string;
  dim: number;
  list: string;

  constructor() { }

  ngOnInit() {
    this.kg = '10';
    this.img = 'https://cdn.shopify.com/s/files/1/2604/1662/products/mysterybox_1024x1024@2x.png?v=1514434361';
    this.dim = 150;
  }

}
