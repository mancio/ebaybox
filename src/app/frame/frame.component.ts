import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  basicurl: string;
  pics: number;

  constructor() { }

  ngOnInit() {
    this.basicurl = 'https://mancioboxblog.altervista.org/ebay/box/mini/';
    this.pics = 27;
  }

  counter(i: number) {
    return new Array(i);
  }

}
