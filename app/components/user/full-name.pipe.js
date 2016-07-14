import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export default class FullNamePipe implements PipeTransform {
  transform(user: { firstName: string, lastName: string }): string {
    return user.firstName + ' ' + user.lastName;
  }
}
