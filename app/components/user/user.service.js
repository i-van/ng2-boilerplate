import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let data = [
  { id: 1, login: 'user',      firstName: 'John', lastName: 'Daw',   created: new Date(1437142998061) },
  { id: 2, login: 'admin',     firstName: 'Jane', lastName: 'Daw',   created: new Date(1460152988061) },
  { id: 3, login: 'moderator', firstName: 'John', lastName: 'Smith', created: new Date(1463182978061) }
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
  fetch() {
    return wrapper(data);
  }

  fetchOne(id: Number) {
    return wrapper(data.find(user => user.id === id));
  }
}
