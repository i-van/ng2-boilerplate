import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class BlockService {
  constructor(http: Http) {
    this.http = http;
  }

  getDetails() {
    let data = [
      { id: 1, name: 'user',      created: new Date(1437142998061) },
      { id: 2, name: 'admin',     created: new Date(1460152988061) },
      { id: 3, name: 'moderator', created: new Date(1463182978061) }
    ];

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(data);
        observer.complete();
      }, 750);
    });
  }
}
