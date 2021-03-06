import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let data = [
  { id: 1, email: 'john.dow@example.com',   firstName: 'John', lastName: 'Daw',   created: new Date(1437142998061) },
  { id: 2, email: 'jane.dow@example.com',   firstName: 'Jane', lastName: 'Daw',   created: new Date(1460152988061) },
  { id: 3, email: 'john.smith@example.com', firstName: 'John', lastName: 'Smith', created: new Date(1463182978061) }
];

function wrapper(url, data) {
  console.log('request', url);
  console.log('response', data);
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
    return wrapper('/users', data.slice(0));
  }

  fetchOne(id: Number) {
    return wrapper('/users/' + id, data.find(user => user.id === id));
  }

  update(userData) {
    let user = data.find(user => user.id === userData.id);

    if (!user) {
      throw new Error('Cannot find User');
    }

    Object.assign(user, userData);
    return wrapper('/users/' + userData.id, user);
  }

  remove(userId) {
    let i = data.findIndex(user => user.id === userId);

    if (i !== -1) {
      data.splice(i, 1);
    }

    return wrapper('/users/' + userId, true);
  }
}
