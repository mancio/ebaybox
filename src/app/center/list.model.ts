export class Item {
  public name: string;
  public spec: string;
  public url: string;
  public surl: string;


  constructor(name: string, spec: string, url: string, surl: string) {
    this.name = name;
    this.url = url;
    this.surl = surl;
    this.spec = spec;
  }

}


