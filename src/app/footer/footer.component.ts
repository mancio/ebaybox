import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  image: string;
  dim: number;
  image2: string;

  constructor() { }

  ngOnInit() {
    this.image = 'https://www.harveynorman.com.au/blog/assets/Shopping-Online-Part-4-1000x747.jpg';
    this.image2 = 'http://clipart-library.com/image_gallery/170138.jpg';
    this.dim = 150;
  }

}
