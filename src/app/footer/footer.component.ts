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
    this.image = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-lego-jokes-102-57dbf8b4ca884__605.jpg';
    this.image2 = 'https://i.pinimg.com/474x/58/ac/80/58ac80c4e7c9423f0cfd0f3f79145697--information-technology-humor-internet-jokes.jpg';
    this.dim = 250;
  }

}
