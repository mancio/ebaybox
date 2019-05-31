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
    this.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojTpeD5vU6kComWjL3pkmnDFI60xV0_b_PqEZhJZ8gjX44XPV';
    this.dim = 200;
  }

}
