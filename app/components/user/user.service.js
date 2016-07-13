import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let data = [
  { id: 1, name: 'user',      created: new Date(1437142998061) },
  { id: 2, name: 'admin',     created: new Date(1460152988061) },
  { id: 3, name: 'moderator', created: new Date(1463182978061) }
];

function wrapper(data) {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next(data);
      observer.complete();
    }, 750);
  });
}

@Injectable()
export default class UserService {
  fetchAll() {
    return wrapper(data);
  }

  fetch(id: Number) {
    return wrapper(data.find(user => user.id === id));
  }
}
